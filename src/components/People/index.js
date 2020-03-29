import React from 'react'
import PropTypes from 'prop-types'

const People = ({ gridItems }) => (
  <div className='columns is-multiline'>
    {gridItems.map(item => (
      <div key={item.image} className='column is-3 is-half-mobile has-text-centered' style={{ borderRadius: '5px' }}>
        <section className='section has-text-centered'>
          <div className='container is-128x128 image box'>
            {/* <p className='box image is-128x128'> */}
            <img className='is-rounded' alt='' src={item.image} />
            {/* </p> */}
          </div>
          <h2 className='is-size-5 has-text-weight-bold'>{item.name}</h2>
          <p>{item.title}</p>
        </section>
      </div>
    ))}
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
