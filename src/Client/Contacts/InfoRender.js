import React, { useContext, useEffect } from 'react'
import style from './Contacts.module.css'



export const InfoRender = (props) => {

    const instagram = props.info[0]['instagram']
    const email = props.info[0]['email']
    const telegram = props.info[0]['telegram']


    return (
        <div>
                <div><p>Danyil Boiarchuk / Даниїл Боярчук</p></div>

                <div><a href={'http://' + instagram}>{instagram}</a></div>
                <div><a href={'http://' + telegram}>{telegram}</a></div>
                <div><a href={"mailto:" + email}>{email}</a> </div>

        </div>

    )
}