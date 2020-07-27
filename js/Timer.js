export default class Timer {
    constructor() {
        this.startTime;
    }

    startTimer() {
        this.startTime = Date.now();
    }

    getElapsedTime() {
        return Math.floor((Date.now() - this.startTime) / 1000);
    }
}