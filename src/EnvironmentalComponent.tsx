import React,{FC} from 'react';
import Environmental from "./Environmental";


type Props = {
    Env:  Environmental

}
export const EnvironmentalComponent = ({Env}: Props) => {

    return (
        <tr>
            <td>{Env.countryName}</td>
            <td>{Env.companyName}</td>
            <td>{Env.co2InTons}</td>
        </tr>
    )
}


