/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: { unoptimized: true },
    trailingSlash: true,
    exportPathMap: () => ({
        "/": { page: "/" },
        "/chat": { page: "/chat" },
        "/github/github-access-token": { page: "/github/github-access-token" },
    }),
};

export default nextConfig;
