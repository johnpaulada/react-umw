import React from "react";
import { subscribe } from "react-contextual";
import { MachineContext } from "./Provider";

const Consumer = MachineContext.Consumer;

const connect = () => ChildComponent => mainProps => {
  const Consumed = props => <ChildComponent {...mainProps} {...props.data} machine={props.machine} />

  return <Consumer>{Consumed}</Consumer>;
};

export default connect;
