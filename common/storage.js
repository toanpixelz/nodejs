var storage = {
    startMode: 'test', // default start mode is for test server
    getStartMode: function () {
        if (process.argv) {
            console.log(process.argv);
            if (process.argv.length >= 3) {
                if (process.argv[2][0] == '-' && process.argv[2][1] == '-') {
                    return process.argv[2].substring(2);
                }
                else {
                    throw 'Tung : Invalid argument, please special a mode for start (--dev --prod --test --dev-nopass)';
                }
            };
        }
        return 'dev';
    }
}
module.exports = storage;