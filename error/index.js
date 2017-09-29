const path = require('path');
const util = require('util');
const http = require('http');

//error to send users
function HttpError(status, message) {
    Error.apply(this, arguments);
    Error.captureStackTrace(this, HttpError);

    this.status = status;
    this.message = message || http.STATUS_CODES[status] || "Error";
}

util.inherits(HttpError, Error);
HttpError.prototype.name = "HttpError";

exports.HttpError = HttpError;