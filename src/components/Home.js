import React, { Component } from 'react';
import StaffDetailsComponent from './StaffDetailsComponent';
import { STAFFS } from '../shared/staffs';
import{BrowserRouter as Router, Link} from"react-router-dom"

// import NhanVien from './NhanVien';
function NhanVien(props) {
    return (
      <div className="col-6 col-md-4 col-lg-2 ">
          <Link to={"/nhanvienchitiet/"+props.nhanVienID} className="nhanvien">
            <img src={props.image} alt={props.name}></img>
            <div className="chu">{props.name}</div>
          </Link>
        </div>
    );
  }
class Home extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='header'></div>
                <div className='row'>
                    {
                       STAFFS.map((nhanVien, key) => {
                           return(
                               <NhanVien staff={nhanVien} key={key} nhanVienID={nhanVien.id} image={nhanVien.image} name={nhanVien.name}/>
                           )
                       })
                    }
                </div>       
            </div>
        );
    }
}

export default Home;