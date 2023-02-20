import React from 'react';
import EnvironmentalData from "./Model/EnvironmentalData";


type Props = {
    Env:  EnvironmentalData

}
export const EnvironmentalListItem = ({Env}: Props) => {

    return (
        <tr>
            <td>{Env.countryName}</td>
            <td>{Env.companyName}</td>
            <td>{Env.co2InTons}</td>
        </tr>
    )
}


