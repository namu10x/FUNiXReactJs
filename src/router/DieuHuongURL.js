import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BangLuong from "../components/BangLuong";
import NhanVienChiTiet from "../components/TrangNhanVien/NhanVienChiTiet";
import PhongBan from "../components/PhongBan";
import TrangNhanVien from "../components/TrangNhanVien/TrangNhanVien";
import { STAFFS } from "../shared/staffs";
import { DEPARTMENTS } from "../shared/staffs";
// Component rieng de dieu huong router


 function DieuHuongURL() {
  const [staffList, setStaffList] = useState(STAFFS);
  const [departmentList, setDepartmentList] = useState(DEPARTMENTS);
  function recieveStaffList(staff){
    setStaffList(staff);
  }
  function recieveDepartmentList(department){
    console.log("da lien ket tu dieu huong den nhan vien");
    setDepartmentList(department);
  }
  // console.log(departmentList);
  return (
    <div>
      <hr />
      <Switch>
        <Route exact path="/nhanvien">
          <TrangNhanVien staffs={staffList} departments={departmentList} recieveStaffList ={(staffList)=>recieveStaffList(staffList)} recieveDepartmentList={(departmentList)=>recieveDepartmentList(departmentList)} />
        </Route>
        <Route exact path="/">
        <TrangNhanVien staffs={staffList} departments={departmentList} recieveStaffList ={(staffList)=>recieveStaffList(staffList)} recieveDepartmentList={(departmentList)=>recieveDepartmentList(departmentList)}/>
        </Route>
        <Route exact path="/nhanvienchitiet/:id">
          <NhanVienChiTiet staffList={staffList}  />
        </Route>
        <Route exact path="/phongban">
          <PhongBan departmentList={departmentList}  />
        </Route>
        <Route exact path="/bangluong">
          <BangLuong staffs={staffList}  />
        </Route>
      </Switch>
      <hr />
    </div>
  );
}

export default DieuHuongURL;
