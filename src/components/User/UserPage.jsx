import React from 'react';
import { observer} from 'mobx-react';
import { useEffect, useState } from 'react';
import BisnessData from '../Admin/BisnessData/BisnessData';

const UserPage =  observer(({ name, adminName, address, email, details, handleDetails }) => {
  useEffect(() => {
    
   }, []);
  return (
    <>
     <div>
      <h2>User Page</h2>
      <p>Name: {name}</p>
      <p>Admin Name: {adminName}</p>
      <p>Address: {address}</p>
      <p>Details: {details}</p>
      <button onClick={handleDetails}>Details</button>
    </div> 
    </>
  );
})

export default UserPage