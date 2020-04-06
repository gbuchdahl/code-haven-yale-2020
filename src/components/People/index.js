import React from 'react'
import PropTypes from 'prop-types'

const People = ({ gridItems }) => (
  <div className='columns is-multiline'>
    {gridItems.map(item => (
      <div key={item.image} className='column is-one-fifth has-text-centered' >
        <div className='has-text-centered'>
          <div className='container is-128x128 image box'>
            <img alt='' className='is-rounded' src={item.image} />
          </div>
          <h2 className='is-size-5 has-text-weight-bold'>{item.name}</h2>
          <p>{item.title}</p>
        </div>
      </div>
    ))}
    {/* {gridItems.map(item => (
      <div className='column is-one-fifth'>
        <div className="card">
          <div className="card-image">
            <figure className="container is-128x128 image box">
              <img className='is-rounded' src={item.image} alt="Placeholder image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content has-text-centered">
                <p className="title is-6">{item.name}</p>
                <p className="subtitle is-6">{item.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))} */}
  </div>
)

People.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
}

export default People
