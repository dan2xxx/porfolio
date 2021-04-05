import { Button, Container, Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import { Context } from './../index'
import firebase from 'firebase'
import { NavLink, Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom"


const Login = (props) => {


    const { auth } = useContext(Context)
    let history = useHistory();


    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const { user } = await auth.signInWithPopup(provider)
        
        if (user) {
            
            props.setUser(user)
            history.push('/')
            console.log(user)
        }
        
    }

    const logout = () => {
        firebase.auth().signOut().then(() => {
            props.setUser('')
            history.push('/')
          }).catch((error) => {
            // An error happened.
          });
        
    }






    return (
        <div>
            <Container>
               <Grid container
                    style={{ height: window.innerHeight - 50 }}
                    alignItems={'center'}
                    justify={'center'}
                >
                    {props.user.uid 
                    ? <Button onClick={logout} variant="outlined">Logout</Button>
                    : <Button onClick={login} variant="outlined">Login with Google</Button>}
                    
                </Grid>
            </Container>


        </div>
    )
}

export default Login