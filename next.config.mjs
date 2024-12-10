/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production' // Define `isProduction`

const nextConfig = {
  reactStrictMode: true,
  // Specify basePath for GitHub Pages
  basePath: isProduction ? '/FE-Seonjin-HiTech' : '',
  images: {
    unoptimized: true // Corrected syntax for the images property
  }
}

export default nextConfig
