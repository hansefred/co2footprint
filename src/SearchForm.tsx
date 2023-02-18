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



    //TODO Check Cross Side Script
    const onChangeCompany = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setCompanyName(event.target.value);
        props.onSearchChange({companyName: event.target.value, countryName: countryName, sort: sort} )
    };
    const onChangeCountry = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setCountryName(event.target.value);
        props.onSearchChange({companyName: companyName, countryName: event.target.value, sort: sort},)
    };

    const onChangeSort = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setSort(event.target.value);
        props.onSearchChange({companyName: companyName, countryName: countryName, sort: event.target.value})
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
