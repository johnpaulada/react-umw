import { Component } from 'react';
import PropTypes from 'prop-types';

class Provider extends Component {
  constructor(props) {
    super(props)
    this.props.machine.addSubscriber((_, data) => {
      this.setState(_ => ({data}))
    })
  }

  static childContextTypes = {
    do: PropTypes.func,
    data: PropTypes.object
  }

  state = {data: {...this.props.machine.data}}

  getChildContext() {
    return {
      do: this.props.machine.do,
      data: this.state.data
    };
  }

  render() {
    return this.props.children
  }
}

export default Provider