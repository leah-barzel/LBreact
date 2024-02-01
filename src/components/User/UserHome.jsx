import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import DateTimePicker from 'react-datetime-picker';
import dataStore from '../Store/store.js'
import FormDialog from './FormDialog.jsx';

const UserHome = () => {
  const [selectedService, setSelectedService] = useState('null');
  const [isAppointmentScheduled, setIsAppointmentScheduled] = useState(false);
  const [isAppointmentError, setIsAppointmentError] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [customer , setCustomer] = useState ({name :'' ,phone: '' ,mail: '' , dateTime:''})

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Send request to server to check for appointment availability
    // Assuming you have a function called "checkAppointmentAvailability" that returns a promise
    checkAppointmentAvailability(appointmentDateTime)
      .then((response) => {
        if (response.status === 200) {
          setIsAppointmentScheduled(true);
        } else if (response.status === 400) {
          setIsAppointmentError(true);
        }
      })
      .catch((error) => {
        console.error('Error checking appointment availability:', error);
      });
  };

  return (
    <div>
      <h2>Appointment list</h2>
      {dataStore.services.map((service, index) => {
        return  ((<div key={index}>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <Button variant="contained" onClick={() => handleServiceSelection(service)}>
          Make an appointment about it
          </Button>
            </div>
     ) )})}
       <FormDialog
        isOpen={isFormOpen}
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
};
export default UserHome;