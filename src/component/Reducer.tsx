// reducer is where the real work happens..changes to the state
import * as eNums from './Enumerations';
import * as Interfaces from './Interfaces';

const Reducer = (state, action: Interfaces.IAction) => {
  // switch case statement...looking at the action. what are we wanting to do
  switch (action.type) {
    case eNums.Actions.APPLICATION_MESSAGE:
      return {
        ...state,
        message: action.payload
      };
    case eNums.Actions.UPDATE_NAME:
      return {
        ...state,
        name: action.payload
      };
    case eNums.Actions.READ_CONTACTS:
      // console.log(action.payload);
      // break;
      return {
        ...state,
        contacts: action.payload
      };
    default:
      return state;
  }
};

export default Reducer;
