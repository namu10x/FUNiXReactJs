import React, { Component } from "react";
import { STAFFS } from "./shared/staffs";
import "./App.css";
import StaffListComponent from "./components/StaffListComponent";

class App extends Component {
  render() {
    return (
      
      <div>
        {/* //truyen du lieu tu tep staff qua props */}
        <StaffListComponent staffs={STAFFS} /> 
      </div>
    
    );
  }
}

export default App;
