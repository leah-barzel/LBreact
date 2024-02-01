import * as React from 'react';
import Switch from '@mui/material/Switch';
import AddService from './AddService';
import { useState } from 'react';
import ServiceList from './ServiceList';
const label = { inputProps: { 'area-label': 'Size switch demo' } };

export default function SwitchesSize() {
  const [isConfirmationActive, setConfirmationActive] = useState(false);
  const handleSwitchChange = (event) => {
    setConfirmationActive(event.target.checked);
  };
  const handleClose = () =>{
    setConfirmationActive(false)
  }

  return (
    <div>
      <Switch {...label} checked={isConfirmationActive} onChange={handleSwitchChange} />
      <br/>
      {isConfirmationActive && <AddService onClose={handleClose}/>}
      {!isConfirmationActive && <ServiceList/>}
      

    </div>
  );
}