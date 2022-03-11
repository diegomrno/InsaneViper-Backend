var Logger = function (req, res, next) {
    console.log('Logger Callback');
    next();
}

export default Logger;