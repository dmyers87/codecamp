function log(msg) {
    return function () {
        console.log(msg);
    }
}
var logger = log("app initiated");
logger();