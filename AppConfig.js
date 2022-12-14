require("dotenv").config();
const moment = require("moment");
const dateFormatString = "DD-MMM-YYYY";
const dateTimeFormatString = "DD-MMM-YYYY hh:mm A";

//API port(webport)
exports.webport = process.env.PORT;
exports.JWT_KEY = process.env.JWT_KEY;
exports.SecretKey = process.env.SecretKey;

//dbs port(port)
exports.port = process.env.dbPort;
exports.host = process.env.dbHost;
exports.database = process.env.dbName;
exports.username = process.env.dbUser;
exports.password = process.env.dbPass;