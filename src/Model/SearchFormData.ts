export default  class SearchFormData
{
    companyName : string = "";
    countryName : string = "";
    sort: string = SortOption.Company;
}



export const SortOption = {
    Company: 'Firma',
    Country: 'Land',
};


