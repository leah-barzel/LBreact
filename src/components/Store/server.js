import axios from 'axios';
import dataStore from "./store.js";

export async function getServices() {
    const services = await axios.get('http://localhost:8787/services');
    dataStore.setServices(services);
}

export async function addServices(service) {
    const res = await axios.post('http://localhost:8787/service', service);
    if (res.status === 200) {
        dataStore.addService(service);
        return 'success';
    }
    else {
        return 'failed';
    }
}

/*
export async function getServices(){
const services  = await axios.get('http://localhost:8787/services');
dataStore.setServices(services.data);
}
export async function addServices(data ) {
  console.log(data )
    const res = await axios.post('http://localhost:8787/service', data);
    if (res.status === 200) {
      dataStore.addService(res.data);
      
      console.log(res.data)
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
  */