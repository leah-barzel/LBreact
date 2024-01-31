import Meeting from './Meeting'
import { observer } from 'mobx-react';
import { useEffect } from "react";
import MeetingStore from '../Store/meeting.js'


const MeetingsList  = () =>{
useEffect(() => {
  MeetingStore.initialMeetingList()
}, [])
  return(
    <> 
    <br/>
    meetingList
    <div>
    {MeetingStore.meetingList.map((key,index) => <div index = {index}></div>)}
   
    </div>
    </>
  )
}

export default MeetingsList

/*

mport React, { useEffect } from 'react';
import {observer} from 'mobx-react';
import DataStore from '../Store/store.js'
import AddService from './AddService.jsx';
import { useState } from 'react';
import Switch from '@mui/material/Switch';



const ServiceList = (observer(() => {

    console.log(DataStore.services);
    return (
        <>
            {DataStore.services.map((service, index) => {
            return <div key={index}>{service.name}</div>
            })}
        </>
    )
}))

export default ServiceList
*/