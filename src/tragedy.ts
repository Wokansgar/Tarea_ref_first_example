import { invoices } from './invoices.js';
import { IperfAudience } from './IperfAudience.js';

class tragedy implements IperfAudience {
    audience:number;
    thisAmount:number = 40000;

    constructor(audience:number, thisAmount:number){
        this.audience=audience;
        this.thisAmount=thisAmount;
    }

    audienceAmount(audience:number):number{
        if (audience > 30) {this.thisAmount += 1000 * (audience-30)};
        return this.thisAmount;
    }
}

export { tragedy }