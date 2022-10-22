class comedy {
    constructor(audience, thisAmount) {
        this.thisAmount = 30000;
        this.audience = audience;
        this.thisAmount = thisAmount;
    }
    audienceAmount(audience) {
        if (audience > 20) {
            this.thisAmount += 10000 + 500 * (audience - 20);
        }
        ;
        return this.thisAmount;
    }
}
export { comedy };
