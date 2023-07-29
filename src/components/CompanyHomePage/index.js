import {Component} from 'react'
import './index.css'
import ListItem from '../ListItem'
import Header from '../Header'

class CompanyHomePage extends Component {
  state = {DataAchived: []}

  // MovieName:'',DirectorName:[],Stars:[],Genre:[],Language:'',poster:''

  componentDidMount() {
    this.PostGetApi()
  }

  PostGetApi = async () => {
    const category = 'movies'
    const language = 'kannada'
    const genre = 'all'
    const sort = 'voting'
    const Details = {category, language, genre, sort}
    const api = `https://hoblist.com/api/movieList`

    const options = {
      method: 'POST',
      body: JSON.stringify(Details),
      headers: {'Content-type': 'application/json; charset=UTF-8'},
    }
    const response = await fetch(api, options)
    const Data = await response.json()
    console.log(Data)
    if (response.ok) {
      this.getDetails(Data.result)
    }
  }

  getDetails = Dataretrived => {
    console.log(Dataretrived)

    this.setState({DataAchived: Dataretrived})
  }

  render() {
    const {DataAchived} = this.state
    return (
      <>
        <Header />
        <div className="Home-Main-Container">
          <ul className="ul-style">
            {DataAchived.map(eachItem => (
              <ListItem Details={eachItem} />
            ))}
          </ul>
        </div>
      </>
    )
  }
}
export default CompanyHomePage
