import { Batsman } from './batsman';
import { Scorer } from './scorer';
import value, * as data from './data.json';
import { Bowler } from './bowler';
import { datatype } from './datatype';
const scorer = new Scorer();
const chalk = require('chalk');

/*const batsman1 = new Batsman('K L Rahul');
const batsman2 = new Batsman('Rohit Sharma');
scorer.addBatsman(batsman1);
scorer.addBatsman(batsman2);*/
//scorer.calculateScore(data);

var totalScore = 0,totalWickets = 0;
let map = new Map();
let wicket = new Map();
let over = new Map();
let run = new Map();
let maiden = new Map();
let total = new Map();
let count=0;
let runs = 0;
let lastPlayer: string;
let obj: Array<datatype> =  [{
    "runScored": 0,
    "isOut": true,
    "dismissalType": 'Run Out',
    "dismissalInfo": {
        "fielderName": "Root",
        "hasBatsmanCrossed": true,
    },
    "batsmanName": "Rahul",
    "bowlerName": "Anderson"
},
{
    "runScored": 1,
    "isOut": false,
    "isExtra":true,
    "extraInfo":
    {
    "runsOffered":5
    },
    "batsmanName": "Rohit",
    "bowlerName": "Anderson"
}
,
{
    "runScored": 4,
    "isOut": false,
    "batsmanName": "koli",
    "bowlerName": "Anderson"
}
,
{
    "runScored": 1,
    "isOut": false,
    "batsmanName": "koli",
    "bowlerName": "Anderson"
}
,
{
    "runScored": 1,
    "isOut": false,
    "batsmanName": "Rohit",
    "bowlerName": "Anderson"
}
,
{
    "runScored": 2,
    "isOut": true,
    "dismissalType": 'Run Out',
    "batsmanName": "koli",
    "bowlerName": "Anderson"
}
,
{
    "runScored": 0,
    "isOut": true,
    "dismissalType": 'catch',
    "batsmanName": "sehwag",
    "bowlerName": "ashwin"
},
{
    "runScored": 2,
    "isOut": false,
    "dismissalType": 'catch',
    "batsmanName": "sachin",
    "bowlerName": "ashwin"
}
,
{
    "runScored": 2,
    "isOut": false,
    "dismissalType": 'catch',
    "batsmanName": "sachin",
    "bowlerName": "ashwin"
}
,
{
    "runScored": 2,
    "isOut": false,
    "dismissalType": 'catch',
    "batsmanName": "sachin",
    "bowlerName": "ashwin"
}
,
{
    "runScored": 2,
    "isOut": false,
    "dismissalType": 'catch',
    "batsmanName": "sachin",
    "bowlerName": "ashwin"
}
,
{
    "runScored": 0,
    "isOut": true,
    "dismissalType": 'catch',
    "batsmanName": "sachin",
    "bowlerName": "ashwin"
},
{
    "runScored": 0,
    "isOut": false,
    "dismissalType": 'catch',
    "dismissalInfo": {
        "fielderName": "Root",
        "hasBatsmanCrossed": true,
    },
    "batsmanName": "karthik",
    "bowlerName": "Ali"
},
{
    "runScored": 1,
    "isOut": false,
    "batsmanName": "karthik",
    "bowlerName": "Ali"
}
,
{
    "runScored": 4,
    "isOut": false,
    
    "batsmanName": "Rohit",
    "bowlerName": "Ali"
    
}
,
{
    "runScored": 1,
    "isOut": true,
    "dismissalType": 'Run Out',
    "batsmanName": "Rohit",
    "bowlerName": "Ali"
}
,
{
    "runScored": 1,
    "isOut": false,
    "batsmanName": "karthik",
    "bowlerName": "Ali"
}
,
{
    "runScored": 0,
    "isOut": false,
    "isExtra":true,
    "extraInfo":
    {
    "runsOffered":5
    },
    "batsmanName": "Dhoni",
    "bowlerName": "Ali"
}


];

 obj.forEach( (ball) => {
     runs += ball.runScored;
     count++;
     totalScore += ball.runScored;
     addingExtra(ball);

     countingBalls(ball);
    
    if(ball.isOut==true)
    { 
        printWhenBatsmanOut(ball);  
         initialize(ball);
          if(ball.dismissalType =="Run Out")
          {
                   totalWickets++;               
          }
          else
          { 
            addingWicketsToBowler(ball);
          
           // bowler.numberOfWickets++;
            totalWickets++;
          }
    }
    else
    {
        if(!map.has(ball.batsmanName))
        {
       
        map.set(ball.batsmanName,0);
        } 
         addingScoresToBatsman(ball);      
        addingRunsToBowler(ball);
    }
    overCompleted(ball);
 });


  print();

 function addingExtra(ball: datatype)
 {
    if(ball.isExtra)
    {
        if(ball.extraInfo)
        {
           totalScore += ball.extraInfo.runsOffered;
        }
       
    }
 }

 function printWhenBatsmanOut(ball: datatype)
 {
    if(!map.has(ball.batsmanName))
    {
    
    map.set(ball.batsmanName,0);
    } 

    
   console.log(chalk.red(ball.batsmanName) + "        " + (chalk.blue(ball.dismissalType) + "            " +  (chalk.yellow(map.get(ball.batsmanName))) + "("+(chalk.blue(total.get(ball.batsmanName)))+")"));

   map.delete(ball.batsmanName);
 }
 function initialize(ball: datatype)
 {
    if(!run.has(ball.bowlerName))
    {
        run.set(ball.bowlerName,0);
    }

    if(!over.has(ball.bowlerName))
    {
        over.set(ball.bowlerName,0);
    }

    if(!wicket.has(ball.bowlerName))
    {
        wicket.set(ball.bowlerName,0);
    }
 }
function addingWicketsToBowler(ball: datatype)
{
  // bowler calculating number of wickets
  if(wicket.has(ball.bowlerName))
  {
      wicket.set(ball.bowlerName,wicket.get(ball.bowlerName)+1);
  }
  else
  {
      wicket.set(ball.bowlerName,1);
  }
}
function addingScoresToBatsman(ball: datatype)
{
    if(!ball.isExtra)
    {
        if(map.has(ball.batsmanName))
        {

         map.set(ball.batsmanName,map.get(ball.batsmanName) + ball.runScored);
        }
       else
       {
      
         map.set(ball.batsmanName,ball.runScored);
       }  
    }
}

function addingRunsToBowler(ball: datatype)
{
    //bowler runs get added

   if(run.has(ball.bowlerName))
   {

       run.set(ball.bowlerName,run.get(ball.bowlerName) + ball.runScored);
   }
   else
   {
   
       run.set(ball.bowlerName,ball.runScored);
   }
}

function overCompleted(ball:datatype)
{
    if(count%6==0)
    {
        if(over.has(ball.bowlerName))
        {
            over.set(ball.bowlerName,over.get(ball.bowlerName)+1);
        }
        else
        {
            over.set(ball.bowlerName,1);
        }

       
        if(runs==0)
        {
            if(maiden.has(ball.bowlerName))
            {
               maiden.set(ball.bowlerName,maiden.get(ball.bowlerName)+1);
            }
            else
            {
                maiden.set(ball.bowlerName,1);
            }
        }
        runs=0;
  

        count=0;
    }
}
function countingBalls(ball: datatype)
{
  if(total.has(ball.batsmanName))
  {
     total.set(ball.batsmanName,total.get(ball.batsmanName)+1);
  }
  else
  {
      total.set(ball.batsmanName,1);
  }
}
function print()
{
      //console.log(map.values());
      //console.log(map.keys());
      let keys = Array.from( map.keys() );
      let values = Array.from( map.values() );
  //  console.log(keys);
    //console.log(values);

    for(var i=0;i<keys.length;i++)
    {
        console.log((chalk.red(keys[i])) +"        "+ (chalk.green("Not Out")) +"         "+ (chalk.yellow(values[i])));
    }
    keys = Array.from( run.keys() );
  let   values1 = Array.from( maiden.values() );
  let   values2 = Array.from( run.values());
  let   values3 = Array.from( wicket.values() );
  let   values4 = Array.from( over.values() );
  console.log("Total       "+chalk.yellow(totalScore)+"   "+"for       "+(chalk.red(totalWickets)));
  for(var i=0;i<keys.length;i++)
  {
      console.log((chalk.blue(keys[i])) + "    " + (chalk.white(values1[i]))  + "           " + (chalk.yellow(values2[i])) + "         " + (chalk.red(values3[i])) + "              " + (chalk.blue(values4[i])));
  }
       // console.log(map.values().next().value);
        //console.log(map.keys().next().value);
 /*for (let entry of map.entries()) {
    
    console.log((chalk.red(entry[0])) +"      "+ (chalk.green(" Not Out ")) +"          "+  (chalk.yellow(entry[1])));
}

for (let entry of total.entries()) {
    
  console.log("Total " + entry[0] + "  " + entry[1]);
}

console.log( "Total Score  " + totalScore);

console.log("BowlerName  " + "Wickets ");
for (let entry of wicket.entries()) {
      console.log(entry[0] + "       " + entry[1]);
}
console.log("\nBowlerName  " + "Overs ");
for (let entry of over.entries()) {
    console.log(entry[0] + "       " + entry[1]);
}

console.log("\nBowlerName  " + "Runs ");
for (let entry of run.entries()) {
    console.log(entry[0] + "       " + entry[1]);
}*/
}



