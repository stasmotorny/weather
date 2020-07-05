import cityList from "./city.list";
import React, {Component} from 'react';

let list = cityList.filter(element => {
    return element.country == "UA";
})

const mapedList = list.map(city => city.name)

export default mapedList