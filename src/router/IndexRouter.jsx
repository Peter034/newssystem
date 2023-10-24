import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Login from '../components/login/Login'
import NewsSandBox from '../components/sandbox/NewsSandBox'

export default function IndexRouter() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/login" component={Login} />
              {/* <Route path="/" component={NewsSandBox} /> */}
              <Route path="/" render={()=>{
                return(
                  localStorage.getItem("token")?
                  <NewsSandBox></NewsSandBox>:
                  <Redirect to="/login" />
                )
              }} />
          </Switch>
      </BrowserRouter>
  )
}
