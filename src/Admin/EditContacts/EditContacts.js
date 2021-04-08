import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../index'
import Loader from './../../Loader/Loader'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import style from './EditContacts.module.css'

const EditContacts = () => {

    const { firestore } = useContext(Context)
    const [info, loading] = useCollectionData(firestore.collection("MyInfo"))
    const [contacts, setContacts] = useState('')
    const [messages, messagesLoading] = useCollectionData(firestore.collection("Messages"))
    
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



    const makeListOfMessage = () => {
        if (messagesLoading) {
            return <Loader />
        } else {
           return messages.map((item, index) => <div key={index} className={style.message}>
               <h3>{item.mail}</h3>
               <p>{item.text}</p>
           </div>)
        
        
    }
}

    

    
    console.log('render')

    return (
        <div className={style.container}>
            
            
            
            <form noValidate autoComplete="off">
                <TextField onBlur={(e) => updateContacts(e, 'email')} id="email" label="Email" defaultValue={info[0]['email']} />
                <TextField onBlur={(e) => updateContacts(e, 'telegram')} id="telegram" label="Telegram" defaultValue={info[0]['telegram']} />
                <TextField onBlur={(e) => updateContacts(e, 'instagram')} id="instagram" label="Instagram" defaultValue={info[0]['instagram']} />
            </form>
            <Button className={style.button} onClick={uploadData} variant="contained" color="primary">Update</Button>

            <div className={style.messagesContainer}>
            {makeListOfMessage()}
            </div>
        </div>
    )
}

export default EditContacts