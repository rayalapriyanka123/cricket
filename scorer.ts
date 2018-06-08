import { Batsman } from './batsman';
import { datatype } from './datatype';
import { Bowler } from './bowler';
export class Scorer {
    playerOnStrike: Batsman | null;
    listOfBatsman: Array<Batsman>;
    listOfBowler: Array<Bowler>;
    totalScore: number;
   // batsmen:Batsman | null;
   // runs:number;

    constructor() {
        this.totalScore = 0;
        this.playerOnStrike = null;
        this.listOfBatsman = [];
        this.listOfBowler = [];
    }
    addBatsman(batsman: Batsman) {
        this.listOfBatsman.push(batsman);
    }

    addBowler(bowler: Bowler) {
        this.listOfBowler.push(bowler);
    }

    changeStrike() {
        if (this.playerOnStrike === this.listOfBatsman[0]) {
            this.playerOnStrike = this.listOfBatsman[1];
        } else {
            this.playerOnStrike = this.listOfBatsman[0];
        }
    }

    calculateScore(data: datatype) {
        

        const batsman1 = new Batsman(data.batsmanName);
        this.addBatsman(batsman1);

        

        //console.log(arr.batsmanName);
       
        /*this.playerOnStrike = this.listOfBatsman[0];
        arr.forEach((runScored, ballNumber) => {
            if (runScored % 2 === 1) {
                if (this.playerOnStrike) {
                    this.playerOnStrike.addRuns(runScored);
                   
                    this.changeStrike();
                }
            } else {
                if (this.playerOnStrike) {
                    this.playerOnStrike.addRuns(runScored);
                }
            }
            this.totalScore += runScored;
            if ((ballNumber + 1) % 6 === 0) {
                this.changeStrike();
            }
        })*/
  
    


    }

    printScore() {
        console.log(`Total score: ${this.totalScore}`);
        this.listOfBatsman.forEach(batsman => {
            console.log(`${batsman.playerName} scored ${batsman.numberOfRuns}`);
        })
    }

    printStrikeRate(){
        //var batsmen=this.listOfBatsman[0];
          //  console.log((this.playerOnStrike.numberOfRuns/this.playerOnStrike.numberOfBallsBatted)*  100);

    }
}