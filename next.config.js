/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'cdn1.iconfinder.com'
      }
    ]
  }
}

module.exports = nextConfig
