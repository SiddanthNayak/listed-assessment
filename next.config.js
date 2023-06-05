/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
