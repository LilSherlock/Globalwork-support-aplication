module.exports = {
    db: {
        database: process.env.DB_NAME || 'gwsupport',
        user: process.env.DB_USER || 'globalwork',
        password: process.env.DB_PASS || 'hola',
        options: {
        dialect: process.env.DIALECT || 'sqlite',
        host: process.env.HOST || '35.196.26.40',
        storage: './gwsupport.sqlite'
        }
    },
    port: 8081
}
