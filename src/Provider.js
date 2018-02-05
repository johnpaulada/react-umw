const React = require('react')
const Component = React.Component;
import PropTypes from 'prop-types';

class Provider extends Component {
  constructor(props) {
    super(props)
    this.state = {data: Object.assign({}, this.props.machine.data)}
    this.props.machine.addSubscriber((_, data) => {
      this.setState(_ => ({data}))
    })
  }

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

Provider.childContextTypes = {
  do: PropTypes.func,
  data: PropTypes.object
}

export default Provider