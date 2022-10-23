/*import { invoices } from './invoices.js';
import { plays } from './plays.js';*/
import { tragedy } from './tragedy.js';
import { comedy } from './comedy.js';
const invoices = '[{"customer": "BigCo", "performances": [ {"playID": "hamlet","audience": 55}, { "playID": "as-like", "audience": 35},{"playID": "othello","audience": 40}]}]';
const plays = '{"hamlet": {"name": "Hamlet", "type": "tragedy"}, "as-like":{"name": "As You Like It", "type": "comedy"},"othello": {"name": "Othello", "type": "tragedy"}}';


class forSwitch {
    invoices:any;
    plays:any;

    constructor (invoices:any, plays:any){
        this.invoices=invoices;
        this.plays=plays;
    }

    

   }

    /*let play[]:any = plays[0]
    
    amountObra(play.type){

    }


    iterador() {

    for (let perf of invoices[0].performances) {
        const play = plays[perf.playID];
        let thisAmount = 0;
        switch ((play.type):default) {
            case tragedy:
            break;
            case comedy:
            break;
            default:
                throw new Error(`Tipo desconocido: ${play.type}`);
            }
    // add volume credits
    volumeCredits += Math.max(perf.audience - 30, 0);
    // add extra credit for every ten comedy attendees
    if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);
    // print line for this order
        result += `${play.name}: ${format(thisAmount/100)} (${perf.audience} asientos)\n`;
        totalAmount += thisAmount;
    }
}
}

export {}*/