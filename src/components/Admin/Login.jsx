import React, { useState } from 'react';
import { observer } from 'mobx-react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const Login = observer(() => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  console.log('Login component loaded');
  
  const handleLogin = () => {
    const data = { name, password };
    axios
      .post('http://localhost:8787/login', data)
      .then(response => {
        console.log(response.data);
        navigate("/AdminPage");
      })
      .catch(error => {
        console.error(error);
        /*<Alert severity="error">Incorrect login details</Alert>*/
        alert('Incorrect login details')
      });
      setName('')
      setPassword('')
  };

  return (
    <>
      <TextField id="outlined-basic" label="Name" variant="outlined" 
      type='text' value={name} onChange={e => setName(e.target.value)}  />
      <br/><br/>
      <TextField id="outlined-basic" label="Password" variant="outlined" 
      type='password' value={password} onChange={e => setPassword(e.target.value)}/>
      <br/><br/>
      <Button
      variant="contained"
      onClick={handleLogin}>Send</Button>
      <br/>
    </>
  );
});

export default Login;


