// here is where we are getting our data with async/await using jsonplacehoder site

// context api does not care where the data comes from so we seperate it here...this is where we get the data so its seperate for maintainability(?)

import axios from 'axios';
import * as eNums from './Enumerations';
import * as Interfaces from './Interfaces';

export async function ReadContacts(state: Interfaces.IState) {
  // we are using async/await for api call
  // using try/catch so we can catch any errors
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    // add data to the state
    state.dispatcher({
      type: eNums.Actions.READ_CONTACTS,
      payload: response.data
    });

    const newMsg = {
      text: 'Data Loaded from jsonplaceholder',
      type: eNums.MessageTypes.INFORMATION,
      isShowing: true
    };
    state.dispatcher({
      type: eNums.Actions.APPLICATION_MESSAGE,
      payload: newMsg
    });
  } catch (error) {
    // just console the error, we could send it to the message state, would take a bit more code to make it work correctly
    console.log(error);
  }
}
