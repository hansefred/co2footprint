import React, { useState } from 'react';
import SearchFormData from "./Model/SearchFormData";
import {SortOption} from "./Model/SearchFormData";

interface State
{
    onSearchChange: (form:SearchFormData) => void;
}

const SearchForm: React.FC<State> = (props:State) => {

    const [countryName, setCountryName] = useState<string>("");
    const [companyName, setCompanyName] = useState<string>("");
    const [sort, setSort] = useState<string>(SortOption.Company);

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
        let value : string = event.target.value;
        setSort(value);
        props.onSearchChange({companyName: companyName, countryName: countryName, sort:value})
    };


    return (
        <>
                <input placeholder="Firma" id="companyName" type="text" value={companyName} onChange={onChangeCompany} />
                <input placeholder="Land" id="countryName" type="text" value={countryName} onChange={onChangeCountry} />
                <label htmlFor="sort">Sortieren nach:</label>

                <select onChange={onChangeSort}>
                    {Object.values(SortOption).map((value) =>(

                        <option key={value} value={value}>
                            {value}
                        </option>
                    ))}
                </select>
        </>
        );

}

export default SearchForm;
