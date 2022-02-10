import React, { Component } from "react";
import { STAFFS } from "../shared/staffs";
import NhanVien from "./NhanVien";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
class Home extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="header"></div>
        <h3 className="tieuDeTrang">Trang Nhân Viên</h3>
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem>
            <Link to="/nhanvien">Nhân Viên</Link>
          </BreadcrumbItem>
        </Breadcrumb>
        
        <hr />
        <div className="row">
          {STAFFS.map((nhanVien, key) => {
            return (
              <NhanVien
              nhanVienID={nhanVien.id}
                image={nhanVien.image}
                name={nhanVien.name}
                department={nhanVien.department}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
