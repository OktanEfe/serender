import { NextResponse } from "next/server";
import { Resend } from "resend";

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

function buildEmailHtml(params: {
  ad: string;
  eposta: string;
  telefon: string;
  konu: string;
  mesaj: string;
}) {
  const { ad, eposta, telefon, konu, mesaj } = params;
  return `
<!DOCTYPE html>
<html lang="tr">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:40px 0;background:#FAF9F6;font-family:Arial,sans-serif;">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:18px;padding:32px;border:1px solid #E8E4DC;">
    
    <p style="font-size:11px;letter-spacing:0.2em;color:#1E4D3A;font-weight:600;margin:0 0 16px;text-transform:uppercase;">
      SERENDER · İLETİŞİM FORMU
    </p>
    
    <h1 style="font-size:26px;font-weight:300;color:#231F20;margin:0 0 28px;">
      Yeni Mesaj
    </h1>

    <p style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#9C9C94;font-weight:500;margin:0 0 6px;">Ad Soyad</p>
    <p style="font-size:15px;color:#231F20;margin:0 0 16px;">${ad}</p>

    <p style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#9C9C94;font-weight:500;margin:0 0 6px;">Konu</p>
    <p style="font-size:15px;color:#231F20;margin:0 0 16px;">${konu}</p>

    <hr style="border:none;border-top:1px solid #E8E4DC;margin:20px 0;" />

    <p style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#9C9C94;font-weight:500;margin:0 0 6px;">E-posta</p>
    <p style="font-size:15px;color:#231F20;margin:0 0 16px;">${eposta}</p>

    <p style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#9C9C94;font-weight:500;margin:0 0 6px;">Telefon</p>
    <p style="font-size:15px;color:#231F20;margin:0 0 16px;">${telefon}</p>

    <hr style="border:none;border-top:1px solid #E8E4DC;margin:20px 0;" />

    <p style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#9C9C94;font-weight:500;margin:0 0 6px;">Mesaj</p>
    <p style="font-size:15px;line-height:1.7;color:#231F20;white-space:pre-line;margin:0;">${mesaj}</p>

    <p style="font-size:12px;color:#9C9C94;text-align:center;margin:24px 0 0;">
      Bu mesaj serenderekolojik.com iletişim formu üzerinden iletilmiştir.
    </p>
  </div>
</body>
</html>
  `.trim();
}

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
      subject: "[" + konuLabel + "] Yeni mesaj — " + ad,
      html: buildEmailHtml({
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
