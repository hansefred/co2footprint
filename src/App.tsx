import React from 'react';
import { faker } from '@faker-js/faker';
import Environmental from "./Environmental";
import EnvironmentalList from "./EnvironmentalList";





function App() {

    const FakeDataCount = 500;
    let environmentalData: Environmental [] = loadFakeData();


    function loadFakeData() {
        let datas: Environmental [] = []
        for (let i = 0; i < FakeDataCount; i++) {
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
