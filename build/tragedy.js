class tragedy {
    constructor(audience, thisAmount) {
        this.thisAmount = 40000;
        this.audience = audience;
        this.thisAmount = thisAmount;
    }
    audienceAmount(audience) {
        if (audience > 30) {
            this.thisAmount += 1000 * (audience - 30);
        }
        ;
        return this.thisAmount;
    }
}
export { tragedy };
