import React, { useState, useContext } from 'react'
import { Context } from './../../index'
import Loader from './../../Loader/Loader'
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const AddPhoto = () => {

    const { firebase } = useContext(Context)
    const [loading, setLoading] = useState(false)
    const [notification, setNotification] = useState('')

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        },
    }));


    const classes = useStyles();


    const onPhotoSelector = (e) => {
        uploadPhoto(e.target.files[0])
    }

    const uploadPhoto = (file) => {
        console.log(file)
        setLoading(true)
        let storageRef = firebase.storage().ref();
        let newRef = storageRef.child(file.name);
        newRef.put(file).then((snapshot) => {
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');

            console.log('Uploaded a blob or file!');

            console.log(snapshot)
            setLoading(false)
            setNotification('Upload successful')
        });
    }



    return (
        <div>
            <div className={classes.root}>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={onPhotoSelector}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                        Upload
        </Button>
                </label>
            </div>
            <div>{notification}</div>
            <div>{loading ? <Loader /> : null}</div>




        </div>
    )
}

export default AddPhoto