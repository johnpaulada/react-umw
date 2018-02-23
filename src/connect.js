import React from "react";
import { subscribe } from "react-contextual";
import { MachineContext } from "./Provider";

const connect = () => ChildComponent => mainProps => {
  const ConnectedComponent = subscribe([MachineContext], data => data)(
    props => {
      return (
        <ChildComponent
          {...mainProps}
          {...props.data}
          machine={props.machine}
        />
      );
    }
  );

  return <ConnectedComponent />;
};

export default connect;
