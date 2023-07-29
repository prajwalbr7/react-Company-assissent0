import {Route, Switch} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Sign from './components/SignInPage'
import CompanyHomePage from './components/CompanyHomePage'

const App = () => (
  <Switch>
    <Route exact path="/SignPage" component={Sign} />
    <Route exact path="/" component={Login} />
    <Route exact path="/CompanyHomePage" component={CompanyHomePage} />
  </Switch>
)

export default App
