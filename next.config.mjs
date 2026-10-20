/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/career",
        destination: "/careers",
        permanent: true,
      },
      {
        source: "/career/:path*",
        destination: "/careers/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

