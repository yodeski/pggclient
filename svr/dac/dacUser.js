module.exports = {

    validateLogin: function (client, username, email, pass, callback) {

        client.on('drain', client.end.bind(client));

        var query = client.query({
            text: "SELECT * from validate_user ($1, $2, $3)",
            values: [username, email, pass]
        }, function (err, result) {
            callback(data = { rows: result.rows, error: err });
            console.log(data);
        });

        client.pauseDrain();
    }
};