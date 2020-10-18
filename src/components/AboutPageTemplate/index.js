import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import People from '../People'
import stickerGiant from '../../assets/img/stickergiant.svg'
import googleLogo from '../../assets/img/igniteCS+logo.png'
import dwighthall from '../../assets/img/dwighthall.jpg'
import seas from '../../assets/img/seas.jpg'
import pathways from '../../assets/img/yalepathwaystoscience.jpg'
import ycc from '../../assets/img/ycc.png'


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
      <section className='section section--gradient has-text-centered'>
        <h1 className='title is-3'>Sponsors</h1>
        <div className='columns'>
          <div className='is-offset-one-quarter is-half column'>
            <div className='columns is-vcentered is-centered is-multiline'>
              <div className='column is-4 is-6-mobile'>
                <a className='image box is-128x128' href="https://www.ycc.yale.edu/about-uofc"><img src={ycc}></img></a>
              </div>
              <div className='column is-4 is-6-mobile'>
                <a className='image box is-128x128' href='https://dwighthall.org/'><img src={dwighthall}></img></a>
              </div>
              <div className='column is-4 is-6-mobile'>
                <a className='image box is-128x128' href='https://seas.yale.edu/'><img src={seas}></img></a>
              </div>
              <div className='column is-4 is-6-mobile'>
                <a className='image box is-128x128' href='https://onha.yale.edu/pathways-science'><img src={pathways}></img></a>
              </div>
              <div className='column is-4 is-6-mobile'>
                <a className='image box is-128x128' href='https://stickergiant.com'><img className='pt-3' src={stickerGiant}></img></a>
              </div>
              <div className='column is-4 is-6-mobile'>
                <a className='image box is-128x128' href="https://sites.google.com/view/ignitecs/home"><img src={googleLogo}></img></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  people: PropTypes.array,
}

export default AboutPageTemplate
