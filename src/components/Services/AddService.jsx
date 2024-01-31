import React, { useState } from 'react';
import { observer } from "mobx-react";
import { Button, TextField } from '@mui/material';
import { addServices } from '../Store/server.js';
import dataStore from '../Store/store.js'
import ServiceList from './ServiceList.jsx';

const AddService = (observer(({onClose}) =>{
const [name , setName] = useState('');
const [description , setDescription] = useState('')


const handleAddService = () => {
    addServices({'name':name , 'description':description});
    setName('')
    setDescription('')
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
        <TextField id="outlined-basic" variant="outlined" label="serviceName" 
        value={name} 
        onChange={(e1)=>{ setName(e1.target.value)}}/>
        <br/><br/>
        <TextField id="outlined-basic" variant="outlined" label="description" 
        value={description} 
        onChange={(e2)=>{ setDescription(e2.target.value)}}/>
        <br/><br/>
       <Button variant="contained"
       onClick={handleAddService}>Add service</Button>
        </>
    )
}))
 
export default AddService

   