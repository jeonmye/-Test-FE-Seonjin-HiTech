/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**/**'
      }
    ] // 외부 이미지 도메인 추가
  }
}

export default nextConfig
