import React from 'react';
import { faker } from '@faker-js/faker';
import EnvironmentalData from "./Model/EnvironmentalData";
import EnvironmentalList from "./EnvironmentalList";


function App() {

    const FakeDataCount = 150;
    let environmentalData: EnvironmentalData [] = loadFakeData();


    function loadFakeData() {
        let dataList: EnvironmentalData [] = []
        for (let i = 0; i < FakeDataCount; i++) {
            let fakeData: EnvironmentalData = new EnvironmentalData();
            fakeData.companyName = faker.company.name();
            fakeData.countryName = faker.address.county();
            fakeData.co2InTons = faker.datatype.number();
            dataList.push(fakeData);
        }
        return dataList;
    }


    return (
                <EnvironmentalList EnvList={environmentalData} key="list" ></EnvironmentalList>
            )
}

export default App;
