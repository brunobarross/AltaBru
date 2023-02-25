export const projetos = [
  {
    id: 0,
    slug: '/projetos/0',
    nome: 'Games4Free',
    deploy: 'https://games4free.app/',
    repositorio: 'https://github.com/brunobarross/Games4free-react-version',
    video: 'https://www.youtube.com/embed/FSsHMwIsOjo',
    banner: require('~/assets/img/games4free.png'),
    miniatura: require('~/assets/img/games4free.png'),
    descricao: 'Uma dashboard que reúne jogos grátis que plataformas como Epic Games, Steam, Origin e GOG estão distribuindo gratuitamente aos usuários.A dashboard foi desenvolvida utilizando React.js e TailwindCSS pra estilização. Os jogos são atualizados dinamicamente ao consumir a API GamePower, que fornece os dados. Com o intuito de manter o projeto ativo, comprei um domínio próprio na GoDaddy.',
    tecnologias: ['React.js', 'Javascript', 'Context API', 'Axios', 'Api Rest', 'TailwindCSS', 'React Hooks', 'React Router DOM']
  },
  {
    id: 1,
    slug: '/projetos/1',
    nome: 'Economizer',
    deploy: 'https://economizer-vue.vercel.app/',
    repositorio: 'https://github.com/brunobarross/economizer',
    video: 'https://www.youtube.com/embed/t8dNx6W9Yl8',
    banner: require('~/assets/img/Economizer.png'),
    miniatura: '',
    descricao: "Uma dashboard que foi criada para que os usuários possam controlar seus gastos, tendo a possibilidade adicionar receitas ou despesas.A aplicação foi desenvolvida utilizando Vue.js, composition API, Pinia para gerenciamento de estado, TailwindCSS pra estilização e Firebase para autenticação e armazenamento dos dados do usuário.",
    tecnologias: ['Vue.js', 'Javascript', 'Composition API', 'Pinia', 'Firebase', 'Auth', 'TailwindCSS', 'Vue Router']
  },
  {
    id: 2,
    slug: '/projetos/2',
    nome: 'Meu Portfolio',
    deploy: 'https://economizer-vue.vercel.app/',
    repositorio: 'https://github.com/brunobarross/economizer',
    banner: require('~/assets/img/portfolio.png'),
    miniatura: '',
    descricao: 'Com o intuito de me apresentar melhor, criei este portoflio trazendo algum dos projetos em que Desenvolvi e quais habilidades possuo. O projeto foi desenvolvido com o framework Nuxt.js, utilizando a Composition API do Vue.js, Vue Router para navegação entre páginas e TailwindCSS para estilização.',
    tecnologias: ['Nuxt.js', 'Javascript', 'Composition API', 'TailwindCSS', 'Vue Router', 'Nuxt Modules']
  }
]
