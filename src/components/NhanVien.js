import React, { Component } from "react";
import{BrowserRouter as Router, Link} from"react-router-dom"

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

export default NhanVien;
