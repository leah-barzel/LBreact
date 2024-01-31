import React, { useEffect } from 'react';
import {observer} from 'mobx-react';
import DataStore from '../Store/store.js'
import AddService from './AddService.jsx';
import { useState } from 'react';
import Switch from '@mui/material/Switch';



const ServiceList = (observer(() => {

    console.log(DataStore.services);
    return (
        <>
            {DataStore.services.map((service, index) => {
            return <div key={index}>{service.name}</div>
            })}
        </>
    )
}))

export default ServiceList

/*
const ServiceList = (observer(() =>{

   
    return(
        <>
        <p> ServiceList</p>
        {DataStore.services.map((service,index) =>{
        <div key={index}>{service.details}</div>
        })}
        </>
    );
}));
export default ServiceList;


    */