// Write your JS code here

import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="home">
          <div className="home-description">
            <h1 className="main-heading">Cloths That Get YOU Noticed</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="cloths that get you noticed"
              className="cloth-imges"
            />
            <p className="paragraph">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are. So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <button className="button">Shop Now</button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="cloths that get you noticed"
            className="cloth-img"
          />
        </div>
      </div>
    )
  }
}
export default Home
