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
    is: PropTypes.func,
    do: PropTypes.func,
    data: PropTypes.object
  }

  state = {data: {...this.props.machine.data}}

  getChildContext() {
    return {
      is: this.props.machine.is,
      do: this.props.machine.do,
      data: this.state.data
    };
  }

  render() {
    return this.props.children
  }
}

export default Provider