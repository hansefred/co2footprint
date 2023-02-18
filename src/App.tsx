import React, { useState} from 'react';
import { faker } from '@faker-js/faker';
import Environmental from "./Environmental";
import EnvironmentalList from "./EnvironmentalList";
import SearchForm from "./SearchForm";




function App() {

    let environmentalData: Environmental [] = loadFakeData();


    function loadFakeData() {
        let datas: Environmental [] = []

        for (let i = 0; i < 50; i++) {
            let data: Environmental = new Environmental();
            data.companyName = faker.company.name();
            data.countryName = faker.address.county();
            data.co2InTons = faker.datatype.number();
            datas.push(data);
        }


        return datas;
    }



    return (
            <>
                <EnvironmentalList EnvList={environmentalData} key="list" ></EnvironmentalList>
            </>
            )
}



export default App;
