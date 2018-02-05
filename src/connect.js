const { Component } =  require('react');
import PropTypes from 'prop-types';

const connect = (mapDataToProps, mapDoToProps) => ChildComponent => props => {
  class ContextAwareComponent extends Component {
    constructor(props) {
      super(props)

      this.childProps = Object.assign(
        {},
        props,
        mapDataToProps ? mapDataToProps(this.context.data) : this.context.data,
        mapDoToProps ? mapDoToProps(this.context.do) : {},
        {do: this.context.do}
      );
    }
  
    render() {
      return <ChildComponent {...this.childProps} />
    }
  }

  ContextAwareComponent.contextTypes = {
    do: PropTypes.func,
    data: PropTypes.object
  }

  return <ContextAwareComponent />
}

export default connect