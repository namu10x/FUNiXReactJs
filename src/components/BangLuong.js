import React, { Component } from "react";
import { STAFFS } from "../shared/staffs";
function HienThiPhongBan(props) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className=" card-view">
        <h3>{props.name}</h3>
        <p>Mã nhân viên: {props.id}</p>
        <p>Hệ số lương: {props.salaryScale}</p>
        <p>Số giờ làm thêm: {props.overTime}</p>
        <p>Lương: {(props.overTime*200000+3000000*props.salaryScale).toLocaleString()}</p>
      </div>
    </div>
  );
}

class PhongBan extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5">
          <h3 className="tieuDeTrang">Bảng Lương</h3>
          <hr/>
          <div className="row">
            {STAFFS.map((element, index) => {
              return (
                <HienThiPhongBan
                  name={element.name}
                  id={element.id}
                  overTime={element.overTime}
                  salaryScale={element.salaryScale}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default PhongBan;
