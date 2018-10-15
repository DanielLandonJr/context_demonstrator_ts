// biggest difference is you have to import * from react
import * as React from 'react';
import * as Context from './component/Context';
import TestComp from './component/TestComp';
import Message from './component/Message';

class App extends React.Component {
  public render() {
    return (
      // add the provider to the entire application
      <Context.Provider>
        {/* add the consumer so we can access the data */}
        {/* nothing can go between Consumer and the function dec below..will get state errorsa */}
        <Context.Consumer>
          {value => {
            // add another return statement
            return (
              <div className="App">
                {/* access values from the state. is the message showing? */}
                {value.message.isShowing ? <Message /> : null}
                <TestComp />
              </div>
            );
          }}
        </Context.Consumer>
      </Context.Provider>
    );
  }
}

export default App;
