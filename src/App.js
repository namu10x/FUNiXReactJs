import React, { Component } from "react";
// import { STAFFS } from "./shared/staffs";
import "./App.css";
// import StaffListComponent from "./components/StaffListComponent";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import DieuHuongURL from "./router/DieuHuongURL";
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Header/>
        <DieuHuongURL/>
        <Footer/>
      </div>
         </Router>
    
    );
  }
}

export default App;
