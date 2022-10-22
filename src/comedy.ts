import { invoices } from './invoices.js';
import { IperfAudience } from './IperfAudience.js';

class comedy implements IperfAudience {
    audience:number;
    thisAmount:number = 30000;

    constructor(audience:number, thisAmount:number){
        this.audience=audience;
        this.thisAmount=thisAmount;
    }

    audienceAmount(audience:number):number{
        if (audience > 20) {this.thisAmount += 10000 + 500 * (audience - 20)};
        return this.thisAmount;
    }
}

export { comedy }