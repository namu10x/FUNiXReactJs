import React, { Component } from "react";
import {
  BrowserRouter as Router,  withRouter,
} from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import dateFormat from "dateformat";
import { STAFFS } from "../shared/staffs";
// --------presentation component--------
function HienThiAnh(props) {
  return (
    <div className="col-12 col-md-4 col-lg-3 profile-view-img">
      <img className="" src={props.image} alt={props.name} />
    </div>
  );
}
function HienThiThongTin(props) {
  return (
    <div className="col-12 col-md-8 col-lg-9">
        <ul>
            <li>
                <span className="title ">Họ và tên:</span>
                <span className="text ">{props.name}</span>
            </li>
            <li>
                <span className="title ">Ngày sinh:</span>
                <span className="text">{dateFormat(props.doB, "dd/mm/yyyy")}</span>
            </li>
            <li>
                <span className="title">Ngày vào công ty: </span>
                <span className="text">{dateFormat(props.startDate, "dd/mm/yyyy")}</span>
            </li>
            <li>
                <span className="title">Phòng ban: </span>
                <span className="text">{props.department.name}</span>
            </li>
            <li>
                <span className="title">Số ngày nghỉ còn lại:</span>
                <span className="text">{props.annualLeave}</span>
            </li>
            <li>
                <span className="title">Số ngày đã làm thêm: </span>
                <span className="text">{props.overTime}</span>
            </li>
        </ul>
    </div>
  );
}
// --------container component--------
class NhanVienChiTiet extends Component {
  render() {
    let a = STAFFS[parseInt(this.props.match.params.id)];
    return (
      <div className="container mt-5">
           <h3 className="tieuDeTrang">Nhân Viên Chi Tiết</h3>
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem>
            <Link to="/nhanvien">Nhân Viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>{a.name}</BreadcrumbItem>
        </Breadcrumb>
       
        <hr />

        <div className="row card-view">
          <HienThiAnh image={a.image} name={a.name} />
          <HienThiThongTin
            name={a.name}
            doB={a.doB}
            startDate={a.startDate}
            annualLeave={a.annualLeave}
            overTime={a.overTime}
            department={a.department}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(NhanVienChiTiet);
