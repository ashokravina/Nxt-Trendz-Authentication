// Write your JS code here

import './index.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
      <navbar className="navbar-sm">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo"
          />
          <button className="btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-img"
            />
          </button>
        </div>
        <ul className="header-card">
          <Link to="/" className="list">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="nav-img"
            />
          </Link>
          <Link to="/products" className="list">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="nav-img"
            />
          </Link>
          <Link to="/cart" className="list">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="nav-img"
            />
          </Link>
        </ul>
      </navbar>
      <navbar className="navbar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo"
        />

        <ul className="list-container">
          <Link to="/" className="list">
            Home
          </Link>
          <Link to="/products" className="list">
            Products
          </Link>
          <Link to="/cart" className="list">
            Cart
          </Link>
          <Link to="/cart" className="list">
            <button className="button">Logout</button>
          </Link>
        </ul>
      </navbar>
    </>
  )
}
export default Header
