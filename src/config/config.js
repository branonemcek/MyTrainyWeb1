module.exports = {
    app_port: process.env.APP_PORT,
    db: {
        database: process.env.DATABASE,
        user: process.env.BD_USER,
        password: process.env.BD_PASSWORD,
        options: {
            dialect: process.env.DB_DIALECT,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT
        }
    },
    authentification: {
        jwtSecret: process.env.JWT_SECRET
    }
}