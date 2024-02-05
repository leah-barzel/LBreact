import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import DateTime from './DateTime';

const FormDialog = ({ isOpen,serviceName, handleClose, handleFormSubmit, customer, setCustomer, }) => {
  const handleChange = (field, value) => {
    setCustomer(prevCustomer => ({
      ...prevCustomer,
      [field]: value,
    }));
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>{serviceName}</DialogTitle>
      <DialogContent>
        {/* Add your form fields here */}
        <TextField
          label="Name"
          value={customer.name}
          onChange={(e) => handleChange('name', e.target.value)}
          fullWidth
        /><br/><br/>
        <TextField
          label="Phone"
          value={customer.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          fullWidth
        /><br/><br/>
        <TextField
          label="Email"
          value={customer.mail}
          onChange={(e) => handleChange('mail', e.target.value)}
          fullWidth
        /><br/>
        {/* Add other form fields as needed */}
      </DialogContent>
      <DialogActions> 
        <DateTime />
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={ ()=> {handleFormSubmit(serviceName); handleClose();} }  variant="contained" color="primary">
          Submit
        </Button>
      </DialogActions>
    
    </Dialog>
    
  );
};

export default FormDialog