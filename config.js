var DEBUG = (process.env.NODE_ENV !== 'production');

module.exports = {
    /** postgresql database uri. */
    driverDB: 'pg',
    pguser: "yodeski",
    pgpass: "vivirencanada",
    pgdb: "pggclient",
    pghost: "192.168.1.2",
    pgport: 5432,
    /** Session secret. */
    secret: 'I am a session secret. Please change me (and keep me a secret).',
    /** Default cookie lifetime is 1 day. */
    COOKIE_LIFETIME: 1000 * 60 * 60 * 24,
    /** Default fav icon lifetime is 30 days. */
    FAVICON_LIFETIME: 1000 * 60 * 60 * 24 * 30,
    /** Whether we're in development mode. */
    DEBUG: DEBUG,
    /** Current node environment. */
    env: (process.env.NODE_ENV || 'development'),
    /** Port to use. */
    port: DEBUG ? 8086 : process.env.PORT || 80,
    /** Your SMTP information. You can use gmail or your own server. */
    enableSMTP: true,
    SMTP: {
        host: "smtp.gmail.com",
        port: 587,
        ssl: false,
        use_authentication: true,
        user: "your@email.here",
        pass: "yourpasswordhere"
    }
};
