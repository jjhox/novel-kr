/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://github.com/jjhox/novel-kr",
        permanent: true,
      },
      {
        source: "/feedback",
        destination: "https://github.com/jjhox/novel-kr/issues",
        permanent: true,
      },
      {
        source: "/translation",
        destination: "https://www.sliso.io/support",
        permanent: true,
      },
      {
        source: "/deploy",
        destination: "https://github.com/jjhox/novel-kr#자체-배포",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
