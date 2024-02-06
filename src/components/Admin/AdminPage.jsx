import React, { useState } from 'react';
import BisnessData from './BisnessData/BisnessData';
import UserHome from '../User/UserHome';
import { observer } from 'mobx-react';


const AdminPage = (observer(() => {


  return (
    <>
    
    <BisnessData/>
    <UserHome/>
    </>

  )
}))

export default AdminPage;


