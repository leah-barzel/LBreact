import axios from 'axios';
import dataStore from "./store.js";

export async function getServices(){
const services  = await axios.get('http://localhost:8787/services');
dataStore.setServices(services.data);
}
export async function addServices(service , description ) {
    const res = await axios.post('http://localhost:8787/service', service);
    if (res.status === 200) {
      dataStore.addService(service, description );
      console.log(service, description )
      return res.data; // Return the response data
      
    } else {
      throw new Error('Adding service failed');
    }
  }
  export async function addMeetings(){
    const res = await axios.post('http://localhost:8787/appointments')
    if(res.status === 200) {
      datastore.addMeeting()
    }
  }