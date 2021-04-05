import React, {useEffect, useState} from 'react'
import { Context } from './../../index'
import style from './Portfolio.module.css'
import Loader from './../../Loader/Loader'


const Portfolio = () => {

    const { storage } = React.useContext(Context)
    const [urls, setUrls] = useState([])
    const [init, setInit] = useState(false)


    useEffect(() => {
        console.log('useEffect')
        setInit(false)
        getPhoto()
    }, [])

    const getPhoto = () => {

        


    storage.ref().listAll().then((res) => {
            let listOfUrls = []
            res.items.forEach((itemRef) => {
                
                itemRef.getDownloadURL()
                    .then((url) => {
                
                    listOfUrls.push(url)
                    
            })
              });

            
            setUrls(listOfUrls)
            setInit(true)
            
        });
        


    }


    

    return (
        <div>
            portfolio
            <div>
                       
            {console.log()}

            {init ? urls.map((url) => <img key={url} src={url} className={style.photo} />) : <Loader />}
            
            
            </div>

        </div>
    )
}

export default Portfolio