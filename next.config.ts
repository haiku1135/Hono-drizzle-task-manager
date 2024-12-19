import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import type { NextConfig } from "next";

const initDevPlatform = async () => {
  if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
  }
};

// 開発環境の設定を初期化
initDevPlatform();

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
