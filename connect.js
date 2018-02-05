import React, { Component } from 'react';
import PropTypes from 'prop-types';

const connect = (mapDataToProps, mapDoToProps) => ChildComponent => props => {
  class ContextAwareComponent extends Component {
    childProps = {
      ...props,
      do: this.context.do,
      ...(mapDataToProps ? mapDataToProps(this.context.data) : this.context.data),
      ...(mapDoToProps ? mapDoToProps(this.context.do) : {}),
    }
  
    static contextTypes = {
      do: PropTypes.func,
      data: PropTypes.object
    }

    render() {
      return <ChildComponent {...this.childProps} />
    }
  }

  return <ContextAwareComponent />
}

export default connect