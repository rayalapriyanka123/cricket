import { Player } from './player'
 export class Bowler extends Player
{
     numberOfBallsBowled: number;
    numberOfRunsGiven: number;
   numberOfWickets:number
    constructor(name: string)
    {
    super(name);
     this.numberOfBallsBowled = 0;
     this.numberOfRunsGiven = 0;
     this.numberOfWickets = 0;
    }
 
}