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
        destination: "hhttps://github.com/jjhox/novel-kr/issues",
        permanent: true,
      },
      {
        source: "/translation",
        destination: "mailto:novel-kr@sliso.io",
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
