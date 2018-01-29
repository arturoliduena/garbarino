import React from 'react';
import '../styles/App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Main from './Main'

/* App component */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="component-app">
        <Main></Main>
      </div>
    );
  }
}
export default App;