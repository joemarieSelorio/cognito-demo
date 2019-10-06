import React, { Component } from "react";
import Confirmations from "./Components/Auth/Confirmation";
import SignUp from "./Components/Auth/SignUp";
import LogIn from "./Components/Auth/Login";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import ForgotPasswordVerification from "./Components/Auth/ForgotPasswordVerification";
import ChangePasswordConfirmation from "./Components/Auth/ChangePasswordConfirmation";
import { Auth } from "aws-amplify";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";

class App extends Component {
  state = {
    isAuthenticated: false,
    isAuthenticating: true,
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

  async componentDidMount() {
    //Load session obj in local storage
    try {
      const session = await Auth.currentSession();
      console.log(session);
      this.setAuthStatus(true);
      const user = await Auth.currentAuthenticatedUser();
      this.setUser(user);
    } catch (error) {
      console.log(error);
    }
    this.setState({ isAuthenticating: false });
  }

  render() {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    };
    return (
      !this.state.isAuthenticating && (
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
              <Route
                exact
                path="/forgotpassword"
                render={props => <ForgotPassword {...props} auth={authProps} />}
              />
              <Route
                exact
                path="/confirmChangePassword"
                render={props => (
                  <ChangePasswordConfirmation {...props} auth={authProps} />
                )}
              />
              <Route
                exact
                path="/forgotPasswordVerification"
                render={props => (
                  <ForgotPasswordVerification {...props} auth={authProps} />
                )}
              />
            </Switch>
          </BrowserRouter>
        </div>
      )
    );
  }
}

export default App;
