export default  class Environmental
{
    companyName : string;
    countryName : string;
    id: string;
    co2InTons : number;

    constructor() {
        this.companyName = "";
        this.countryName = "";
        this.id = Date.now().toString(36) + Math.random().toString(36).substr(2);
        this.co2InTons = 0;
    }


}


