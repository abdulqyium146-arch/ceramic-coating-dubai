import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { adminSignOut } from '@/actions/admin'
import { LayoutDashboard, LogOut } from 'lucide-react'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Top nav */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-dark-950/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <Link
              href="/admin/bookings"
              className="flex items-center gap-2.5 text-white hover:text-gold-400 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-gold-500/15 border border-gold-500/25 flex items-center justify-center">
                <LayoutDashboard className="h-4 w-4 text-gold-400" />
              </div>
              <span className="font-bold text-sm">Ceramic My Car</span>
              <span className="text-white/30 text-xs font-medium">Admin</span>
            </Link>

            {/* User + sign out */}
            <div className="flex items-center gap-4">
              {user && (
                <span className="hidden sm:block text-xs text-white/40 truncate max-w-[200px]">
                  {user.email}
                </span>
              )}
              <form action={adminSignOut}>
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-xs font-semibold text-white/60 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all"
                >
                  <LogOut className="h-3.5 w-3.5" />
                  Sign Out
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  )
}
