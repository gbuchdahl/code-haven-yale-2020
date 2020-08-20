import React from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import favicon from '../../assets/img/favicon.ico'

const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
  internal,
}) => (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <div className="is-marginless is-fluid container has-text-centered has-background-warning is-fullwidth">
        <h3 className="is-size-4 banner pt-3 is-fluid has-text-weight-semibold">Applications open for '20-'21 classrooms: <a href="https://forms.gle/1NCZpoCmFq9k34iU9">apply here!</a> </h3>
      </div>
      <section className='hero-home is-primary is-bold is-small'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <div className="columns">
                    <div className="column is-2 is-offset-5 box">
                      <img className='' src={favicon}></img>
                    </div>
                  </div>
                  <h1 className='title is-size-1 has-text-centered'>
                    {title}
                  </h1>
                  <p className='control has-text-centered'>
                    <Link
                      className='button is-large has-text-weight-bold is-primary inverted is-rounded'
                      to='/contact'>
                      Contact Us!
                      </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>

          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                  <div>
                    <h3 className='has-text-weight-semibold is-size-2'>
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                  <Offerings gridItems={offerings.blurbs} />
                  <h2 className='has-text-weight-semibold is-size-2'>What people are saying</h2>
                  <Testimonials testimonials={testimonials} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div dangerouslySetInnerHTML={{ __html: internal }} />
    </div>
  )

HomePageTemplate.propTypes = {
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
}

export default HomePageTemplate
