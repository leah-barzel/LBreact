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

export async function getAppointments() {
  const appointments = await axios.get('http://localhost:8787/appointments');
  dataStore.setAppointments(appointments);
}

export async function addAppointments(appointment) {
  const res = await axios.post('http://localhost:8787/appointment', appointment);
  if (res.status === 200) {
      dataStore.addAppointment(appointment);
      return 'success';
  }
  else {
      return 'failed';
  }
}
