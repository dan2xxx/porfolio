import React, {useContext, useEffect}  from 'react'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { Context } from '../../index'
import Loader from './../../Loader/Loader'

const Contacts = () => {

    const {firestore} = useContext(Context)
    const [info, loading] = useCollectionData(
        firestore.collection("MyInfo"))

    if (loading) {
        return <Loader />
    }
    
    const infoRender = () => {
        const instagram = info[0]['instagram']
        const email = info[0]['email']
        const telegram = info[0]['telegram']

        return (
            <div>
                <div>{instagram}</div>
                <div>{email}</div>
                <div>{telegram}</div>
            </div>
        )
    }
    


    return (
        <div>
            contacts
            {infoRender()}
        </div>
    )
}

export default Contacts