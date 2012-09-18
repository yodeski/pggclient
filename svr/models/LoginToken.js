module.exports = function(pg, app) {
    var Schema = pg.defaults;

    Login = new Object({
        username: null,
        password: null,
        isConected: false
    });

    /** Login token for remembering logins. */
    LoginToken = new Object({
        username: {
            type: String,
            required: true,
            index: {
            unique: true
            }
        },
        series: {
            type: String,
            index: true
        },
        token: {
            type: String,
        }
    });

}
