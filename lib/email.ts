import { Resend } from 'resend'
import { SITE_CONFIG } from '@/lib/constants'

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

interface BookingEmailData {
  id: string
  full_name: string
  phone: string
  email: string
  service: string
  city: string
  notes?: string | null
}

export async function sendBookingConfirmationToCustomer(
  booking: BookingEmailData
): Promise<{ success: boolean }> {
  if (!resend) {
    console.warn('[Email] RESEND_API_KEY not set — skipping customer confirmation email')
    return { success: false }
  }

  const ref = booking.id.slice(0, 8).toUpperCase()
  const serviceName = formatServiceName(booking.service)

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Booking Received — Ceramic My Car Dubai</title>
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

          <!-- Success -->
          <tr>
            <td style="background:#0f1923;padding:32px 40px;text-align:center;">
              <div style="font-size:48px;margin-bottom:12px;">✅</div>
              <h1 style="margin:0 0 8px;font-size:24px;font-weight:700;color:#ffffff;">Request Received!</h1>
              <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.6);">Hi ${booking.full_name.split(' ')[0]}, we'll call you within 2 hours to confirm.</p>
            </td>
          </tr>

          <!-- Reference -->
          <tr>
            <td style="background:#0f1923;padding:0 40px 24px;text-align:center;">
              <div style="display:inline-block;background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);border-radius:8px;padding:12px 24px;">
                <div style="font-size:11px;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:2px;margin-bottom:4px;">Booking Reference</div>
                <div style="font-size:22px;font-weight:800;color:#f59e0b;font-family:monospace;letter-spacing:2px;">#${ref}</div>
              </div>
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="background:#0f1923;padding:0 40px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;overflow:hidden;">
                <tr><td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <div style="font-size:11px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:4px;">Service</div>
                  <div style="font-size:15px;font-weight:600;color:#ffffff;">${serviceName}</div>
                </td></tr>
                <tr><td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <div style="font-size:11px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:4px;">Location</div>
                  <div style="font-size:15px;font-weight:600;color:#ffffff;">${booking.city}</div>
                </td></tr>
                ${booking.notes ? `<tr><td style="padding:16px 20px;">
                  <div style="font-size:11px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:4px;">Your Notes</div>
                  <div style="font-size:14px;color:rgba(255,255,255,0.8);">${booking.notes}</div>
                </td></tr>` : ''}
              </table>
            </td>
          </tr>

          <!-- Next Steps -->
          <tr>
            <td style="background:#0f1923;padding:0 40px 32px;">
              <h2 style="margin:0 0 16px;font-size:16px;font-weight:700;color:#ffffff;">What Happens Next</h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding:0 0 12px;">
                  <div style="padding-left:40px;position:relative;">
                    <div style="position:absolute;left:0;top:0;background:rgba(245,158,11,0.15);border-radius:50%;width:28px;height:28px;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#f59e0b;">1</div>
                    <div style="font-size:14px;font-weight:600;color:#ffffff;margin-bottom:2px;">We Review Your Request</div>
                    <div style="font-size:13px;color:rgba(255,255,255,0.5);">Our team checks your requirements.</div>
                  </div>
                </td></tr>
                <tr><td style="padding:0 0 12px;">
                  <div style="padding-left:40px;position:relative;">
                    <div style="position:absolute;left:0;top:0;background:rgba(245,158,11,0.15);border-radius:50%;width:28px;height:28px;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#f59e0b;">2</div>
                    <div style="font-size:14px;font-weight:600;color:#ffffff;margin-bottom:2px;">We Call or WhatsApp You</div>
                    <div style="font-size:13px;color:rgba(255,255,255,0.5);">We'll confirm date and time within 2 hours.</div>
                  </div>
                </td></tr>
                <tr><td>
                  <div style="padding-left:40px;position:relative;">
                    <div style="position:absolute;left:0;top:0;background:rgba(245,158,11,0.15);border-radius:50%;width:28px;height:28px;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#f59e0b;">3</div>
                    <div style="font-size:14px;font-weight:600;color:#ffffff;margin-bottom:2px;">Drop Off or We Collect</div>
                    <div style="font-size:13px;color:rgba(255,255,255,0.5);">Bring your vehicle to us or use our free pickup service.</div>
                  </div>
                </td></tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="background:#0f1923;padding:0 40px 40px;text-align:center;">
              <a href="https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%2C%20my%20booking%20reference%20is%20%23${ref}."
                 style="display:inline-block;background:linear-gradient(135deg,#f59e0b,#d97706);color:#0a0a0f;font-weight:700;font-size:15px;padding:14px 32px;border-radius:10px;text-decoration:none;">
                WhatsApp Us
              </a>
              <p style="margin:16px 0 0;font-size:13px;color:rgba(255,255,255,0.4);">Or call: <a href="tel:${SITE_CONFIG.phone}" style="color:#f59e0b;text-decoration:none;">${SITE_CONFIG.phoneDisplay}</a></p>
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
      subject: `Booking Received #${ref} — Ceramic My Car Dubai`,
      html,
    })
    return { success: true }
  } catch (err) {
    console.error('[Email] Failed to send customer confirmation:', err)
    return { success: false }
  }
}

export async function sendBookingNotificationToBusiness(
  booking: BookingEmailData
): Promise<{ success: boolean }> {
  if (!resend) {
    console.warn('[Email] RESEND_API_KEY not set — skipping business notification email')
    return { success: false }
  }

  const ref = booking.id.slice(0, 8).toUpperCase()
  const serviceName = formatServiceName(booking.service)

  const rows = [
    ['Name', booking.full_name],
    ['Phone', booking.phone],
    ['Email', booking.email],
    ['Service', serviceName],
    ['Location', booking.city],
    ...(booking.notes ? [['Notes', booking.notes]] : []),
  ]

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><title>New Booking</title></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:32px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <tr><td style="background:#0a0a0f;padding:24px 32px;text-align:center;">
          <div style="font-size:20px;font-weight:800;color:#f59e0b;">Ceramic My Car — New Booking</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px;">Ref: <strong style="color:#f59e0b;font-family:monospace;">#${ref}</strong></div>
        </td></tr>

        <tr><td style="background:#fffbeb;border-bottom:2px solid #f59e0b;padding:16px 32px;">
          <p style="margin:0;font-size:15px;font-weight:600;color:#92400e;">🔔 New request from ${booking.full_name} — ${serviceName}</p>
        </td></tr>

        <tr><td style="padding:24px 32px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            ${rows.map(([label, value]) => `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;width:35%;font-size:13px;color:#6b7280;font-weight:500;">${label}</td>
              <td style="padding:10px 0 10px 16px;border-bottom:1px solid #f3f4f6;font-size:14px;color:#111827;font-weight:600;">${value}</td>
            </tr>`).join('')}
          </table>
        </td></tr>

        <tr><td style="padding:0 32px 32px;text-align:center;">
          <a href="${SITE_CONFIG.url}/admin/bookings"
             style="display:inline-block;background:#0a0a0f;color:#f59e0b;font-weight:700;font-size:14px;padding:12px 28px;border-radius:8px;text-decoration:none;margin-right:12px;">
            View in Admin
          </a>
          <a href="https://wa.me/${booking.phone.replace(/\D/g, '')}?text=Hi%20${encodeURIComponent(booking.full_name.split(' ')[0])}%2C%20this%20is%20Ceramic%20My%20Car.%20We%20received%20your%20booking%20request%20%23${ref}.%20When%20would%20you%20like%20to%20come%20in%3F"
             style="display:inline-block;background:#25d366;color:#ffffff;font-weight:700;font-size:14px;padding:12px 28px;border-radius:8px;text-decoration:none;">
            WhatsApp Customer
          </a>
        </td></tr>

        <tr><td style="background:#f9fafb;padding:16px 32px;text-align:center;border-top:1px solid #e5e7eb;">
          <p style="margin:0;font-size:12px;color:#9ca3af;">Ceramic My Car booking system — automated notification</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`

  try {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: [SITE_CONFIG.email],
      subject: `New Booking: ${booking.full_name} — ${serviceName} (#${ref})`,
      html,
    })
    return { success: true }
  } catch (err) {
    console.error('[Email] Failed to send business notification:', err)
    return { success: false }
  }
}
