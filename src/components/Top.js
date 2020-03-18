import React, { Component } from 'react'
import GitLogo from '../images/GitLogo.png'

export class Top extends Component {
  render() {
    return (
      <header>
        <img class="logo" src={GitLogo} />
        <h3 class="logo-name">Octodex</h3>
        <ul>
          <li class="the-home">Home</li>
          <li class="FAQ">FAQ</li>
        </ul>
        <ul class="right-list">
          <li class="twitter">
            <a href="https://twitter.com/githubdesign">Follow us on Twitter</a>
          </li>
          <li class="link">
            <a href="https://github.com/">Back to GitHub.com</a>
          </li>
        </ul>
      </header>
    )
  }
}

export default Top
