import http from 'node:http'
import nodemailer from 'nodemailer'

const port = Number(process.env.MAIL_PORT ?? 8787)
const recipient = 'aryadev@yopmail.com'
const smtpIsConfigured = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD)

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[character])
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

function sendJson(response, status, body) {
  response.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN ?? 'http://localhost:5173',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  })
  response.end(JSON.stringify(body))
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    let body = ''
    request.on('data', (chunk) => {
      body += chunk
      if (body.length > 100_000) reject(new Error('Request is too large'))
    })
    request.on('end', () => resolve(body))
    request.on('error', reject)
  })
}

const server = http.createServer(async (request, response) => {
  if (request.method === 'OPTIONS') {
    sendJson(response, 204, {})
    return
  }

  if (request.method !== 'POST' || request.url !== '/api/contact') {
    sendJson(response, 404, { message: 'Not found' })
    return
  }

  if (!smtpIsConfigured) {
    sendJson(response, 503, {
      message: 'Email service is not configured. Add SMTP_HOST, SMTP_USER, and SMTP_PASSWORD to .env.',
    })
    return
  }

  try {
    const data = JSON.parse(await readRequestBody(request))
    const name = String(data.name ?? '').trim()
    const businessName = String(data.businessName ?? '').trim()
    const contactName = String(data.contactName ?? '').trim()
    const email = String(data.email ?? '').trim()
    const phone = String(data.phone ?? '').trim()
    const message = String(data.message ?? '').trim()

    if (!name || !contactName || !email || !message) {
      sendJson(response, 400, { message: 'Please complete all required fields.' })
      return
    }

    const safeBusinessName = businessName || 'Not provided'
    const safePhone = phone || 'Not provided'
    const htmlName = escapeHtml(name)
    const htmlBusinessName = escapeHtml(safeBusinessName)
    const htmlContactName = escapeHtml(contactName)
    const htmlEmail = escapeHtml(email)
    const htmlPhone = escapeHtml(safePhone)
    const htmlMessage = escapeHtml(message)

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
      to: recipient,
      replyTo: email,
      subject: `Customer inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Business name: ${safeBusinessName}`,
        `Contact name: ${contactName}`,
        `Email: ${email}`,
        `Phone: ${safePhone}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:680px;color:#303030;line-height:1.6">
          <div style="background:#123d29;padding:24px;border-radius:12px 12px 0 0;color:#fff">
            <p style="margin:0;color:#b6dc73;text-transform:uppercase;letter-spacing:2px;font-size:12px;font-weight:bold">Aryadev Chemicals</p>
            <h1 style="margin:8px 0 0;font-size:25px">New customer inquiry</h1>
          </div>
          <div style="border:1px solid #dce8dc;border-top:0;padding:24px;border-radius:0 0 12px 12px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:9px 0;font-weight:bold;width:180px">Name</td><td style="padding:9px 0">${htmlName}</td></tr>
              <tr><td style="padding:9px 0;font-weight:bold">Business name</td><td style="padding:9px 0">${htmlBusinessName}</td></tr>
              <tr><td style="padding:9px 0;font-weight:bold">Contact name</td><td style="padding:9px 0">${htmlContactName}</td></tr>
              <tr><td style="padding:9px 0;font-weight:bold">Email</td><td style="padding:9px 0"><a href="mailto:${htmlEmail}">${htmlEmail}</a></td></tr>
              <tr><td style="padding:9px 0;font-weight:bold">Phone</td><td style="padding:9px 0">${htmlPhone}</td></tr>
            </table>
            <div style="margin-top:20px;background:#edf5ef;padding:16px;border-radius:8px">
              <strong>Customer message</strong>
              <p style="white-space:pre-wrap;margin:8px 0 0">${htmlMessage}</p>
            </div>
          </div>
        </div>
      `,
    })

    sendJson(response, 200, { message: 'Your inquiry has been sent successfully.' })
  } catch (error) {
    console.error('Unable to send customer inquiry:', error)
    sendJson(response, 500, { message: 'Unable to send your inquiry right now. Please try again.' })
  }
})

server.listen(port, () => {
  console.log(`Mail server listening on http://localhost:${port}`)
})
