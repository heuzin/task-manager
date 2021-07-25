import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import DashboardPage from './screens/DashboardPage'
import LoginPage from './screens/LoginPage'
import SignUpPage from './screens/SignUpPage'
import UserInfo from './screens/UserInfo'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={DashboardPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/signup' component={SignUpPage} />
          <Route path='/user/info' component={UserInfo} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
