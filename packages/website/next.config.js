module.exports = {
  reactStrictMode: true,
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_SECRET: process.env.SUPABASE_SECRET,
    SUPABASE_PUBLIC_KEY: process.env.SUPABASE_PUBLIC_KEY,
  },
};
