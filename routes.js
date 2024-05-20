const ROUTES = [
    {
        url: '/ui/**',
        proxy: {
            target: "https://khao-food-website.onrender.com/",
            changeOrigin: true,
            pathRewrite: {
                [`^/ui/`]: ""
            }
        }
    },
    {
        url: '/api/**',
        proxy: {
            target: "https://khao-backend.onrender.com/",
            changeOrigin: true,
            pathRewrite: {
                [`^/api/`]: ""
            }
        }
    },
    {
        url: '/',
        proxy: {
            target: "https://khao-food-website.onrender.com/",
            changeOrigin: true,
        }
    }
]

exports.ROUTES = ROUTES;
