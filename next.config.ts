module.exports = {
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'Accept-CH',
            value: 'Sec-CH-Viewport-Width',
          },
          {
            key: 'Vary',
            value: 'Sec-CH-Viewport-Width',
          },
        ],
      },
    ];
  },
};