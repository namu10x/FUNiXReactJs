import React, { Component } from "react";
// import Main from './components/MainComponent';
import { STAFFS } from "./shared/staffs";
import "./App.css";
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { ConfigureStore } from './redux/configureStore';
import StaffListComponent from "./components/StaffListComponent";
// const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      // <BrowserRouter>
      <div>
        <StaffListComponent staffs={STAFFS} /> //truyen du lieu tu tep staff qua props
      </div>
      // </BrowserRouter>
      // </Provider>
    );
  }
}

export default App;
