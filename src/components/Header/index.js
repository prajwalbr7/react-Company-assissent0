import {Component} from 'react'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

class Header extends Component {
  companyInformation = () => {}

  render() {
    return (
      <div className="Header-Container">
        <Popup
          trigger={
            <h1 className="header-heading" onClick={this.companyInformation}>
              Company Information
            </h1>
          }
          position="bottom"
        >
          <div className="">
            <p className="">Company: Geeksynergy Technologies Pvt Ltd</p>
            <p className="">Address: Sanjayanagar, Bengaluru-56</p>
            <p className="">Phone: XXXXXXXXX09</p>
            <p className="">Email: XXXXXX@gmail.com</p>
          </div>
        </Popup>
        <Link to="/">
          <button className="button-style" type="button">
            Logout
          </button>
        </Link>
      </div>
    )
  }
}
export default Header
