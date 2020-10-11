import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import People from '../People'
import stickerGiant from '../../assets/img/stickergiant.svg'
import googleLogo from '../../assets/img/igniteCS+logo.png'

const AboutPageTemplate = ({ title, content, contentComponent, people }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className='hero hero-about is-primary is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title is-1'>
                    {title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <PageContent className='content' content={content} />
                <People gridItems={people} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section section--gradient has-text-centered '>
        <h1 className='title is-3'>Sponsors</h1>
        <div className='columns is-vcentered'>
          <div className='column is-3 is-offset-3'>
            <img src={googleLogo}></img>
          </div>
          <div className='column is-3'>
            <img src={stickerGiant}></img>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  people: PropTypes.array,
}

export default AboutPageTemplate
