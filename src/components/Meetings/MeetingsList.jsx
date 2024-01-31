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
    {MeetingStore.meetingList.map((key,index) => <Meeting index = {index}></Meeting>)}
    <Meeting/>
    </div>
    </>
  )
}

export default MeetingsList