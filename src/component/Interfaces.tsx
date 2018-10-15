// interfaces for the MessageChannel, action and state

import * as eNums from './Enumerations';

export interface IMessage {
  isShowing: boolean;
  text: string;
  type: string;
}

export interface IAction {
  payload: any;
  type: eNums.Actions;
}

export interface IState {
  name: string;
  message: IMessage;
  contacts: Array<any>;
  dispatcher(action: IAction): void;
}
