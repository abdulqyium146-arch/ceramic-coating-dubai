import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-dark-950 text-center px-4">
      <p className="text-8xl font-black text-gradient-gold mb-4">404</p>
      <h1 className="text-2xl font-bold text-white mb-4">Page Not Found</h1>
      <p className="text-white/60 mb-8 max-w-sm">
        The page you are looking for does not exist. Let us help you find what you need.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
        <Link href="/services" className="btn-secondary">
          Our Services
        </Link>
        <Link href="/contact" className="btn-ghost">
          Contact Us
        </Link>
      </div>
    </div>
  )
}
