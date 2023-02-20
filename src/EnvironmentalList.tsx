import React, {useState} from "react";
import EnvironmentalData from "./Model/EnvironmentalData";
import {EnvironmentalListItem} from "./EnvironmentalListItem";
import SearchForm from "./SearchForm";
import SearchFormData, {SortOption} from "./Model/SearchFormData";


type Props = {
    EnvList:  EnvironmentalData []

}

export const EnvironmentalList = ({EnvList}: Props) => {


    const [filteredList, setFilteredList] = useState<EnvironmentalData []>(SortList(EnvList))

    function SortList(newFilteredList: EnvironmentalData[], sortBy: string = SortOption.Country) {

        switch (sortBy)
        {
            case SortOption.Country:
                newFilteredList.sort((a, b) => {
                    let aUp = a.countryName.toUpperCase();
                    let bUp = b.countryName.toUpperCase();

                    return (aUp < bUp) ? -1 : (aUp > bUp) ? 1 : 0;
                });
                break;
            case SortOption.Company:
                newFilteredList.sort((a, b) => {
                    let aUp = a.companyName.toUpperCase();
                    let bUp = b.companyName.toUpperCase();

                    return (aUp < bUp) ? -1 : (aUp > bUp) ? 1 : 0;
                });
                break;
        }

        return newFilteredList;
    }

    const onChange = (arg: SearchFormData) =>{
        let newFilteredList = EnvList.filter( s =>{
            let sCompanyName = s.companyName.toUpperCase();
            let sCountryName = s.countryName.toUpperCase();

            let aCompanyName = arg.companyName.toUpperCase();
            let aCountryName = arg.countryName.toUpperCase();

            return sCompanyName.match(aCompanyName) && sCountryName.match(aCountryName)
        });
        SortList(newFilteredList, arg.sort.valueOf());
        setFilteredList(newFilteredList);
    }

    return(
        <>
            <SearchForm onSearchChange={onChange}></SearchForm>
            <figure>
            <table>
                <thead>
                    <tr>
                        <th>Land</th>
                        <th>Firma</th>
                        <th>CO² Ausstoß in Tonnen</th>
                    </tr>
                </thead>
                <tbody>
                {
                    filteredList.map(env => {
                        return <EnvironmentalListItem Env={env} key={env.id}></EnvironmentalListItem>
                    })
                }
                </tbody>
            </table>
            </figure>
        </>
    )

}

export  default EnvironmentalList