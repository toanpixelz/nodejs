'use strict';
var winston = require('winston');
 require('winston-mysql-transport').Mysql;
winston.emitErrs = true;
var path = require('path');

var env       = process.env.NODE_ENV || "development";
var config    = require(path.join(__dirname, '../', 'configdb', 'config.json'))[env];
function customFileFormatter (options) {
    console.log(options);
    // Return string will be passed to logger.
    return options.timestamp() +' ['+ options.level.toUpperCase() +'] '+ (undefined !== options.message ? options.message : '') +
     (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
}

var logger = new winston.Logger({
    transports: [
    // new winston.transports.Mysql(options),
        new winston.transports.File({
                                        name: 'info-file',
                                        filename:'info.log',
                                        level: 'info',
                                        maxsize: 1000000,
                                        formatter: customFileFormatter,
                                        json: true
                                    }),
        new winston.transports.Console({
            level: 'debug', 
            handleExceptions: false,
            json: false,
            colorize: false,
            timestamp: function() {
                var date = new Date();                          

                var hour = date.getUTCHours();              
                hour = (hour < 10 ? '0' : '') + hour;   

                var min  = date.getUTCMinutes();
                min = (min < 10 ? '0' : '') + min;

                var sec  = date.getUTCSeconds();
                sec = (sec < 10 ? '0' : '') + sec;

                var year = date.getUTCFullYear();

                var month = date.getUTCMonth() + 1;
                month = (month < 10 ? '0' : '') + month;

                var day  = date.getUTCDate();
                day = (day < 10 ? '0' : '') + day;

                var millisecond = date.getUTCMilliseconds();

                return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec + '.' + millisecond;

            },
            formatter: function(options) {
                //console.log(options, "option loger");
                // Return string will be passed to logger.
                return options.timestamp() + ' ' + options.level.toUpperCase() +' '+ (undefined !== options.message ? options.message : '') +
                    (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
            }
        }),
    ],
     exceptionHandlers: [
      new winston.transports.File({ filename: 'exceptions.log' })
    ],
    exitOnError: false
});

module.exports = logger;
module.exports.stream = {
    write: function(message){
        console.log(message, 'test log');
        logger.info(message);
    }
};