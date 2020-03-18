import React from 'react'

class Octi extends React.Component {
  render() {
    return (
      <article class="content">
        <section>
          <img class="main-image" src={this.props.octiCatLink} />
        </section>
        <div class="number">#{this.props.octiCatNumber}</div>
        <div class="image-name">{this.props.octiCatName}</div>
        <img class="bottom-icon" src={this.props.octiCatIcon} />
      </article>
    )
  }
}

export default Octi
