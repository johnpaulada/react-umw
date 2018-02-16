import React from 'react';
import PropTypes from 'prop-types';
import Store from './Store'

class Provider extends React.Component {
  constructor(props) {
    super(props)
    this.store = new Store({...this.props.machine.data})
    this.props.machine.addSubscriber((_, data) => {
      this.store.data = data
    })
  }

  static childContextTypes = {
    is: PropTypes.func,
    do: PropTypes.func,
    store: PropTypes.object
  }

  getChildContext() {
    return {
      is: this.props.machine.is,
      do: this.props.machine.do,
      store: this.store
    };
  }

  render() {
    return this.props.children
  }
}

export default Provider