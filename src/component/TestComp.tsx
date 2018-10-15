// this componet is a bit busy..could break it down to smaller compoents

import * as React from 'react';
import { Consumer } from './Context';
// bring in the enumerations and interfaces
import * as Interfaces from './Interfaces';
import * as eNums from './Enumerations';
import { workers } from 'cluster';

export default class TestComp extends React.Component {
  public render() {
    return (
      // make consumer avaialbe to component
      <Consumer>
        {value => {
          return (
            <div>
              <button
                onClick={() => {
                  // update the name
                  value.dispatcher({
                    type: eNums.Actions.UPDATE_NAME,
                    payload: 'Zaphod Beeblebrox'
                  });

                  // need a small pause here..not sure why
                  setTimeout(() => {
                    // create a new message
                    let newMsg: Interfaces.IMessage = {
                      text: 'Name Change To Zaphod Beeblebrox',
                      type: eNums.MessageTypes.INFORMATION,
                      isShowing: true
                    };

                    // dispatch new message for display
                    value.dispatcher({
                      type: eNums.Actions.APPLICATION_MESSAGE,
                      payload: newMsg
                    });
                  }, 250);
                }}
              >
                Change Name To Zaphod Beeblebrox
              </button>

              <p>
                <strong>{value.name}</strong>
              </p>

              <button
                onClick={() => {
                  // update the name
                  value.dispatcher({
                    type: eNums.Actions.UPDATE_NAME,
                    payload: 'Arthur Dent'
                  });

                  setTimeout(() => {
                    // create a new message
                    let newMsg: Interfaces.IMessage = {
                      text: 'Name Change To Arthur Dent',
                      type: eNums.MessageTypes.INFORMATION,
                      isShowing: true
                    };

                    // // dispatch new message for display
                    value.dispatcher({
                      type: eNums.Actions.APPLICATION_MESSAGE,
                      payload: newMsg
                    });
                  }, 250);
                }}
              >
                Change Name To Arthur Dent
              </button>

              <p>Data below comes from jsonplaceholder...api call</p>

              <ul style={{ listStyle: 'none' }}>
                {/* below will loop through the contacts and output the data */}
                {value.contacts.map(contact => (
                  <li>
                    ID: {contact.id}, NAME: {contact.name}, EMAIL:{' '}
                    {contact.email}
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
