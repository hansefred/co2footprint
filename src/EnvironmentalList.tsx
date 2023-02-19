import React, {useState} from "react";
import Environmental from "./Environmental";
import {EnvironmentalComponent} from "./EnvironmentalComponent";
import SearchForm from "./SearchForm";
import SearchFormData from "./SearchFormData";


type Props = {
    EnvList:  Environmental []

}

export const EnvironmentalList = ({EnvList}: Props) => {


    const [filteredList, setFilteredList] = useState<Environmental []>(SortList(EnvList))

    function SortList(newFilteredList: Environmental[], sortBy: string = "Country") {

        switch (sortBy)
        {
            case "Country":
                newFilteredList.sort((a, b) => {
                    let aUp = a.countryName.toUpperCase();
                    let bUp = b.countryName.toUpperCase();

                    return (aUp < bUp) ? -1 : (aUp > bUp) ? 1 : 0;
                });
                break;
            case "Company":
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
        SortList(newFilteredList, arg.sort);
        setFilteredList(newFilteredList);
    }

    return(
        <>
            <SearchForm onSearchChange={onChange}></SearchForm>
            <figure>
            <table>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Company</th>
                        <th>CO² Ausstoß in Tonnen</th>
                    </tr>
                </thead>
                <tbody>
                {
                    filteredList.map(env => {
                        return <EnvironmentalComponent Env={env} key={env.id}></EnvironmentalComponent>
                    })
                }
                </tbody>
            </table>
            </figure>
        </>
    )


}

export  default EnvironmentalList