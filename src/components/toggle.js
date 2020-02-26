import React, { Component } from 'react'

export default class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = { on: false }
  }

  toggle = () => {
    this.setState({
      on: !this.state.on,
    })
  }

  render() {
    const { render } = this.props

    return (
      <>
        {render({
          on: this.state.on,
          toggle: this.toggle,
        })}
      </>
    )
  }
}
