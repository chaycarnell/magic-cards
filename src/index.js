// Libraries
import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
// Containers
import MagicCards from './containers/magic_container'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body,html {
    padding: 0;
    margin: 0;
    font-family: "Helvetica", "Verdana", sans-serif;
    font-weight: 400;
    font-display: optional;
    color: #444;
  }
  #root {
    margin: 5px;
  }
`
class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <MagicCards />
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
