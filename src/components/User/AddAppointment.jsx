import React, { useState } from 'react';
import { observer } from "mobx-react";
import dataStore from '../Store/store.js'
import FormDialog from './FormDialog.jsx';

const AddAppointment = (observer(({onClose}) =>{



const handleAddAppointment = () => {
    addAppointment(/**לשלוח את המידע */)
    console.log(dataStore.appointments)
    onClose()
};

    return(
        <>

{/*        <Button variant="contained"
       onClick={handleAddAppointment}>Add Appointment</Button>
 */}        </>
    )
}))
 
export default AddAppointment

   