import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    if (!email) {
      return NextResponse.json(
        { error: "E-posta adresi gerekli." },
        { status: 400 }
      );
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Geçerli bir e-posta adresi girin." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Glowyn <bildirim@updates.kiena.com.tr>",
      to: ["hello@kiena.com.tr"],
      subject: "Glowyn - Yeni Haber Ver Talebi",

      text: `
Glowyn web sitesinden yeni bir Haber Ver talebi geldi.

E-posta adresi:
${email}

Kaynak:
https://www.kiena.com.tr/glowyn

Tarih:
${new Date().toISOString()}
      `.trim(),
    });

    if (error) {
      console.error("Resend hatası:", error);

      return NextResponse.json(
        { error: "E-posta gönderilemedi." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Glowyn notify API hatası:", error);

    return NextResponse.json(
      { error: "Sunucu hatası." },
      { status: 500 }
    );
  }
}
