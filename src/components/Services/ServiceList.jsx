import {observer} from 'mobx-react';
import dataStore from '../Store/store.js'
import AddService from './AddService.jsx';
import { useState } from 'react';
import Switch from '@mui/material/Switch';


const ServiceList = (observer(() =>{
    return(
        <>
        <p> ServiceList</p>
        {dataStore.services.map((service,index) =>{
            
        <div key={index}>{service.name}</div>
        
        })}
        </>
    );
}));

export default ServiceList;

