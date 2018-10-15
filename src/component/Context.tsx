import * as React from 'react';

// bring in interfaces and reducer
import * as Interfaces from './Interfaces';
import Reducer from './Reducer';

// load api data
import * as LoadData from './LoadData';

// this is an example of an object that we are declaring outside of the Provider class. gives us the same functionality as the state just declared somewhere else
// const store = {
//   name: 'Arthur Dent',
//   message: {
//     isShowing: false,
//     text: 'Default Message',
//     type: 'Default Type'
//   },
//   contacts: [],
//   dispatcher: (action: Interfaces.IAction) => {
//     this.setState((state: Interfaces.IState) => Reducer(state, action));
//   }
// };

// create new context object...must pass in undefined or you could declare an object (like the store above) to put your data into first then pass that in instead
// const Context = React.createContext(store);
// we use undefined here so we can use the state below
const Context = React.createContext(undefined);

export class Provider extends React.Component {
  // declare your state
  public state: Interfaces.IState = {
    name: 'Arthur Dent',
    // message object
    message: {
      isShowing: false,
      text: 'Default Message',
      type: 'Default Type'
    },
    // array to put data into from api call
    contacts: [],
    // the dispatcher is what you call to make changes to the state. you pass in an action (contains a type and a payload) that is then processed against the state for the changes
    dispatcher: action => {
      this.setState(state => Reducer(this.state, action));
    }
  };

  // lifecycle event, great place to load in data.
  async componentDidMount() {
    LoadData.ReadContacts(this.state);
  }

  public render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
