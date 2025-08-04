/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bjsxndrhjlscssxsyzlv.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    domains: ['bjsxndrhjlscssxsyzlv.supabase.co'],
  },
};

export default nextConfig;


