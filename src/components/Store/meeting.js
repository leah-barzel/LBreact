import { observable, makeObservable, action, computed } from 'mobx';
import Swal from 'sweetalert2'

// const meeting = {

//     serviceName: '',
//     serviceDescription: '',
//     servicePrice: '',
//     clientName: '',
//     clientPhone: '',
//     clientEmail: '',
//     dateTime: '',
// }



//סטור גלובלי שמכיל את כל נתוני הפגישות ופונקציות להוספת פגישות
class MeetingStore {

    meetingList = observable([

    ]);

    constructor() {
        makeObservable(this,
            {
                meetingList: observable,
                addMeeting: action,
                currentList: computed,
                initialMeetingList:action
            }
        )
    } 
    get currentList() {
        return this.meetingList;
    }

    addMeeting = async (meeting) => {
        const response = await fetch("http://localhost:8787/appointment", {
            method: "POST",
            body: JSON.stringify(meeting),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response.statusText);
        if (response.status === 200) {
            this.meetingList = ([...this.meetingList, meeting])

            console.log("true")
            console.log("true")
            console.log("metting",this.meetingList.length)
            Swal.fire({
                title: "נקבעה פגישה",
                text: "פרטיך נקלטו בהצלחה",
                icon: "success"
              });
              return true
        }
        Swal.fire({
            title: 'מצטערים! תאריך זה תפוס',
            text: '  נא קבעו תאריך אחר',
            icon: "error"
          });
          return false
      
     
    }
    //פונקצית get
    initialMeetingList = async () => {
        const response = await fetch("http://localhost:8787/appointments");
        const data = await response.json();
        console.log(data);
        const sortedData = [...data].sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
        this.meetingList =  sortedData;
      }
      
}
export default new MeetingStore();
// אוביקט יחיד 