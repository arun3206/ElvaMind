import type { Config } from "tailwindcss";
export default { content:["./src/**/*.{js,ts,jsx,tsx,mdx}"], theme:{extend:{colors:{ink:"#191c1e",navy:"#0A192F",purple:"#4F46E5",lavender:"#e2dfff",mist:"#F1F5F9",cyan:"#57DFFE"},boxShadow:{soft:"0 4px 20px rgba(10,25,47,.07)"}}}, plugins:[] } satisfies Config;
