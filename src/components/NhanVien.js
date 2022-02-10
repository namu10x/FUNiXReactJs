import React, { Component } from "react";
import{BrowserRouter as Router, Link} from"react-router-dom"

function NhanVien(props) {
  return (
    <div className="col-6 col-md-4 col-lg-2 ">
        <Link to={"/nhanvienchitiet/"+props.nhanVienID} className="profile-card">
          <img className="profile-img" src={props.image} alt={props.name}></img>
          <h4 className="user-name mt-1 mb-0">{props.name}</h4>
          <div className="user-bio">{props.department.name}</div>
        </Link>
      </div>
  );
}

export default NhanVien;
