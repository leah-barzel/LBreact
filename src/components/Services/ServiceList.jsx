import {observer} from 'mobx-react';
import dataStore from '../Store/store.js'
import AddService from './AddService.jsx';
import { useState } from 'react';
import Switch from '@mui/material/Switch';

/*const [isEditing, setIsEditing] = useState(false);
const openEdit = () => {
    setIsEditing(true);
  };

  const closeEdit = () => {
    setIsEditing(false);

  };*/
const label = { inputProps: { 'aria-label': 'Size switch demo' } };

const ServiceList = (observer(() =>{
    return(
        <>
        {dataStore.services.map((service,index) =>{
            
        <div key={index}>{service.name}</div>
        })}
    
    
      <Switch {...label} defaultChecked />
    
        <AddService/>
        </>
    );
}));

export default ServiceList;

/*{isEditing ? (<AddService onClick={openEdit}/>) : (<div onClick={closeEdit}/>)}*/

