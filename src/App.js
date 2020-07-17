import React from 'react';
import MasterPage from './Component/MasterPage';
import ProfilePage from './Component/ProfilePage';
import LoginPage from './Component/LoginPage';
import SignupPage from './Component/SignupPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'antd/dist/antd.css';
import './Style/App.css';

class App extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/" component={MasterPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
