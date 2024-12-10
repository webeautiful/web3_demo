// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: false,
  modules: ['@nuxt/ui'],
  app: {
    head: {
      title: 'Web3 Test',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }
      ],
     script: [
        // 仅在开发环境下添加 eruda
        // ...(process.env.NODE_ENV === 'development'
        //   ? [
        //       {
        //         src: 'https://cdn.jsdelivr.net/npm/eruda',
        //         async: true, // 异步加载脚本
        //         onload: 'eruda.init()', // 加载完成后初始化 eruda
        //       },
        //     ]
        //   : []),
        ...(process.env.NODE_ENV === 'development'
          ? [
              {
                src: 'https://unpkg.com/vconsole@latest/dist/vconsole.min.js',
                async: true, // 异步加载脚本
                onload: 'var vConsole = new window.VConsole();', // 加载完成后初始化 eruda
              },
            ]
          : []),
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=1.0.0' }]
    }
  },
})