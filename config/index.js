const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "https://goldenshoe.vercel.app"
  : "https://goldenshoe.vercel.app/";
