import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import DateTimePicker from 'react-datetime-picker';
import dataStore from '../Store/store.js'
import FormDialog from './FormDialog.jsx';
import { observer } from 'mobx-react';
import { addAppointments } from '../Store/server.js'
import { getServices } from '../Store/server.js';


const UserHome = (observer(() => {
  
  const [selectedService, setSelectedService] = useState('null');
  const [isAppointmentScheduled, setIsAppointmentScheduled] = useState(false);
  const [isAppointmentError, setIsAppointmentError] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [customer , setCustomer] = useState ({name :'' ,phone: '' ,mail: '' , dateTime:'' })

  useEffect(() => {
    getServices()
   }, []);
  const handleServiceSelection = (service) => {
    setSelectedService(service);
    setIsFormOpen(true);
  };

 /*  const handleAppointmentDateTimeChange = (date) => {
    setAppointmentDateTime(date);
  }; */

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setCustomer({name :'' ,phone: '' ,mail: '' , dateTime:''})
    
  };
 

  const handleFormSubmit = (servicename) => {
    console.log('form submit')
  }
    // Send request to server to check for appointment availability
    // Assuming you have a function called "checkAppointmentAvailability" that returns a promise


  return (
    <div>
      <h2>User Home</h2>
      {dataStore.services.map((service, index) => {
        return  (<div key={index}>
          {/* <h3>{service.name}</h3>
          <p>{service.description}</p> */}
          <Button variant="contained" onClick={() => handleServiceSelection(service)}>
          Meeting about {service.name}
          </Button>
            </div>
     )})}
       <FormDialog
        isOpen={isFormOpen}
        serviceName={selectedService.name}
        handleClose={handleCloseForm}
        handleFormSubmit={handleFormSubmit}
        customer={customer}
        setCustomer={setCustomer}
       />
      {isAppointmentScheduled && (
        <div>
          <h3>Appointment Scheduled Successfully!</h3>
          <p>Thank you for scheduling your appointment. We look forward to seeing you.</p>
        </div>
      )}
    </div>
  );
}));
export default UserHome;