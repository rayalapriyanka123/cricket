"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const batsman_1 = require("./batsman");
const scorer_1 = require("./scorer");
const bowler_1 = require("./bowler");
const scorer = new scorer_1.Scorer();
/*const batsman1 = new Batsman('K L Rahul');
const batsman2 = new Batsman('Rohit Sharma');
scorer.addBatsman(batsman1);
scorer.addBatsman(batsman2);*/
//scorer.calculateScore(data);
var totalScore = 0, totalWickets = 0;
let map = new Map();
let lastPlayer;
let obj = [{
        "runScored": 100,
        "isOut": false,
        "dismissalType": 'Run Out',
        "dismissalInfo": {
            "fielderName": "Root",
            "hasBatsmanCrossed": true,
        },
        "batsmanName": "Rahul",
        "bowlerName": "Anderson"
    },
    {
        "runScored": 5,
        "isOut": false,
        "dismissalType": 'catch',
        "batsmanName": "Rahul",
        "bowlerName": "Anderson"
    },
    {
        "runScored": 6,
        "isOut": true,
        "dismissalType": 'catch',
        "batsmanName": "Dhin",
        "bowlerName": "Anderson"
    },
    {
        "runScored": 6,
        "isOut": false,
        "dismissalType": 'catch',
        "batsmanName": "Dhin",
        "bowlerName": "Anderson"
    },
    {
        "runScored": 6,
        "isOut": true,
        "dismissalType": 'catch',
        "batsmanName": "Dhin",
        "bowlerName": "Anderson"
    }
];
obj.forEach((ball) => {
    const batsman = new batsman_1.Batsman(ball.batsmanName);
    const bowler = new bowler_1.Bowler(ball.bowlerName);
    scorer.addBowler(bowler);
    totalScore += ball.runScored;
    if (ball.isOut == true) {
        console.log(lastPlayer + " " + map.get(lastPlayer));
        if (map.has(ball.batsmanName)) {
            batsman.addRuns(map.get(ball.batsmanName) + ball.runScored);
            map.set(ball.batsmanName, map.get(ball.batsmanName) + ball.runScored);
        }
        else {
            batsman.addRuns(ball.runScored);
            map.set(ball.batsmanName, ball.runScored);
        }
        if (ball.dismissalType == "Run Out") {
            totalWickets++;
            if (ball.dismissalInfo != null) {
                if (ball.dismissalInfo.hasBatsmanCrossed == true) {
                    console.log("so the new batsman is in strike");
                }
                else {
                    console.log("non striker is in strike");
                }
            }
        }
        else {
            bowler.numberOfWickets++;
            totalWickets++;
        }
    }
    else {
        if (map.has(ball.batsmanName)) {
            batsman.addRuns(map.get(ball.batsmanName) + ball.runScored);
            map.set(ball.batsmanName, map.get(ball.batsmanName) + ball.runScored);
        }
        else {
            batsman.addRuns(ball.runScored);
            map.set(ball.batsmanName, ball.runScored);
        }
        lastPlayer = ball.batsmanName;
    }
    //console.log(batsman.numberOfRuns);
});
//scorer.calculateScore(obj);
//console.log(obj);
//scorer.printScore();
