import React, { useState } from 'react';
import { observer } from "mobx-react";
import { Button, TextField } from '@mui/material';
import { addServices } from '../Store/server.js';
import dataStore from '../Store/store.js'
import ServiceList from './ServiceList.jsx';

const Service = (observer(() =>{
const [service , setService] = useState('');

const handleService = () => {
    addServices({'service' : service});
    setService('')

    console.log(dataStore.services)
   
};

    return(
        <>
        <TextField id="outlined-basic" variant="outlined" label="serviceName" 
        value={name} 
        onChange={(e)=>{ setName(e.target.value)}}/>
        <br/><br/>
        <br/><br/>
       <Button variant="contained"
       onClick={handleService}>open service</Button>
        </>
    )
}))
 
export default Service

   