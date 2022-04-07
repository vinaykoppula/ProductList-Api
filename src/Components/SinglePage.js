import React from 'react'
import {Link} from 'react-router-dom'

const SinglePage = () => {
  return (
    <div>
        <h2>You are in SinglePage View</h2>
        <Link className='Link' to='/'>Back to Home</Link>
    </div>
  )
}

export default SinglePage