import {defineConfig} from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Presently Docs",
    description: "The full documentation for Presently.",
    base: "/docs",
    lastUpdated: true,
    themeConfig: {
        search: {
            provider: "local"
        },

        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: "Home", link: "/"},
            {text: "Coming Soon", link: "/important/coming-soon"}
        ],

        sidebar: [
            {
                text: "Important",
                items: [{text: "Coming Soon", link: "/important/coming-soon"}]
            }
        ],

        editLink: {
            pattern: "https://github.com/PresentlySlides/docs/edit/main/:path"
        },

        socialLinks: [{icon: "github", link: "https://github.com/PresentlySlides/docs"}]
    }
});
