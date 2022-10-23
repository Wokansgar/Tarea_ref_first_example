interface IperfAudience {
    audience:number;
    thisAmount:number;
    volumeCredits:number;
    audienceAmount(audience:number):number;
    AddVolumeCredits(audience:number):number;
}

export { IperfAudience };