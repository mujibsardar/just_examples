import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./store/actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./containers/Homepage";
import Register from "./containers/Auth/Register";
import Login from "./containers/Auth/Login";
import AddExample from "./containers/Examples/AddExample";
import PrivateRoute from "./containers/Private-Route/PrivateRoute";
import Dashboard from "./containers/Dashboard";
import Search from "./components/Search";
import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Homepage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/add/example" component={AddExample} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Footer/>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
