import {BsFillCaretDownFill, BsFillCaretUpFill} from 'react-icons/bs'
import './index.css'

const ListItem = props => {
  const {Details} = props
  const {
    voting,
    director,
    genre,
    language,
    poster,
    title,
    stars,
    totalVoted,
    pageViews,
    releasedDate,
  } = Details

  return (
    <li className="Item-Container">
      <div className="Votes-Container">
        <BsFillCaretUpFill />
        <p className="">{voting}</p>
        <BsFillCaretDownFill />
        <p className="">Votes</p>
      </div>
      <img src={poster} alt={title} className="image-style" />
      <div className="Description-container">
        <h1 className="home-heading">{title}</h1>
        <p className="home-para">
          Genre: <span className="home-span-style">{genre}</span>
        </p>
        <p className="home-para">
          Director: <span className="home-span-style">{director}</span>
        </p>
        <p className="home-para">
          Starring: <span className="home-span-style">{stars}</span>
        </p>

        <div className="container-row">
          <p className="home-span-style">Mins</p>
          <hr />
          <p className="home-span-style">{language}</p>
          <hr />
          <p className="home-span-style">{releasedDate}</p>
        </div>
        <div className="container-rowD">
          <p className="home-span-style color-text">{pageViews} Views</p>
          <hr />
          <p className="home-span-style color-text">
            Voted by {totalVoted} People
          </p>
        </div>
      </div>
      <button className="list-button-style" type="button">
        Watch Trailer
      </button>
    </li>
  )
}
export default ListItem
