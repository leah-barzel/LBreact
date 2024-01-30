import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SwitchesSize from '../../Services/SwitchesSize';


const BisnessData = () => {
  const [name, setName] = useState('My Music');
  const [address, setAddress] = useState('Ramat Shlomo , Jerusalem');
  const [email, setEmail] = useState('lb0534110928@gmail.com');
  const [phone, setPhone] = useState('0534110928');
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);

  };

  return (
    <div>
      <h2>My music Details</h2>

      <div>
        {isEditing ? (<TextField id="outlined-basic" label="Name" variant="outlined" 
        type="text" value={name} onChange={(e) => setName(e.target.value)}/>) 
        : (<span>{name}</span>)}
      </div><br/>
      <div>
        {isEditing ? (<TextField id="outlined-basic" label="Address" variant="outlined" 
        type="text"value={address} onChange={(e) => setAddress(e.target.value)}/>) 
        : (<span>{address}</span>)}
      </div>
      <br/>
      <div>
        {isEditing ? (<TextField id="outlined-basic" label="Email" variant="outlined" 
        type="email"value={email} onChange={(e) => setEmail(e.target.value)}/>) 
        : (<span>{email}</span>)}
      </div>
        <br/>
      <div>
        {isEditing ? (<TextField id="outlined-basic" label="Phone" variant="outlined" 
        type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}/>) 
        : (<span>{phone}</span>)}
      </div>
      <br/>
      <div>
        {isEditing ? (<Button variant="contained"onClick={handleSave}>Save</Button>) 
        : (<Button variant="contained"onClick={handleEdit}>Edit</Button>)}
      </div>
      <br/>
      <SwitchesSize/>
    </div>
  );
};

export default BisnessData;


