function log() {
    var counter1 = 0;
    return function () {
        counter1++;
        console.log(counter1);
    }
}
function log2() {
    var counter2 = 0;
    return function () {
        counter2++;
        console.log(counter2);
    }
}