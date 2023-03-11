require('dotenv').config()
const path = require('path')


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
      { hid: 'description', name: 'description', content: 'Desenvolvimento de sites frontend com qualidade e excelência. HTML, CSS, JavaScript, Vue.js e React são algumas das tecnologias que utilizo para criar soluções digitais atraentes e funcionais para meus clientes. Descubra como posso ajudá-lo a melhorar a presença online da sua empresa.' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
      },
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap",
      }
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
  env:{
    apiURL: process.env.API_URL,
    formURL: process.env.FORM_URL,
    baseURL: process.env.baseURL || 'http://localhost:3000/'
  },

  router: {
    base: '/',
    mode: 'history',
    scrollToTop: true
  },

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
      path:'~/components/UI/', extensions :['vue']
    },
    {
      path:'~/components/Contato/', extensions :['vue']
    },
    {
      path:'~/components/Servicos/', extensions :['vue']
    },




  ],

  svg: {
    vueSvgLoader: {
        // vue-svg-loader options
    },
    svgSpriteLoader: {
        // svg-sprite-loader options
        extend(config, ctx) {
          config.module.rules.push({
            test: /\.svg$/,
            loader: 'svg-sprite-loader',
            include: [path.resolve(__dirname, 'assets/icons')],
            options: {
              symbolId: 'icon-[name]'
            }
          })
        }
    },
    fileLoader: {
        // file-loader options
    }
},

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
        httpEndpoint: process.env.API_URL
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


