import React from 'react'
import config from '../../../config'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          <p>
            {config.copyright}
          </p>
          <p>Add us on <a href='https://facebook.com/codehavenyale'>Facebook</a>, and check us out on <a href='https://medium.com/code-haven'>Medium!</a></p>
          <p>Powered by <a href='https://www.gatsbyjs.org'>Gatsby</a> and <a href='https://www.netlifycms.org'>Netlify CMS</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
