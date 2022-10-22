/*const invoices = '[{"customer": "BigCo", "performances": [ {"playID": "hamlet","audience": 55}, { "playID": "as-like", "audience": 35},{"playID": "othello","audience": 40}]}]';
export { invoices };
const plays = '{"hamlet": {"name": "Hamlet", "type": "tragedy"}, "as-like":{"name": "As You Like It", "type": "comedy"},"othello": {"name": "Othello", "type": "tragedy"}}';
export { plays };*/
import { tragedy } from './tragedy.js';
import { comedy } from './comedy.js';
export class InvoiceUtilities {
    static printInvoice(invoices, plays) {
        let totalAmount = 0;
        let volumeCredits = 0;
        let result = `Detalle de factura para ${invoices[0].customer}\n`;
        const format = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", minimumFractionDigits: 2 }).format;
        for (let perf of invoices[0].performances) {
            const play = plays[perf.playID];
            let thisAmount = 0;
            switch (play.type) {
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
            if ("comedy" === play.type)
                volumeCredits += Math.floor(perf.audience / 5);
            // print line for this order
            result += `${play.name}: ${format(thisAmount / 100)} (${perf.audience} asientos)\n`;
            totalAmount += thisAmount;
        }
        result += `Total a pagar ${format(totalAmount / 100)}\n`;
        result += `Has ganado ${volumeCredits} creditos\n`;
        return result;
    }
}
/*
class obras {
    static printInvoice (invoices:any, plays:any) {
        let totalAmount:number = 0;
        let volumeCredits:number = 0;
        let result:string = `Detalle de factura para ${invoices[0].customer}\n`;
        const format = new Intl.NumberFormat("de-DE",{ style: "currency", currency: "EUR", minimumFractionDigits: 2 }).format;
        result += `Total a pagar ${format(totalAmount/100)}\n`;
        result += `Has ganado ${volumeCredits} creditos\n`;
        return result;
    }
}

class typePlay {
    playID:string;

    constructor(playID:string){
        this.playID=playID;
    }

    typePlay()


}*/ 
