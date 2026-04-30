import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Eksik alan var." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Serender <info@mail.serenderekolojik.com>",
      to: ["info@serenderekolojik.com"],
      replyTo: email,
      subject: `Yeni iletişim formu mesajı - ${name}`,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: "Mail gönderilirken hata oluştu." },
      { status: 500 }
    );
  }
}