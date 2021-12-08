const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  reactStrictMode: true,
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_SECRET: process.env.SUPABASE_SECRET,
    SUPABASE_PUBLIC_KEY: process.env.SUPABASE_PUBLIC_KEY,
    WEB3STORAGE_TOKEN: process.env.WEB3STORAGE_TOKEN
  },
};
