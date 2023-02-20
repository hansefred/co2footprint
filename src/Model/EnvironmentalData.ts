export default  class EnvironmentalData
{
    companyName : string = "";
    countryName : string = "";
    id: string = Date.now().toString(36) + Math.random().toString(36).substr(2);
    co2InTons : number = 0;

}


