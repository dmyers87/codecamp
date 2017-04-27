function log() {
    var counter = 0;
    return function () {
        counter++;
        console.log(counter);
    }
}