import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo_white.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import pinterest from '../img/social/pinterest-round.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
              <div className="columns">
                <div className="column is-4">
                <section className="menu">
                    <ul className="menu-list">
                      <li><Link to="/" className="navbar-item">Home</Link></li>
                      <li><Link className="navbar-item" to="/about">About</Link></li>
                      <li><Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                    <Link className="navbar-item" to="/contact/examples">
                      Form Examples
                    </Link>
                    </li>
                    <li><a
                      className="navbar-item"
                      href="/admin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Admin
                    </a></li>
                    </ul>
                  </section>
                </div>
                <div className="column is-4">
                <section>
                  <ul className="menu-list">
                  <li className="menu-list">Icons made by: </li>
                  <li>
                    <Link className="navbar-item" to="https://www.flaticon.com/authors/freepik">
                      Freepik
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="https://www.flaticon.com/authors/mynamepong">
                      mynamepong
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="https://www.flaticon.com/authors/mynamepong">
                      photo3idea_studio
                    </Link>
                  </li>
                  <li className="menu-list">from: </li>
                  <li>
                    <Link className="navbar-item" to="http://www.flaticon.com/">
                    www.flaticon.com
                    </Link>
                  </li>
                  </ul>
                </section>
                </div>
                <div className="column is-4 social">
                
                  <a title="facebook" href="https://www.facebook.com/Codo-Collaborative-Design-Office-362248647552339/">
                    <img 
                      src={facebook}
                      alt="Facebook"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                <a title="instagram" href="https://www.instagram.com/collaborativedesignoffice/">
                  <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="pinterest" href="https://pin.it/22htbaxdfltqze">
                  <img
                  src={pinterest}
                  alt="Pinterest"
                  style={{ width: '1em', height: '1em' }}
                  />
                </a>
                </div>
              </div>
            </div>
        </div>
      </footer>
    )
  }
}

export default Footer
