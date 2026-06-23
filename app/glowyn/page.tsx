export default function GlowynPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "72px",
          fontWeight: 800,
          background: "linear-gradient(90deg,#d946ef,#6366f1)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Glowyn
      </h1>

      <p
        style={{
          maxWidth: "700px",
          marginTop: "20px",
          fontSize: "24px",
          lineHeight: 1.6,
          color: "#cbd5e1",
        }}
      >
        AI destekli kişisel yaşam asistanınız.
      </p>

      <a
        href="/"
        style={{
          marginTop: "40px",
          padding: "16px 32px",
          borderRadius: "12px",
          background: "#7c3aed",
          color: "white",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Ana Sayfaya Dön
      </a>
    </main>
  );
}
