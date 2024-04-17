const ROUTES = [
    {
        url: '/ui/**',
        proxy: {
            target: "https://khao.vercel.app/",
            changeOrigin: true,
            pathRewrite: {
                [`^/ui/`]: ""
            }
        }
    },
    {
        url: '/api/**',
        proxy: {
            target: "https://khao-backend.vercel.app/",
            changeOrigin: true,
            pathRewrite: {
                [`^/api/`]: ""
            }
        }
    },
    {
        url: '/',
        proxy: {
            target: "https://khao.vercel.app/",
            changeOrigin: true,
        }
    }
]

exports.ROUTES = ROUTES;
