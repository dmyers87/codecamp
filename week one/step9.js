var logging = (function () {
    var obj = {
        counter: 0,
        log: function (msg) {
            this.counter++;
            console.log(msg);
        }
    }
    return obj;
})();