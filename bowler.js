"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = require("./player");
class Bowler extends player_1.Player {
    constructor(name) {
        super(name);
        this.numberOfBallsBowled = 0;
        this.numberOfRunsGiven = 0;
        this.numberOfWickets = 0;
    }
    addRuns(run) {
        this.numberOfRunsGiven += run;
    }
}
exports.Bowler = Bowler;
