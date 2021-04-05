import React, { useEffect, useState } from 'react'
import { Context } from './../../index'
import style from './Portfolio.module.css'
import Loader from './../../Loader/Loader'


const Portfolio = () => {

    const { storage } = React.useContext(Context)
    const [urls, setUrls] = useState([])
    const [init, setInit] = useState(false)


    useEffect(() => {
        console.log('useEffect')
        getPhoto()

    }, [])

    const getPhoto = () => {

        let listOfUrls = []


        storage.ref().listAll()
            .then((res) => {

                res.items.forEach((itemRef) => {
                    itemRef.getDownloadURL()
                        .then((url) => {
                            listOfUrls.push(url)
                            setUrls([...urls, ...listOfUrls])
                            setInit(true)
                        })



                })




            })
    }


    return (
        <div>
            portfolio
            <div>

            {console.log(urls)}

            {init ? urls.map((url) => <img key={url} src={url} className={style.photo} />) : <Loader />}


            </div>

        </div>
    )
}

export default Portfolio