import React, { useState } from 'react';
import { observer } from "mobx-react";
import { Button, TextField } from '@mui/material';
import { addServices } from '../Store/server.js';
import dataStore from '../Store/store.js'
import ServiceList from './ServiceList.jsx';

const AddService = (observer(({onClose}) =>{
const [name , setName] = useState('');

const handleAddService = () => {
    addServices({name});
    setName('')
    console.log('its work')
    console.log(dataStore.services)
    onClose()
};


/*
const handleAddService = async () => {
    const res = await addServices({ name });
    if (res === 'success') {
      setName('');
      onClose();
    } else {
      console.log('Adding service failed');
    }
  };
*/
  
    return(
        <>
        <TextField id="outlined-basic" variant="outlined" label="serviceDetails" 
        value={name} 
        onChange={(e)=>{ setName(e.target.value)}}/>
        <br/><br/>
       <Button variant="contained"
       onClick={handleAddService}>Add service</Button>
        </>
    )
}))
 
export default AddService

   