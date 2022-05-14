//styles
import { Image, Wrapper } from './Actor.styles'
import React from 'react'
import PropTypes from 'prop-types'

const Actor = ({ name, character, imgeUrl }) => {
  return (
    <Wrapper>
      <Image src={imgeUrl} alt='actor-thumb' />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  )
}
Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imgeUrl: PropTypes.string,
}

export default Actor
