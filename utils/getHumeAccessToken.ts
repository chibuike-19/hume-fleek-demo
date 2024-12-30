import 'server-only';

import { fetchAccessToken } from "hume";

export const getHumeAccessToken = async () => {
  const accessToken = await fetchAccessToken({
    apiKey: String(process.env.NEXT_PUBLIC_HUME_API_KEY),
    secretKey: String(process.env.NEXT_PUBLIC_HUME_SECRET_KEY),
  });

  if (accessToken === "undefined") {
    return null;
  }

  return accessToken ?? null;
};