import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DieuHuongURL from "./router/DieuHuongURL";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="searchForm">
            <div className="container">
              <div className="row"></div>
            </div>
          </div>
          <DieuHuongURL />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
