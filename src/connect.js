import React from 'react';
import PropTypes from 'prop-types';

const connect = (mapDataToProps, mapDoToProps) => ChildComponent => props => {
  class ContextAwareComponent extends React.Component {
    childProps = {
      ...props,
      do: this.context.do,
      is: this.context.is,
      ...(mapDataToProps ? mapDataToProps(this.context.data) : this.context.data),
      ...(mapDoToProps ? mapDoToProps(this.context.do) : {}),
    }
  
    static contextTypes = {
      is: PropTypes.func,
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