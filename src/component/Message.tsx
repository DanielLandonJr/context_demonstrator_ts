import * as React from 'react';

// bring in consumer to get to state, and enums/interfaces
import { Consumer } from './Context';
import * as eNums from './Enumerations';
import * as Interfaces from './Interfaces';

const AppMessage = () => {
  return (
    // consumer for data access
    <Consumer>
      {value => {
        // we want the emssage to disappear after four seconds, use setTimeout
        setTimeout(() => {
          // generate new blank message to clear the fields
          let newMsg: Interfaces.IMessage = {
            text: '',
            type: eNums.MessageTypes.NULL,
            isShowing: false
          };
          // send new MessageChannel[Symbol]..basically hiding the component
          value.dispatcher({
            type: eNums.Actions.APPLICATION_MESSAGE,
            payload: newMsg
          });
        }, 4000);
        return (
          <div>
            {/* display message content */}
            <h2>Message: {value.message.text}</h2>
            <h3>Type: {value.message.type}</h3>
            <hr />
          </div>
        );
      }}
    </Consumer>
  );
};

export default AppMessage;
