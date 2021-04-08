import React, { useContext, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import style from './Contacts.module.css'
import { Context } from '../../index'





export const ContactMeForm = (props) => {

    const { firestore } = useContext(Context)
    const [state, setState] = useState({
        mail: '',
        text: ''
    })
    const [status, setStatus] = useState('')

    const generateID = () => {
        let firstPart = (Math.random() * 46656) | 0
        let secondPart = (Math.random() * 46656) | 0
        firstPart = ('000' + firstPart.toString(36)).slice(-3)
        secondPart = ('000' + secondPart.toString(36)).slice(-3)
        return firstPart + secondPart
      }
    

    const sendMessage = () => {

        firestore.collection("Messages").doc(generateID()).set(state)
        .then(() => {
            setStatus('Sent')
            setState({
                mail: '',
                text: ''
            })
        })
        .catch((error) => {
            setStatus("Something goes wrong");
            console.log(error)
        });
    }
    
    const onMailChange = (event) => {
        
        
        setState({
            ...state,
            mail: event.target.value
        })
    }

    const onTextChange = (event) => {
        
        
        setState({
            ...state,
            text: event.target.value
        })
    }

 
    
    

    return (
        <div>

            <div className={style.status}>{status}</div>
            <div className={style.email}><TextField id="email" label="Email" variant="outlined" fullWidth onChange={onMailChange} value={state.mail}/></div>

            <div className={style.message}><TextField
                onChange={onTextChange} 
                value={state.text}
                id="outlined-multiline-static"
                label="Write me something"
                multiline
                rows={5}
                variant="outlined"
                fullWidth
            /></div>

            <div className={style.button}><Button type="submit" size="large" variant="contained" onClick={sendMessage}>Send</Button></div>

           
            
        </div>
    )
}