var logging = function () {
    this.counter = 0;
}
logging.prototype = {
    log: function () {
        this.counter++;
        console.log(this.counter);
    }
}