/*import Meeting from './Meeting'
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
    <div>
    {MeetingStore.meetingList.map((key,index) => {
       return <div index = {index}></div>
     })}
  
   
    </div>
    </>
  )
}

export default MeetingsList

*/


import {observer} from 'mobx-react';
import dataStore from '../Store/store.js'



const ServiceList = (observer(() => {

    console.log(dataStore.services);
    return (
        <>
            {dataStore.services.map((service, index) => {
            return <div key={index}>{service.name}</div>
            
            })}
        </>
    )
}))

export default ServiceList



