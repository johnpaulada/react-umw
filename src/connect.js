import React from 'react';
import PropTypes from 'prop-types';

const connect = (mapDataToProps, mapDoToProps) => ChildComponent => props => {
  class ContextAwareComponent extends React.Component {
    componentDidMount() {
      this.context.store.subscribe(() => this.forceUpdate())
    }

    buildProps = () => ({
      ...props,
      do: this.context.do,
      is: this.context.is,
      ...(mapDataToProps ? mapDataToProps(this.context.store.data) : this.context.store.data),
      ...(mapDoToProps ? mapDoToProps(this.context.do) : {}),
    })

    componentWillUpdate(nextProps, nextState) {
      this.childProps = this.buildProps()
    }

    childProps = this.buildProps()
  
    static contextTypes = {
      is: PropTypes.func,
      do: PropTypes.func,
      store: PropTypes.object
    }

    render() {
      return <ChildComponent {...this.childProps} />
    }
  }

  return <ContextAwareComponent />
}

export default connect