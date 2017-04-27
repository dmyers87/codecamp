var logging = (function () {
    var _counter = 0; //private now
    function _log(msg) {
        _counter++;
        console.log(msg);
    }
    return {
        log: _log
    }
})();