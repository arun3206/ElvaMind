import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = "ElvaMind — AI systems that make your business work smarter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#0A192F", color: "white", padding: "72px", fontFamily: "Arial, sans-serif", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 520, height: 520, borderRadius: 999, right: -120, top: -180, background: "rgba(79,70,229,.30)", filter: "blur(60px)" }} />
      <div style={{ position: "absolute", width: 360, height: 360, borderRadius: 999, right: 100, bottom: -220, background: "rgba(87,223,254,.18)", filter: "blur(50px)" }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", position: "relative" }}>
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}><span style={{ color: "#8B5CF6" }}>Elva</span>Mind</div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 850 }}>
          <div style={{ color: "#57DFFE", textTransform: "uppercase", letterSpacing: "4px", fontSize: 18, fontWeight: 700, marginBottom: 24 }}>AI automation consultancy</div>
          <div style={{ fontSize: 72, lineHeight: 1.04, letterSpacing: "-3px", fontWeight: 700 }}>AI systems that make your business <span style={{ color: "#8B5CF6" }}>work smarter.</span></div>
          <div style={{ marginTop: 28, color: "rgba(255,255,255,.65)", fontSize: 24 }}>Automation · AI Agents · Integrations · Custom Software</div>
        </div>
      </div>
    </div>,
    size,
  );
}

