import React, { Component } from "react";
import Confirmations from "./Components/Auth/Confirmation";
import SignUp from "./Components/Auth/SignUp";
import LogIn from "./Components/Auth/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";

class App extends Component {
  state = {
    isAuthenticated: false,
    user: null
  };

  setAuthStatus = authenticated => {
    this.setState({
      isAuthenticated: authenticated
    });
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    };
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/confirmations"
              render={props => <Confirmations {...props} auth={authProps} />}
            />
            <Route
              exact
              path="/"
              render={props => <LogIn {...props} auth={authProps} />}
            />
            <Route
              exact
              path="/signUp"
              render={props => <SignUp {...props} auth={authProps} />}
            />
            <Route
              exact
              path="/home"
              render={props => <Home {...props} auth={authProps} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
