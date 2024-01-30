import axios from 'axios';
import dataStore from "./store.js";

export async function getServices(){
const services  = await axios.get('http://localhost:8787/services');
dataStore.setServices(services.data);
}


export async function addServices(service) {
  try {
    const res = await axios.post('http://localhost:8787/service', service);
    if (res.status === 200) {
      dataStore.addService(service);
      console.log(service)
      return res.data; // Return the response data
      
    } else {
      throw new Error('Adding service failed');
    }
  } catch (error) {
    console.error(error);
    throw new Error('Adding service failed');
  }
}

