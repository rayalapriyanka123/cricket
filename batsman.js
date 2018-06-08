"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = require("./player");
class Batsman extends player_1.Player {
    constructor(name) {
        super(name);
        this.numberOfRunsScored = 0;
        this.numberOfBallsFaced = 0;
    }
    get numberOfRuns() {
        return this.numberOfRunsScored;
    }
    get numberOfBallsBatted() {
        return this.numberOfBallsFaced;
    }
    addRuns(run) {
        this.numberOfRunsScored += run;
    }
}
exports.Batsman = Batsman;
