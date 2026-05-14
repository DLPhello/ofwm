import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Oatley Fine Wine Merchants";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(165deg, #fffefb 0%, #f0ebe3 55%, #f7f4ef 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 200,
            height: 200,
            border: "2px solid #e4ddd4",
            background: "#fffefb",
            fontSize: 132,
            fontWeight: 500,
            color: "#0f0c0a",
            fontFamily: "Georgia, 'Times New Roman', serif",
            lineHeight: 1,
          }}
        >
          O
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 46,
            fontWeight: 300,
            color: "#0f0c0a",
            fontFamily: "Georgia, 'Times New Roman', serif",
            letterSpacing: "-0.02em",
          }}
        >
          Oatley Fine Wine Merchants
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 24,
            color: "#5c5650",
            fontFamily: "system-ui, sans-serif",
            maxWidth: 820,
            textAlign: "center",
            lineHeight: 1.45,
          }}
        >
          Premium wine distribution across Australia — curated portfolios from
          leading producers.
        </div>
      </div>
    ),
    { ...size }
  );
}
