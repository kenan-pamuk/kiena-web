import { NextResponse } from "next/server";

export const runtime = "nodejs";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email =
      typeof body.email === "string"
        ? body.email.trim()
        : "";

    const message =
      typeof body.message === "string"
        ? body.message.trim()
        : "";

    if (!email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "E-posta ve mesaj zorunludur.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Geçerli bir e-posta adresi girin.",
        },
        { status: 400 }
      );
    }

    if (message.length > 3000) {
      return NextResponse.json(
        {
          success: false,
          message: "Mesaj en fazla 3000 karakter olabilir.",
        },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    const contactToEmail =
      process.env.CONTACT_TO_EMAIL;

    const contactFromEmail =
      process.env.CONTACT_FROM_EMAIL;

    if (
      !resendApiKey ||
      !contactToEmail ||
      !contactFromEmail
    ) {
      console.error(
        "Contact mail environment variables are missing."
      );

      return NextResponse.json(
        {
          success: false,
          message: "E-posta servisi yapılandırılmamış.",
        },
        { status: 500 }
      );
    }

    const resendResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          from: contactFromEmail,
          to: [contactToEmail],
          reply_to: email,

          subject: "Glowyn SSS – Yeni Kullanıcı Mesajı",

          text: [
            "Glowyn web sitesi SSS sayfasından yeni mesaj geldi.",
            "",
            `Gönderen: ${email}`,
            "",
            "Mesaj:",
            message,
          ].join("\n"),
        }),
      }
    );

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error(
        "Resend contact error:",
        resendData
      );

      return NextResponse.json(
        {
          success: false,
          message: "Mesaj gönderilemedi.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Beklenmeyen bir hata oluştu.",
      },
      { status: 500 }
    );
  }
}
