import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "./components/views/MainPage/MainPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import SignupPage from "./components/views/SignupPage/SignupPage";
import NavBar from "./components/views/NavBar/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/signup" component={SignupPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
