import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, msg } = await req.json()

    if (!name || !email || !msg) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: false,
      auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
    })

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_TO,
      subject: `New Contact Form Message from ${name}`,
      text: msg,
      html: `<p>${msg}</p><br><p>From: ${name} (${email})</p>`,
    })

    return NextResponse.json({ message: "Email sent" })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
