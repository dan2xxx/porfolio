import './App.css'
import React from 'react'
import Navbar from './NavBar/Navbar'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Loader from './Loader/Loader'
import Portfolio from './Client/Portfolio/Portfolio'
import Contacts from './Client/Contacts/Contacts'
import Login from './Login/Login'
import firebase from 'firebase'
import AddPhoto from './Admin/AddPhoto/AddPhoto'
import EditContacts from './Admin/EditContacts/EditContacts'



function App() {

  const adminId = 'gRQQIabMe9TtEuxVYlIB6g3Axvh2'

  const [user, setUser] = React.useState('')
  const [admin, setAdmin] = React.useState(false)

  React.useEffect(() => {
    
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        setUser(user)
        if (user.uid === adminId) {
          setAdmin(true)
        } else {
          setAdmin(false)
          
        }
      } else {
        setUser('')
        setAdmin(false)
      }
    });
  }, [user])


  return (
    <div className="App">
      <HashRouter>
        <Navbar userEmail={user.email} isAdmin={admin} />
        <Switch>
                  <Route path='/' exact><Redirect to={'/portfolio'} /></Route>
                  <Route path='/portfolio' render={() => <Portfolio />} />
                  <Route path='/contacts' render={() => <Contacts />} />
                  <Route path='/add' render={() => <AddPhoto />} />
                  <Route path='/edit' render={() => <EditContacts />} />
                  <Route path='/login' render={() => <Login user={user} setUser={setUser} />} />
                  <Route path='*' render={() => <h2>404 NOT FOUND</h2>} />
                </Switch>
      </HashRouter>
      
      
    </div>
  );
}

export default App;
