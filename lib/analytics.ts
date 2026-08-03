type GTagParams = Record<string, string | number | boolean>

declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'js' | 'set',
      targetId: string,
      params?: GTagParams
    ) => void
    dataLayer: unknown[]
  }
}

function ready(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

export function trackPageView(url: string): void {
  if (!ready()) return
  window.gtag('event', 'page_view', { page_location: url })
}

export function trackPhoneClick(phone: string): void {
  if (!ready()) return
  window.gtag('event', 'phone_click', {
    phone_number: phone,
    page_location: window.location.href,
    page_title: document.title,
  })
}

export function trackWhatsAppClick(phone: string): void {
  if (!ready()) return
  window.gtag('event', 'whatsapp_click', {
    phone_number: phone,
    page_location: window.location.href,
    page_title: document.title,
  })
}

export function trackEmailClick(email: string): void {
  if (!ready()) return
  window.gtag('event', 'email_click', {
    email_address: email,
    page_location: window.location.href,
  })
}

export function trackGenerateLead(service: string, city = 'Dubai'): void {
  if (!ready()) return
  window.gtag('event', 'generate_lead', {
    service,
    city,
    page_location: window.location.href,
  })
}

export function trackQuoteRequest(source = 'button'): void {
  if (!ready()) return
  window.gtag('event', 'quote_request', {
    source,
    page_location: window.location.href,
    page_title: document.title,
  })
}

export function trackFormSubmit(formName: string, service = 'unknown'): void {
  if (!ready()) return
  window.gtag('event', 'form_submit', {
    form_name: formName,
    service,
    page_location: window.location.href,
  })
}

export function trackBooking(): void {
  if (!ready()) return
  window.gtag('event', 'booking_complete', {
    page_location: window.location.href,
    page_title: document.title,
  })
}

export function trackDirectionsClick(): void {
  if (!ready()) return
  window.gtag('event', 'directions_click', {
    business_name: 'Ceramic My Car',
    page_location: window.location.href,
  })
}
