# react-umw
[Unlimited Machine Works](https://unlimited-machine-works.surge.sh/) React bindings.

[![forthebadge](http://forthebadge.com/images/badges/built-with-resentment.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)

## Contents
- [Example code](#example-code)
- [How to import](#how-to-import)
- [How to use](#how-to-use)
- [Example Apps](#example-apps)
- [Roadmap](#roadmap)
- [License](#license)

## Example code

### Using the Provider

![Using the Provider](./example-1.png)

### Using the data and methods as props

![Using the data and methods as props](./example-2.png)

## How to import
1. Run `yarn add react-umw`.
2. Import it like this: `import { connect, Provider } from 'react-umw';`.

## How to use
The flow is somehow similar to Redux, but instead of creating a store, you create a machine.

Read the [Working With Machines](https://unlimited-machine-works.surge.sh/docs/machines.html) section of the UMW docs to learn how to build a machine.

Then like Redux, you add give that machine to a `Provider`.

```js
// App.js
// ... Imports here
import { Provider } from 'react-umw'
const UMW = require('unlimited-machine-works')

class App extends Component {
  constructor(props) {
    super(props)

    // Initial data contained in the machine
    const initialData = {
      speed: 0
    }

    // Machine configuration
    const machineConfig = {
      'IDLE': {
        'MOVE': {
          to: 'MOVING',
          action: (data, args) => {
            return {...data, speed: 1}
          }
        }
      },
      'MOVING': {
        'ACCELERATE': {
          to: 'MOVING',
          action: (data, args) => {
            return {...data, speed: data.speed + 1}
          }
        },
        'STOP': {
          to: 'IDLE',
          action: (data, args) => {
            return {...data, speed: 0}
          }
        }
      }
    }

    // Creates a machine with the given data and config
    this.machine = UMW.summon(initialData, machineConfig)
  }

  render() {
    return (
      <div className="App">
        <Provider machine={this.machine}>
          <Body />
        </Provider>
      </div>
    );
  }
}

export default App
```

To use the machine we'll need to use the `connect()` function.

```js
// Body.js
// ... Imports
import { connect } from 'react-umw'

class Body extends Component {
  move = () => this.props.do('MOVE')
  accelerate = () => this.props.do('ACCELERATE')

  render() {
    return (
      <p className="App-intro">
        {this.props.speed}
        <button onClick={this.move}>Move</button>
        <button onClick={this.accelerate}>Accelerate</button>
      </p>
    );
  }
}

export default connect()(Body);
```

The connect function accepts a `mapDataToProps` and `mapDoToProps` functions, similar to their Redux counterparts. If none is provided, it will provide all the data as props.
You'll get the `do` function as props, which is the `do` function of the given machine.
You'll also get the `is` function which checks if the machine is in that state.

## Example Apps
- [NicNacNope](https://github.com/johnpaulada/nicnacnope) - A food-themed tic-tac-toe game.

## Roadmap
- [ ] Run diff and run setState only when something actually changed.

## License
MIT