import React, { useState } from 'react';
import SearchFormData from "./SearchFormData";

interface State
{
    onSearchChange: (form:SearchFormData) => void;
}


const SearchForm: React.FC<State> = (props:State) => {

    const [countryName, setCountryName] = useState<string>("");
    const [companyName, setCompanyName] = useState<string>("");
    const [sort, setSort] = useState<string>("");



    function sanitizeString(input:string) {
        // Erlaubt nur Buchstaben, Zahlen und Unterstriche
        let pattern = /[^\w]/g;
        let regex = new RegExp(pattern, "g");

        return input.replace(regex, "");
    }

    
    const onChangeCompany = (event: React.ChangeEvent<HTMLInputElement>): void => {
        let value = sanitizeString(event.target.value);
        setCompanyName(value);
        props.onSearchChange({companyName: value, countryName: countryName, sort: sort} )
    };
    const onChangeCountry = (event: React.ChangeEvent<HTMLInputElement>): void => {
        let value = sanitizeString(event.target.value);
        setCountryName(value);
        props.onSearchChange({companyName: companyName, countryName: value, sort: sort},)
    };

    const onChangeSort = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        let value = sanitizeString(event.target.value);
        setSort(value);
        props.onSearchChange({companyName: companyName, countryName: countryName, sort: value})
    };


    return (

            <div>
                <label htmlFor="companyName">CompanyName</label>
                <input id="companyName" type="text" value={companyName} onChange={onChangeCompany} />
                <label htmlFor="countryName">CountryName</label>
                <input id="countryName" type="text" value={countryName} onChange={onChangeCountry} />
                <label htmlFor="sort">Sortieren nach:</label>
                <select name="sort" value={sort} onChange={onChangeSort} >
                    <option value="Country">CountryName</option>
                    <option value="Company">Company</option>
                </select>
            </div>
        );

}

export default SearchForm;
