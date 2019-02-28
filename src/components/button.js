// Libs
import React from 'react'
import styled from 'styled-components'

const ActionButton = styled.button`
  margin-top: 5px;
  align-self: center;
  width: 100%;
  max-width: 500px;
  padding: 0.75rem 1.25rem;
  font-size: 1.25rem;
  line-height: 1.333333;
  border-radius: 0.3rem;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  color: #fff;
  background-color: #0275d8;
  border-color: #0275d8;
`
// Card component, renders passed card object
const Button = ({ action, text }) => {
  return <ActionButton onClick={() => action()}>{text}</ActionButton>
}

export default Button
