import React, { Component } from "react";
import { DEPARTMENTS } from "../shared/staffs";
// --------presentational component--------
function HienThiPhongBan(props) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card-view">
        
          <h2>{props.name}</h2>
          <p>Số lượng nhân viên: {props.numberOfStaff}</p>
      
      </div>
    </div>
  );
}
// --------container component--------
class PhongBan extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5">
        <h3 className="tieuDeTrang">Phòng Ban</h3>
        <hr />
          <div className="row">
            {DEPARTMENTS.map((element, index) => {
              return (
                <HienThiPhongBan
                  name={element.name}
                  numberOfStaff={element.numberOfStaff}
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
