/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Lets `next build` succeed even without an eslint config present.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
