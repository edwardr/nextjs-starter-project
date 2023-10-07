module.exports = {
  images: {
    remotePatterns: [
      // Configure to work with Next/Image
      // LoremFlickr in sample DB. Can use with CDN.
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        //port: '',
        pathname: '/**',
      },
    ],
  },
}
