import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'next/link'

import withRoot from '../../../src/withRoot'

const About = (props) => {
  const { title, description } = props
  return (
    <div>
      <Helmet
        title={`${title} | Hello next.js!`}
        meta={[
          { property: 'og:title', content: title },
          { property: 'og:description', content: description },
        ]}
      />
      About the World
      <Link href={{ pathname: '/' }}><a>Home</a></Link>
    </div>
  )
}

About.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default withRoot((About))
