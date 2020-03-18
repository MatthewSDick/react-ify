import React, { Component } from 'react'
import Top from './components/Top'
import Octis from './components/Octis'
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (
      <>
        <Top />
        <Octis />
        <div class="div-test"></div>
        <Footer />
      </>
    )
  }
}

export default App
