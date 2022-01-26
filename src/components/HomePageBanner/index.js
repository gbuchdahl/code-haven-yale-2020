import React from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import favicon from '../../assets/img/favicon.ico'

const HomePageBanner = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
  internal,
  banner_text,
  link
}) => (
  <div style={{backgroundColor: '#e9a416'}}>
  <p className='control has-text-centered'>
    <a
      className='button is-large has-text-weight-bold is-primary inverted is-rounded'
      href='https://forms.gle/Z7DsQSs1wgN3qjjF9'>
      Apply to Have Us in Your Class for Spring!
        </a>
  </p>
  </div>
)

HomePageBanner.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
  internal: PropTypes.string,
  banner_text: PropTypes.string,
  link: PropTypes.string
}

export default HomePageBanner
