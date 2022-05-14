//styles
import { Wrapper } from './Button.styles'
import React from 'react'
import PropTypes from 'prop-types'
const Button = ({ text, callback }) => {
  return (
    <Wrapper type='button' onClick={callback}>
      {text}
    </Wrapper>
  )
}
Button.propTypes = {
  test: PropTypes.string,
  callback: PropTypes.func,
}
export default Button
