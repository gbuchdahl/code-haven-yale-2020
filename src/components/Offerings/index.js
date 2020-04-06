import React from 'react'
import PropTypes from 'prop-types'

const Offerings = ({ gridItems }) => (
  <div className='columns is-multiline'>
    {gridItems.map(item => (
      <div key={item.image} className='column is-6' style={{ borderRadius: '5px' }}>
        <section className='section'>
          <p className='has-text-centered box'>
            <img alt='' src={item.image} />
          </p>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
    {/* {gridItems.map(item => (
      <div className="column is-6">
        <div className="card">
          <div className="card-image">
            <figure className="image">
              <img src={item.image} alt="Placeholder image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6">@johnsmith</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))} */}
  </div>
)

Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
      title: PropTypes.string,
    })
  ),
}

export default Offerings
