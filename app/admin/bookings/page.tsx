import { Suspense } from 'react'
import { createClient } from '@/lib/supabase/server'
import { BookingsTable } from '@/components/admin/BookingsTable'
import { BookingFilters } from '@/components/admin/BookingFilters'
import type { Booking, BookingStatus } from '@/types/booking'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const PAGE_SIZE = 20

interface SearchParams {
  search?: string
  status?: string
  sort?: string
  page?: string
}

interface AdminBookingsPageProps {
  searchParams: Promise<SearchParams>
}

interface StatCardProps {
  label: string
  value: number
  color?: string
}

function StatCard({ label, value, color = 'text-white' }: StatCardProps) {
  return (
    <div className="glass-card rounded-xl p-4">
      <div className={cn('text-2xl font-bold', color)}>{value.toLocaleString()}</div>
      <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mt-1">{label}</div>
    </div>
  )
}

export default async function AdminBookingsPage({ searchParams }: AdminBookingsPageProps) {
  const params = await searchParams
  const search = params.search ?? ''
  const status = params.status ?? ''
  const sort = params.sort ?? 'created_desc'
  const page = Math.max(1, parseInt(params.page ?? '1', 10))
  const offset = (page - 1) * PAGE_SIZE

  const supabase = await createClient()

  // Build query
  let query = supabase
    .from('bookings')
    .select('*', { count: 'exact' })

  if (status) {
    query = query.eq('status', status as BookingStatus)
  }

  if (search) {
    query = query.or(
      `full_name.ilike.%${search}%,email.ilike.%${search}%,phone.ilike.%${search}%`
    )
  }

  // Sorting
  if (sort === 'created_asc') {
    query = query.order('created_at', { ascending: true })
  } else if (sort === 'date_asc') {
    query = query.order('booking_date', { ascending: true })
  } else if (sort === 'date_desc') {
    query = query.order('booking_date', { ascending: false })
  } else {
    // Default: newest first
    query = query.order('created_at', { ascending: false })
  }

  query = query.range(offset, offset + PAGE_SIZE - 1)

  const { data, count, error } = await query

  const bookings: Booking[] = (error ? [] : (data as Booking[])) ?? []
  const totalCount = count ?? 0
  const totalPages = Math.ceil(totalCount / PAGE_SIZE)

  // Stat queries (unfiltered counts)
  const [{ count: pendingCount }, { count: confirmedCount }, { count: completedCount }] =
    await Promise.all([
      supabase.from('bookings').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
      supabase.from('bookings').select('*', { count: 'exact', head: true }).eq('status', 'confirmed'),
      supabase.from('bookings').select('*', { count: 'exact', head: true }).eq('status', 'completed'),
    ])

  // Build pagination URLs
  function buildPageUrl(p: number) {
    const sp = new URLSearchParams()
    if (search) sp.set('search', search)
    if (status) sp.set('status', status)
    if (sort && sort !== 'created_desc') sp.set('sort', sort)
    if (p > 1) sp.set('page', String(p))
    const qs = sp.toString()
    return qs ? `?${qs}` : '?'
  }

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Bookings</h1>
          <p className="text-sm text-white/40 mt-0.5">
            {totalCount.toLocaleString()} booking{totalCount !== 1 ? 's' : ''} total
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatCard label="Total" value={totalCount} />
        <StatCard label="Pending" value={pendingCount ?? 0} color="text-amber-400" />
        <StatCard label="Confirmed" value={confirmedCount ?? 0} color="text-blue-400" />
        <StatCard label="Completed" value={completedCount ?? 0} color="text-green-400" />
      </div>

      {/* Filters */}
      <Suspense fallback={null}>
        <BookingFilters />
      </Suspense>

      {/* Table */}
      <div className="glass-card rounded-2xl overflow-hidden">
        <BookingsTable bookings={bookings} />
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between pt-2">
          <p className="text-sm text-white/40">
            Page {page} of {totalPages}
          </p>
          <div className="flex items-center gap-2">
            {page > 1 ? (
              <Link
                href={buildPageUrl(page - 1)}
                className="flex items-center gap-1 px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-white/70 hover:text-white hover:border-white/20 transition-all"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Link>
            ) : (
              <span className="flex items-center gap-1 px-4 py-2 rounded-xl border border-white/5 bg-white/[0.02] text-sm text-white/20 cursor-not-allowed">
                <ChevronLeft className="h-4 w-4" />
                Previous
              </span>
            )}

            {page < totalPages ? (
              <Link
                href={buildPageUrl(page + 1)}
                className="flex items-center gap-1 px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-white/70 hover:text-white hover:border-white/20 transition-all"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Link>
            ) : (
              <span className="flex items-center gap-1 px-4 py-2 rounded-xl border border-white/5 bg-white/[0.02] text-sm text-white/20 cursor-not-allowed">
                Next
                <ChevronRight className="h-4 w-4" />
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
