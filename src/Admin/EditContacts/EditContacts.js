import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../index'
import Loader from './../../Loader/Loader'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


const EditContacts = () => {

    const { firestore } = useContext(Context)
    const [info, loading] = useCollectionData(firestore.collection("MyInfo"))
    const [contacts, setContacts] = useState('')
    
    useEffect(() => {
        if (info) {
            setContacts({
                ...info[0]
            })
        }
       
    }, [info])


    if (loading) {
        return <Loader />
    }

    const uploadData = () => {

        

        let myRef = firestore.collection("MyInfo").doc("info");
        // 
        myRef.update({
            ...contacts
        }).then((snapshot) => {
            console.log(snapshot)
            console.log('Download successful')
        })

        

    }

    const updateContacts = (e, key) => {
     
        const newContact = {
            [key]: e.target.value
        }

        setContacts({
            ...contacts,
            ...newContact
        })

        console.log(contacts)
    }

    


    return (
        <div>
            
            
            
            <form noValidate autoComplete="off">
                <TextField onBlur={(e) => updateContacts(e, 'email')} id="email" label="Email" defaultValue={info[0]['email']} />
                <TextField onBlur={(e) => updateContacts(e, 'telegram')} id="telegram" label="Telegram" defaultValue={info[0]['telegram']} />
                <TextField onBlur={(e) => updateContacts(e, 'instagram')} id="instagram" label="Instagram" defaultValue={info[0]['instagram']} />
            </form>
            <Button onClick={uploadData} variant="contained" color="primary">Update</Button>
        </div>
    )
}

export default EditContacts