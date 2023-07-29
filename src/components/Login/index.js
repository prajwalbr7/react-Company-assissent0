import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {
    LoginUserName: '',
    LoginPassword: '',
    Active: false,
    Message: '',
    Message1: '',
  }

  onChangeLoginUserName = event => {
    this.setState({LoginUserName: event.target.value})
  }

  onChangeLoginPassword = event => {
    this.setState({LoginPassword: event.target.value})
  }

  thisRequrieduserName = () => {
    const {LoginUserName} = this.state
    const errorMessage = '*Required'
    if (LoginUserName === '') {
      this.setState({Message: errorMessage})
    } else {
      this.setState({Message: ''})
    }
  }

  thisRequiredPassword = () => {
    const {LoginPassword} = this.state
    const errorMessage = '*Required'
    if (LoginPassword === '') {
      this.setState({Message1: errorMessage})
    } else {
      this.setState({Message1: ''})
    }
  }

  LoginSubmitForm = event => {
    event.preventDefault()
    const username = localStorage.getItem('Name')
    const email = localStorage.getItem('Email')
    const password = localStorage.getItem('CreatePassword')
    const {LoginPassword, LoginUserName, Message} = this.state
    console.log(Message)
    console.log(username)
    console.log(password)
    const {history} = this.props
    if (LoginUserName === '' || LoginPassword === '') {
      this.thisRequrieduserName()
      this.thisRequiredPassword()
    } else if (
      (email === LoginUserName || username === LoginUserName) &&
      password === LoginPassword
    ) {
      history.replace('/CompanyHomePage')
      this.setState({Active: false, LoginUserName: '', LoginPassword: ''})
    } else {
      this.setState({Active: true})
    }
  }

  render() {
    const {LoginUserName, LoginPassword, Active, Message, Message1} = this.state
    return (
      <div className="Main-Container">
        <form className="Form-Container" onSubmit={this.LoginSubmitForm}>
          <h1 className="Login-heading">Login</h1>
          <label className="label-style" htmlFor="username">
            USERNAME
          </label>
          <input
            type="text"
            className="input-style "
            id="username"
            placeholder="Username"
            value={LoginUserName}
            onChange={this.onChangeLoginUserName}
          />
          <p className="para-Required-Color">{Message}</p>
          <label className="label-style margin-to-elements" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            className="input-style"
            id="password"
            placeholder="Password"
            value={LoginPassword}
            onChange={this.onChangeLoginPassword}
          />
          <p className="para-Required-Color">{Message1}</p>
          <button type="submit" className="button-style margin-to-elements">
            Login
          </button>
          {Active ? (
            <p className="error-message-style">* Invalid Credentials</p>
          ) : (
            ''
          )}
          <Link to="/SignPage">
            <p className="Sign-style" type="submit">
              Sign up ?
            </p>
          </Link>
        </form>
      </div>
    )
  }
}
export default Login
