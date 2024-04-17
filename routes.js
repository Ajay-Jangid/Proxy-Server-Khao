const ROUTES = [
    {
        url: '/ui/**',
        proxy: {
            target: "http://localhost:1234/",
            changeOrigin: true,
            pathRewrite: {
                [`^/ui/`]: ""
            }
        }
    },
    {
        url: '/api/**',
        proxy: {
            target: "http://localhost:3000/",
            changeOrigin: true,
            pathRewrite: {
                [`^/api/`]: ""
            }
        }
    },
    {
        url: '/',
        proxy: {
            target: "http://localhost:1234/",
            changeOrigin: true,
        }
    }
]

exports.ROUTES = ROUTES;
