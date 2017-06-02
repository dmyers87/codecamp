var Util = (function () {
    function Util() {
    }
    Util.prototype = {
        msg: "hello",
        counter: 0,
        log: function () {
            this.counter++;
            console.log(this.msg + ": " + this.counter);
        }
    }
    return Util;
})()
var Logger = (function (Util) {
    function Logger() {
        Util.call(this)
    }
    Logger.prototype = Object.create(Util.prototype);
    return Logger;
})(Util)