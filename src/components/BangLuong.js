import React from "react";
// --------Salary cal--------
function TinhLuong(salaryScale, overTime) {
  const basicSalary = 3000000;
  const overTimeSalary = 200000;
  return (
    salaryScale * basicSalary +
    overTime * overTimeSalary
  ).toLocaleString();
}
// --------presentation component--------
function HienThiBangLuong(props) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className=" card-view">
        <h3>{props.name}</h3>
        <p>Mã nhân viên: {props.id}</p>
        <p>Hệ số lương: {props.salaryScale}</p>
        <p>Số giờ làm thêm: {props.overTime}</p>
        <p>Lương: {TinhLuong(props.salaryScale, props.overTime)}</p>
      </div>
    </div>
  );
}
// --------container component--------


function BangLuong(props) {
  return (
    <div>
        <div className="container mt-5">
          <h3 className="tieuDeTrang">Bảng Lương</h3>
          <hr />
          <div className="row">
            {props.staffs.map((element, index) => {
              return (
                <HienThiBangLuong
                key={index}
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
  )
}



export default BangLuong;
