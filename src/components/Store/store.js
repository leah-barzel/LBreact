import {makeObservable , observable, action} from "mobx";

class DataStore {

    services = [];

    appointments = [];
    
    constructor(){
        makeObservable(this , {
            services : observable,
            setServices : action,
            addService : action ,
            appointments : observable ,
            addAppointment : action
        })
    }
    setServices = (services) =>{
        this.services=[...this.services, ...services];
    }
    addService = (service) =>{
        this.services=[...this.services, service];
    }
    setAppointments =  (appointments) =>{
        this.appointments = [...this.appointments , ...appointments]
    }

    addAppointment =  (appointment) =>{
        this.appointments = [...this.appointments , appointment]
    }
}


export default new DataStore();
        