import { ImageResponse } from "next/og";

export const alt = "AI Content Hub — công cụ AI cho creator và affiliate marketer Việt Nam";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#17150F",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            width: "56px",
            height: "6px",
            backgroundColor: "#E85C3A",
            marginBottom: "36px"
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            color: "#FBFAF6",
            lineHeight: 1.1
          }}
        >
          AI Content Hub
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "24px",
            fontSize: 32,
            color: "#E85C3A",
            fontWeight: 500
          }}
        >
          Công cụ AI cho creator &amp; affiliate marketer Việt Nam
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "40px",
            fontSize: 24,
            color: "#FBFAF6",
            opacity: 0.6
          }}
        >
          aicontent360.shop
        </div>
      </div>
    ),
    { ...size }
  );
}
