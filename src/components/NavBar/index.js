import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'
import favicon from '../../assets/img/favicon.ico'

const NavBar = ({ toggleNavbar, isActive }) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            {/* <strong>Code Haven Yale</strong> */}
            <img src={favicon}></img>
          </Link>
          <button
            className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>

          <div className='navbar-end'>
            <SearchBox searchIndex={data.siteSearchIndex.index} />
            <Link className='navbar-item' to='/about'>
              About Us
            </Link>

            {/* <Link className='navbar-item' to='/pricing'>
              Pricing
            </Link> */}
            <Link className='navbar-item' to='/blog'>
              Blog
            </Link>
            <Link
              className='navbar-item'
              to='/contact'>
              Contact Us
            </Link>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <div className='navbar-item button is-primary has-text-white'>
                    <a target='_blank' href='https://codehavenyale.github.io'>Curriculum</a>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav >
    )}
  />
)

export default NavBar
