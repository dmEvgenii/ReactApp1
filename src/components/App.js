import React from 'react'

import img from '../images/ffff.jpg'
import RegistrationPage from './RegistrationPage.js'
import EventPage from './EventsPage/EventPage.js'
 import {createBrowserHistory} from 'history'
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
    withRouter
  } from "react-router-dom"


function App() {


  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))


    return(
      <div>
<BrowserRouter >
    <Switch>
      <Route  path='/RegistrationPage' component={RegistrationPage} />
      <Route  path='/EventList' component={EventPage} />
      <Redirect from='/' to='/EventList'/>
      </Switch>
</BrowserRouter>
      </div>
    )
}

export default (App)
