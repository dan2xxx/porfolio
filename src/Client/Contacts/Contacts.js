import React, { useContext, useEffect } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Context } from '../../index'
import Loader from './../../Loader/Loader'
import {InfoRender} from './InfoRender'
import {ContactMeForm} from './ContactMeForm'
import style from './Contacts.module.css'




const Contacts = () => {

    
    const { firestore } = useContext(Context)
    const [info, loading] = useCollectionData(
        firestore.collection("MyInfo"))

    if (loading) {
        return <Loader />
    }



    return (
        <div className={style.container}>
        <div className={style.left_container}><InfoRender info={info} /></div>
        <div className={style.right_container}><ContactMeForm /></div>
            
        </div>
    )
}

export default Contacts