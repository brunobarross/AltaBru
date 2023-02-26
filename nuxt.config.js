export default {

  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Altamiro Bruno | Desenvolvedor Front-end',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  "builds": [
    {
      "src": "nuxt.config.js",
      "use": "@nuxtjs/vercel-builder",
      "config": {}
    }
  ],
  "routes": [
    {
      "src": "/sw.js",
      "continue": true,
      "headers": {
        "Cache-Control": "public, max-age=0, must-revalidate",
        "Service-Worker-Allowed": "/"
      }
    }
  ],
  css: [
  '@/assets/css/tailwind.css'
  ],

  plugins: [
    { src: "@/plugins/aos", mode: "client" },
  ],
  purgeCSS: {
    whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
  },


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path:'~/components/Experiencia/', extensions :['vue']
    },
    {
      path:'~/components/Habilidades/', extensions :['vue']
    },
    {
      path:'~/components/Projetos/', extensions :['vue']
    },
    {
      path:'~/components/Sobre/', extensions :['vue']
    },
    {
      path:'~/components/Ui/', extensions :['vue']
    },



  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/google-fonts',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/svg'

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/apollo'],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://api-sa-east-1.hygraph.com/v2/cl5y0mddm2bxo01t3d8a2drck/master'
      }
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
