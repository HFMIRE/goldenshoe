/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URL:
      "mongodb+srv://HFMIRE:3TBHcn2rD4pfHdOg@cluster0.qbn3u.mongodb.net/?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
