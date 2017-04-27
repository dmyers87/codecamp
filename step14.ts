
abstract class Util {

    counter: number;

    constructor() {
        this.counter = 0;
    }

    log() {
        this.counter++;
        console.log(this.counter);
    }

};


class Logging extends Util {

    constructor() {
        super()
    }

}