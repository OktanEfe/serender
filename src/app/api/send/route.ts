import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

const KONU_LABELS: Record<string, string> = {
  uyelik: "Üyelik",
  bagis: "Bağış & Yardım",
  proje: "Proje İş Birliği",
  egitim: "Eğitim & Atölye",
  gonullu: "Gönüllülük",
  basin: "Basın & Medya",
  diger: "Diğer",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { ad, eposta, telefon, konu, mesaj } = body;

    if (!ad || !eposta || !konu || !mesaj) {
      return NextResponse.json(
        { error: "Lütfen tüm zorunlu alanları doldurun." },
        { status: 400 }
      );
    }

    const konuLabel = KONU_LABELS[konu] || konu;

    const { data, error } = await resend.emails.send({
      from: "Serender İletişim <noreply@serenderekolojik.com>",
      to: ["info@serenderekolojik.com"],
      replyTo: eposta,
      subject: `[${konuLabel}] Yeni mesaj — ${ad}`,
      react: EmailTemplate({
        ad,
        eposta,
        telefon: telefon || "Belirtilmedi",
        konu: konuLabel,
        mesaj,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Mail gönderilirken hata oluştu." },
      { status: 500 }
    );
  }
}
