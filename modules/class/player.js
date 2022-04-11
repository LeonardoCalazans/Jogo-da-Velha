export default class Player {
    constructor (name) {
        this.name = name
    }

    getName() {
        return this.name
    }
    setScoreWin() {
        this.score++
    }
    setScoreReset() {
        this.score = 0;
    }
    getScore() {
        return this.score
    }
}