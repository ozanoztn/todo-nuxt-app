// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  plugins: [],
  alias: {
    "@": "",
    assets: "@/assets",
    public: "@/public",
  },
  css: ["bootstrap/dist/css/bootstrap.min.css", "@/assets/style.css"],
  modules: ["@pinia/nuxt"],
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap",
        },
      ],
      style: [],
      script: [
        {
          src: "https://kit.fontawesome.com/70639309b2.js",
          crossorigin: "anonymous",
        },
      ],
      noscript: [],
    },
  },
});
