import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const useStyles = makeStyles({
  
    root: {
        
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
}
);

export default function Navbar(props) {
  const classes = useStyles()

  
    

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <NavLink className={styles.menuLinks} to='/portfolio'><Button color="inherit">Portfolio</Button></NavLink>
        <NavLink className={styles.menuLinks} to='/contacts'><Button color="inherit">Contacts</Button></NavLink>
        {props.isAdmin
        ? <div className={styles.adminPanel}>
        <NavLink className={styles.menuLinks} to='/add'><Button color="inherit">Add Photo</Button></NavLink>
        <NavLink className={styles.menuLinks} to='/edit'><Button color="inherit">Edit contacts</Button></NavLink>
        </div>
        
        : null
        }
        


          <Typography variant="h6" className={classes.title}>
            The Retoucher 
          </Typography>
          <NavLink className={styles.menuLinks} to='/login'><Button color="inherit">{props.userEmail ? props.userEmail : 'Login'}</Button></NavLink>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}