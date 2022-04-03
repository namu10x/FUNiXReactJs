import React, { useState } from "react";
import { STAFFS } from "../shared/staffs";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
//--------functionalComponent--------
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
function FilterDept({ setActiveDept, activeDept, setFilteredStaff, staffs }) {
  console.log(activeDept);
  console.log(staffs);
  function filteredDept(DeptId) {
    setActiveDept(DeptId);
    if (DeptId === "All") {
      setFilteredStaff(staffs);
      return;
    }
    let filtered = staffs.filter((staff) => staff.department.id === DeptId);
    console.log(DeptId);
    setFilteredStaff(filtered);
    console.log(filtered);

    return;
  }

  return (
    <div className="filter-container container">
      <button
        className={activeDept === "All" ? "active" : ""}
        onClick={() => filteredDept("All")}
      >
        All
      </button>
      <button
        className={activeDept === "Dept01" ? "active" : ""}
        onClick={() => filteredDept("Dept01")}
      >
        Sale
      </button>
      <button
        className={activeDept === "Dept02" ? "active" : ""}
        onClick={() => filteredDept("Dept02")}
      >
        HR
      </button>
      <button
        className={activeDept === "Dept03" ? "active" : ""}
        onClick={() => filteredDept("Dept03")}
      >
        Marketing
      </button>
      <button
        className={activeDept === "Dept04" ? "active" : ""}
        onClick={() => filteredDept("Dept04")}
      >
        IT
      </button>
      <button
        className={activeDept === "Dept05" ? "active" : ""}
        onClick={() => filteredDept("Dept05")}
      >
        Finance
      </button>
    </div>
  );
}

export default function Home() {
  const [staffList, setStaffList] = useState(STAFFS);
  const [filteredStaff, setFilteredStaff] = useState(STAFFS);
  const [activeDept, setActiveDept] = useState('All');
  const staff = filteredStaff.map((nhanVien) => {
    // console.log("tnv "+JSON.stringify(nhanVien.id));
    return (
      <NhanVien
      nhanVienID={nhanVien.id}
      image={nhanVien.image}
      name={nhanVien.name}
      department={nhanVien.department}
      />
    );
  });
  return (
    <div className="container mt-5">
      <div className="header"></div>
      <h3 className="tieuDeTrang">Trang Nhân Viên</h3>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem>
          <Link to="/nhanvien">Nhân Viên</Link>
        </BreadcrumbItem>
      </Breadcrumb>

      <div className="row">
      <FilterDept staffs={STAFFS} setFilteredStaff={setFilteredStaff} activeDept={activeDept} setActiveDept={setActiveDept} />        <hr />
      </div>
      <hr/>
      <div className="row">
        {
          staff
        }
      </div>
    </div>
  );
}
