import React from 'react';
import FeedPage from './Component/FeedPage';
import MyProfilePage from './Component/MyProfilePage';
import FriendProfilePage from './Component/FriendProfilePage';
import LoginPage from './Component/LoginPage';
import SignupPage from './Component/SignupPage';
import Header from './Component/Header'
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
          <Route path="/profile" component={MyProfilePage} />
          <Route path="/friendprofile" component={FriendProfilePage} />
          <Route path="/" component={FeedPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
