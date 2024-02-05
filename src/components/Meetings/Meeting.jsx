import { observer } from "mobx-react"
import MeetingsList from "./MeetingsList"
import './SingleMeeting.css';
import MeetingStore from '../Store/meeting.js'
import dataStore from '../Store/store.js'
import FormDialog from "../User/FormDialog.jsx";

const Meeting = observer(( {index}) =>{
console.log('Metting is work!')
  const getMeetingColor = (dateTime) =>
 {
    const today = new Date();
    const meetingDate = new Date(dateTime);
    const timeDiff = Math.abs(meetingDate.getTime() - today.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
   if(  diffDays<0) 
    return 'non'
else
    if (diffDays===1) {
      return 'red'; // היום
    } else if (diffDays <= 7) {
      return 'orange'; //השבוע
    } 
    else if (diffDays >=7) 
    {
      return 'green'; // עתיד
    
    }
  };
  return(
    <>
    <div className="SingleMeeting">
        <h3>רשימת הפגישות </h3>
        <h4>{MeetingStore.meetingList[index]}</h4>
        <h4>{dataStore.services}</h4>
        <h2 className="SingleMeeting-title">{MeetingStore.meetingList[index].name}</h2>
        <h2 className="SingleMeeting-description">{MeetingStore.meetingList[index].description}</h2>
        <h2 className="SingleMeeting-price">{MeetingStore.meetingList[index].servicePrice}</h2>
        <h3 className={`SingleMeeting-date ${getMeetingColor(MeetingStore.meetingList[index].dateTime)}`}>
          {MeetingStore.meettingList[index].dateTime}
        </h3>
        <div className="SingleMeeting-contactInfo">
          <h3 className="SingleMeeting-clientName">{MeetingStore.meetingList[index].clientName}</h3>
          <h4 className="SingleMeeting-contactInfo">{MeetingStore.meetingList[index].clientPhone}</h4>
          <h4 className="SingleMeeting-contactInfo">{MeetingStore.meetingList[index].clientEmail}</h4> 
        </div>
      </div>
  </> 
  )
})

export default Meeting

