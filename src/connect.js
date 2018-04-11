import React from "react";
import { MachineContext } from "./Provider";

const Consumer = MachineContext.Consumer;

const connect = () => ChildComponent => mainProps => {
  return <Consumer>{props => (
    <ChildComponent {...mainProps} {...props.data} machine={props.machine} />
  )}</Consumer>;
};

export default connect;
