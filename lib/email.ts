import { Resend } from 'resend'
import { SITE_CONFIG } from '@/lib/constants'
import type { BookingFormData } from '@/types/booking'

const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

const FROM_ADDRESS = 'Ceramic My Car <bookings@ceramic-my-car.com>'

function formatServiceName(slug: string): string {
  const map: Record<string, string> = {
    'ceramic-coating': 'Ceramic Coating',
    ppf: 'Paint Protection Film (PPF)',
    'graphene-coating': 'Graphene Coating',
    'paint-correction': 'Paint Correction',
    'interior-detailing': 'Interior Detailing',
    'exterior-detailing': 'Exterior Detailing',
    'window-tinting': 'Window Tinting',
  }
  return map[slug] ?? slug
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString('en-AE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return dateStr
  }
}

function formatTime(timeStr: string): string {
  try {
    const [hours, minutes] = timeStr.split(':').map(Number)
    const period = hours >= 12 ? 'PM' : 'AM'
    const displayHour = hours % 12 || 12
    return `${displayHour}:${String(minutes).padStart(2, '0')} ${period}`
  } catch {
    return timeStr
  }
}

export async function sendBookingConfirmationToCustomer(
  booking: BookingFormData & { id: string }
): Promise<{ success: boolean }> {
  if (!resend) {
    console.warn('[Email] RESEND_API_KEY not set — skipping customer confirmation email')
    return { success: false }
  }

  const ref = booking.id.slice(0, 8).toUpperCase()
  const serviceName = formatServiceName(booking.service)
  const formattedDate = formatDate(booking.booking_date)
  const formattedTime = formatTime(booking.booking_time)
  const locationLine = booking.address
    ? `${booking.address}, ${booking.city}`
    : booking.city

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Booking Confirmed — Ceramic My Car Dubai</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0f;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 100%);border-radius:16px 16px 0 0;padding:40px 40px 32px;text-align:center;border-bottom:1px solid rgba(245,158,11,0.2);">
              <div style="font-size:28px;font-weight:800;color:#f59e0b;letter-spacing:-0.5px;margin-bottom:4px;">Ceramic My Car</div>
              <div style="font-size:13px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase;">Dubai's Premium Auto Detailing Studio</div>
            </td>
          </tr>

          <!-- Success Banner -->
          <tr>
            <td style="background:#0f1923;padding:32px 40px;text-align:center;">
              <div style="font-size:48px;margin-bottom:12px;">✅</div>
              <h1 style="margin:0 0 8px;font-size:24px;font-weight:700;color:#ffffff;">Booking Request Received!</h1>
              <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.6);">We'll confirm your appointment within 2 hours during business hours.</p>
            </td>
          </tr>

          <!-- Booking Reference -->
          <tr>
            <td style="background:#0f1923;padding:0 40px 24px;text-align:center;">
              <div style="display:inline-block;background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);border-radius:8px;padding:12px 24px;">
                <div style="font-size:11px;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:2px;margin-bottom:4px;">Booking Reference</div>
                <div style="font-size:22px;font-weight:800;color:#f59e0b;font-family:monospace;letter-spacing:2px;">${ref}</div>
              </div>
            </td>
          </tr>

          <!-- Booking Details -->
          <tr>
            <td style="background:#0f1923;padding:0 40px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;overflow:hidden;">
                <tr><td style="padding:20px 24px;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <div style="font-size:11px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:4px;">Service</div>
                  <div style="font-size:16px;font-weight:600;color:#ffffff;">${serviceName}</div>
                </td></tr>
                <tr><td style="padding:20px 24px;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <div style="font-size:11px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:4px;">Vehicle</div>
                  <div style="font-size:16px;font-weight:600;color:#ffffff;">${booking.vehicle_type}</div>
                </td></tr>
                <tr><td style="padding:20px 24px;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <div style="font-size:11px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:4px;">Date</div>
                  <div style="font-size:16px;font-weight:600;color:#ffffff;">${formattedDate}</div>
                </td></tr>
                <tr><td style="padding:20px 24px;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <div style="font-size:11px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:4px;">Time</div>
                  <div style="font-size:16px;font-weight:600;color:#ffffff;">${formattedTime}</div>
                </td></tr>
                <tr><td style="padding:20px 24px;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <div style="font-size:11px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:4px;">Location</div>
                  <div style="font-size:16px;font-weight:600;color:#ffffff;">${locationLine}</div>
                </td></tr>
                ${booking.price_estimate ? `<tr><td style="padding:20px 24px;">
                  <div style="font-size:11px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:4px;">Price Estimate</div>
                  <div style="font-size:18px;font-weight:700;color:#f59e0b;">${booking.price_estimate}</div>
                  <div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px;">Final price confirmed after free inspection</div>
                </td></tr>` : ''}
              </table>
            </td>
          </tr>

          <!-- Next Steps -->
          <tr>
            <td style="background:#0f1923;padding:0 40px 32px;">
              <h2 style="margin:0 0 16px;font-size:16px;font-weight:700;color:#ffffff;">What Happens Next</h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:0 0 12px;">
                    <div style="display:flex;align-items:flex-start;gap:12px;">
                      <div style="background:rgba(245,158,11,0.15);border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#f59e0b;flex-shrink:0;text-align:center;line-height:28px;">1</div>
                      <div style="padding-left:12px;">
                        <div style="font-size:14px;font-weight:600;color:#ffffff;margin-bottom:2px;">We Review Your Booking</div>
                        <div style="font-size:13px;color:rgba(255,255,255,0.5);">Our team checks availability and your requirements.</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 12px;">
                    <div style="display:flex;align-items:flex-start;gap:12px;">
                      <div style="background:rgba(245,158,11,0.15);border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#f59e0b;flex-shrink:0;text-align:center;line-height:28px;">2</div>
                      <div style="padding-left:12px;">
                        <div style="font-size:14px;font-weight:600;color:#ffffff;margin-bottom:2px;">Confirmation via WhatsApp/Call</div>
                        <div style="font-size:13px;color:rgba(255,255,255,0.5);">We'll contact you within 2 hours on +971 55 515 3180.</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div style="display:flex;align-items:flex-start;gap:12px;">
                      <div style="background:rgba(245,158,11,0.15);border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#f59e0b;flex-shrink:0;text-align:center;line-height:28px;">3</div>
                      <div style="padding-left:12px;">
                        <div style="font-size:14px;font-weight:600;color:#ffffff;margin-bottom:2px;">Drop Off or We Collect</div>
                        <div style="font-size:13px;color:rgba(255,255,255,0.5);">Bring your vehicle to us or use our free pickup service.</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="background:#0f1923;padding:0 40px 40px;text-align:center;">
              <a href="https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%2C%20I%20have%20a%20booking%20reference%20${ref}%20and%20would%20like%20to%20follow%20up."
                 style="display:inline-block;background:linear-gradient(135deg,#f59e0b,#d97706);color:#0a0a0f;font-weight:700;font-size:15px;padding:14px 32px;border-radius:10px;text-decoration:none;">
                WhatsApp Us to Follow Up
              </a>
              <p style="margin:16px 0 0;font-size:13px;color:rgba(255,255,255,0.4);">Or call us: <a href="tel:${SITE_CONFIG.phone}" style="color:#f59e0b;text-decoration:none;">${SITE_CONFIG.phoneDisplay}</a></p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0a0a0f;border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;border-top:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0 0 4px;font-size:13px;color:rgba(255,255,255,0.4);">Al Quoz Industrial Area 4, Dubai, UAE</p>
              <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.25);">© ${new Date().getFullYear()} Ceramic My Car. All rights reserved.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  try {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: [booking.email],
      subject: 'Booking Confirmed — Ceramic My Car Dubai',
      html,
    })
    return { success: true }
  } catch (err) {
    console.error('[Email] Failed to send customer confirmation:', err)
    return { success: false }
  }
}

export async function sendBookingNotificationToBusiness(
  booking: BookingFormData & { id: string }
): Promise<{ success: boolean }> {
  if (!resend) {
    console.warn('[Email] RESEND_API_KEY not set — skipping business notification email')
    return { success: false }
  }

  const ref = booking.id.slice(0, 8).toUpperCase()
  const serviceName = formatServiceName(booking.service)
  const formattedDate = formatDate(booking.booking_date)
  const formattedTime = formatTime(booking.booking_time)

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Booking Notification</title>
</head>
<body style="margin:0;padding:0;background-color:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:32px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#0a0a0f;padding:24px 32px;text-align:center;">
              <div style="font-size:20px;font-weight:800;color:#f59e0b;">Ceramic My Car — New Booking</div>
              <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px;">Ref: <strong style="color:#f59e0b;font-family:monospace;">${ref}</strong></div>
            </td>
          </tr>

          <!-- Alert -->
          <tr>
            <td style="background:#fffbeb;border-bottom:2px solid #f59e0b;padding:16px 32px;">
              <p style="margin:0;font-size:15px;font-weight:600;color:#92400e;">🔔 New booking from ${booking.full_name} — ${serviceName}</p>
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="padding:24px 32px;">
              <h2 style="margin:0 0 16px;font-size:15px;font-weight:700;color:#111827;text-transform:uppercase;letter-spacing:0.5px;">Customer Details</h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${[
                  ['Full Name', booking.full_name],
                  ['Phone / WhatsApp', booking.phone],
                  ['Email', booking.email],
                  ['Service', serviceName],
                  ['Vehicle Type', booking.vehicle_type],
                  ['Booking Date', formattedDate],
                  ['Booking Time', formattedTime],
                  ['City', booking.city],
                  ...(booking.address ? [['Address', booking.address]] : []),
                  ...(booking.postcode ? [['Postcode', booking.postcode]] : []),
                  ...(booking.price_estimate ? [['Price Estimate', booking.price_estimate]] : []),
                  ...(booking.notes ? [['Notes', booking.notes]] : []),
                ]
                  .map(
                    ([label, value]) => `<tr>
                  <td style="padding:8px 0;border-bottom:1px solid #f3f4f6;width:35%;">
                    <span style="font-size:13px;color:#6b7280;font-weight:500;">${label}</span>
                  </td>
                  <td style="padding:8px 0 8px 16px;border-bottom:1px solid #f3f4f6;">
                    <span style="font-size:14px;color:#111827;font-weight:600;">${value ?? ''}</span>
                  </td>
                </tr>`
                  )
                  .join('')}
              </table>
            </td>
          </tr>

          <!-- Actions -->
          <tr>
            <td style="padding:0 32px 32px;text-align:center;">
              <a href="https://ceramic-my-car.com/admin/bookings"
                 style="display:inline-block;background:#0a0a0f;color:#f59e0b;font-weight:700;font-size:14px;padding:12px 28px;border-radius:8px;text-decoration:none;margin-right:12px;">
                View in Admin
              </a>
              <a href="https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%20${encodeURIComponent(booking.full_name)}%2C%20this%20is%20Ceramic%20My%20Car%20confirming%20your%20booking%20ref%20${ref}."
                 style="display:inline-block;background:#25d366;color:#ffffff;font-weight:700;font-size:14px;padding:12px 28px;border-radius:8px;text-decoration:none;">
                WhatsApp Customer
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;padding:16px 32px;text-align:center;border-top:1px solid #e5e7eb;">
              <p style="margin:0;font-size:12px;color:#9ca3af;">This is an automated notification from the Ceramic My Car booking system.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  try {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: [SITE_CONFIG.email],
      subject: `New Booking: ${booking.full_name} — ${serviceName}`,
      html,
    })
    return { success: true }
  } catch (err) {
    console.error('[Email] Failed to send business notification:', err)
    return { success: false }
  }
}
