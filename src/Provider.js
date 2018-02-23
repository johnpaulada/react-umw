import React from "react";
import { createContext } from "react-broadcast";

export const MachineContext = createContext();

export class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.props.machine.addSubscriber((_, data) => {
      this.setState(state => ({
        data: { ...data }
      }));
    });
  }

  state = {
    data: this.props.machine.data,
    machine: this.props.machine
  };

  render() {
    return (
      <MachineContext.Provider value={this.state}>
        {this.props.children}
      </MachineContext.Provider>
    );
  }
}
