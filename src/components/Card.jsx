import React from 'react'
import PropTypes from 'prop-types'

const Card = (props) => {
  const { name, email, id } = props;
  return (
    <div className='tc bg-light-pink dib br3 pa3 ma2 grow bu2 shadow-5'>
      <img alt='cat' src={`https://robohash.org/${id}?set=set4&size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,  
}

export default Card


