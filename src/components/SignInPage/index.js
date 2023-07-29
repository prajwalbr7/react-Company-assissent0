import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Sign extends Component {
  state = {
    Name: '',
    CreatePassword: '',
    Number: '',
    Email: '',
    Profession: 'Student',
    ErrorMessage: '',
    Active: false,
  }

  onChangeName = event => {
    this.setState({Name: event.target.value})
  }

  onChangeCreatePassword = event => {
    this.setState({CreatePassword: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({Email: event.target.value})
  }

  onChangeNumber = event => {
    this.setState({Number: event.target.value})
  }

  onChangeProfession = event => {
    this.setState({Profession: event.target.value})
  }

  SubmitDetails = event => {
    event.preventDefault()
    const {Name, CreatePassword, Email, Number, Profession} = this.state
    const Required = '*! Some Fields are Empty !*'

    if (Name === '' || CreatePassword === '' || Email === '' || Number === '') {
      this.setState({ErrorMessage: Required, Active: true})
    } else {
      localStorage.setItem('Name', Name)
      localStorage.setItem('CreatePassword', CreatePassword)
      localStorage.setItem('Email', Email)
      localStorage.setItem('Number', Number)
      localStorage.setItem('Profession', Profession)
      this.setState({Active: false})
      const {history} = this.props
      history.replace('/')
    }
  }

  render() {
    const {
      Name,
      CreatePassword,
      Email,
      Number,
      Profession,
      ErrorMessage,
      Active,
    } = this.state
    return (
      <div className="SignMainContainer">
        <form onSubmit={this.SubmitDetails} className="form-Container">
          <h1 className="form-heading">Sign Up</h1>
          <div className="Form-Submit-container">
            <label htmlFor="name" className="label-style-Sign">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="name"
              className="input-style-signin margin-botton-signIn"
              onChange={this.onChangeName}
              value={Name}
            />

            <label htmlFor="password" className="label-style-Sign">
              Create Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="password"
              className="input-style-signin margin-botton-signIn"
              onChange={this.onChangeCreatePassword}
              value={CreatePassword}
            />

            <label htmlFor="email" className="label-style-Sign">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="email"
              className="input-style-signin margin-botton-signIn"
              onChange={this.onChangeEmail}
              value={Email}
            />

            <label htmlFor="number" className="label-style-Sign">
              Number
            </label>
            <input
              id="number"
              type="number"
              placeholder="number"
              className="input-style-signin margin-botton-signIn"
              onChange={this.onChangeNumber}
              value={Number}
            />

            <label className="label-style-Sign" htmlFor="Profession">
              Profession
            </label>
            <select
              className="input-style-signin"
              onChange={this.onChangeProfession}
              value={Profession}
            >
              <option>Student</option>
              <option>Working</option>
              <option>Self Employed</option>
            </select>
            <p className="para-signIn">
              Already a member?{' '}
              <Link to="/">
                <span className="span-signIn">Logn in</span>
              </Link>
            </p>
          </div>
          <button className="button-sign-style" type="submit">
            Sign Up
          </button>
          {Active ? <p className="error-message-style">{ErrorMessage}</p> : ''}
        </form>
      </div>
    )
  }
}
export default Sign
