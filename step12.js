function Logging() {
    this.counter = 0;
}
Logging.prototype = (function () {

    function _log() {
        this.counter++;
        console.log(this.counter)
    }
    var obj = {
        log: _log
    }
    return obj;
})();