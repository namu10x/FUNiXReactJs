import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom'

class NhanVienChiTiet extends Component {
    
    render() {
        console.log(this.props.match);
        return (
            <div>
                <h2>NVCT</h2>
            </div>
        );
    }
}
// function NhanVienChiTiet() {
//     // We can use the `useParams` hook here to access
//     // the dynamic pieces of the URL.
//     let { id } = useParams();
  
//     return (
//       <div>
//         <h3>ID: {id}</h3>
//       </div>
//     );
//   }
export default NhanVienChiTiet;