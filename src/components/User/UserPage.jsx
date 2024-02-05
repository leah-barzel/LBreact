import React from 'react';
import BisnessData from './BisnessData/BisnessData';
import { observer} from 'mobx-react'

const UserPage =  observer (({ name, adminName, address, email, details, handleDetails }) => {

  return (
    <>
    <div>
      <h2>User Page</h2>
      <p>Name: {value = {name} }</p>
      <p>Admin Name: {adminName}</p>
      <p>Address: {address}</p>
      <p>Details: {details}</p>
      <button onClick={handleDetails}>Toggle Details</button>
    </div>
    </>
  );
};)

export default UserPage


const UserPage = () => {


  return (
    <>
    
    </>

  )
}

export default UserPage;


