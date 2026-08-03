-- ============================================================
-- Migration: 001_bookings
-- Creates the bookings table with all supporting infrastructure
-- ============================================================

-- Create bookings table
CREATE TABLE IF NOT EXISTS public.bookings (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name     TEXT NOT NULL,
  phone         TEXT NOT NULL,
  email         TEXT NOT NULL,
  service       TEXT NOT NULL,
  vehicle_type  TEXT NOT NULL,
  booking_date  TEXT NOT NULL,
  booking_time  TEXT NOT NULL,
  address       TEXT,
  city          TEXT NOT NULL,
  postcode      TEXT,
  notes         TEXT,
  price_estimate TEXT,
  status        TEXT NOT NULL DEFAULT 'pending'
                  CONSTRAINT bookings_status_check
                  CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- -------------------------------------------------------
-- Auto-update trigger for updated_at
-- -------------------------------------------------------
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

CREATE TRIGGER bookings_updated_at
  BEFORE UPDATE ON public.bookings
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- -------------------------------------------------------
-- Indexes
-- -------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_bookings_status
  ON public.bookings (status);

CREATE INDEX IF NOT EXISTS idx_bookings_booking_date
  ON public.bookings (booking_date);

CREATE INDEX IF NOT EXISTS idx_bookings_created_at_desc
  ON public.bookings (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_bookings_email
  ON public.bookings (email);

-- -------------------------------------------------------
-- Row Level Security
-- -------------------------------------------------------
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Anon + authenticated users can INSERT (create bookings)
CREATE POLICY "bookings_insert_policy"
  ON public.bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users (admins) can SELECT
CREATE POLICY "bookings_select_policy"
  ON public.bookings
  FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users (admins) can UPDATE
CREATE POLICY "bookings_update_policy"
  ON public.bookings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Only authenticated users (admins) can DELETE
CREATE POLICY "bookings_delete_policy"
  ON public.bookings
  FOR DELETE
  TO authenticated
  USING (true);
