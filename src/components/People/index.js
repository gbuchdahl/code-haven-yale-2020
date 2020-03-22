import React from 'react'
import PropTypes from 'prop-types'

const People = ({ gridItems }) => (
  <div className='columns is-multiline'>
    {gridItems.map(item => (
      <div key={item.image} className='column is-4' style={{ borderRadius: '5px' }}>
        <section className='section'>
          <p className='has-text-centered'>
            <img alt='' src={item.image} />
          </p>
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
