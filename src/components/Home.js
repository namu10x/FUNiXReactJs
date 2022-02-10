import React, { Component } from "react";
import { STAFFS } from "../shared/staffs";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
//--------functionalComponent//--------
function NhanVien(props) {
  return (
    <div className="col-6 col-md-4 col-lg-2 ">
      <Link
        to={"/nhanvienchitiet/" + props.nhanVienID}
        className="profile-card"
      >
        <img className="profile-img" src={props.image} alt={props.name}></img>
        <h4 className="user-name mt-1 mb-0">{props.name}</h4>
        <div className="user-bio">{props.department.name}</div>
      </Link>
    </div>
  );
}
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
