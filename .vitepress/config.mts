import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OpenBMCLAPI University",
  description: "The best university, ever",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/OpenBMCLAPI-University' }
    ]
  }
})
