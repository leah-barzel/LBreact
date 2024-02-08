import { observer } from "mobx-react";
import { useState, useEffect } from 'react'
import Service from "./Service";
import AddService from "./AddService";
import DataStore from "../../Stores/DataStore";
import { getServices } from "../../Stores/Server";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './service.css'

const ShowServiceAdmin = (observer(() => {
    const [isAdd, setIsAdd] = useState(false);
    const [servingList, setServingList] = useState(DataStore.services);

    useEffect(() => {
        getServices();
    }, []);
    useEffect(() => {
        setServingList(DataStore.services);
    }, [DataStore.services]);

    const handleAddService = () => {
        setIsAdd(!isAdd);
    }

    return (
        <>
           
            <div className="allServices">
                {isAdd ? <AddService func={handleAddService}></AddService>
                 :
                 <Button variant="contained" onClick={handleAddService} className="center">הוסף שירות</Button>}
                {servingList.map((service, i) =>
                    <Stack direction="column" spacing={3}>
                    <Service className="padding" key={i} name={service.name} price={service.price} discription={service.description}/>
                    </Stack>
                    
                )}
            </div>    
           
        </>
    )
}))

export default ShowServiceAdmin
