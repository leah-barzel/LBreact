import axios from 'axios';
import dataStore from "./store.js";

export async function getServices(){
const services  = await axios.get('http://localhost:8787/services');
dataStore.setServices(services);
}

export async function addServices(service){
    const res = await axios.post ('http://localhost:8787/services',service);
    if(res.status === 200){
        dataStore.addServices(service);
        return 'seccess';
    }
    else
        return 'failed';
}


