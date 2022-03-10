import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DieuHuongURL from "./router/DieuHuongURL";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
