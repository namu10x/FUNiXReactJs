import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import AddUser from "./AddUser";
//--------functionalComponent--------
function RenderBreadcrumb() {
  return (
    <div>
      <h3 className="tieuDeTrang">Trang Nhân Viên</h3>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem>
          <Link to="/nhanvien">Nhân Viên</Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}

function TrangNhanVien(props) {
  const [staffList, setStaffList] = useState(props.staffs);

  function getNewStaffList(staff) {
    setStaffList(staff);
    console.log("da nhan lien ket tu ham add user");
    props.recieveStaffList(staff);
  }
  function getNewDepartmentList (department) { 
      props.recieveDepartmentList(department);
   }
  function RenderSearch() {
    const input = useRef(null);
    return (
      <div className="col-12 col-md-8">
        <div className="form-group">
          <div className="btn-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nhập tên cần tìm.."
              ref={input}
            ></input>
            <div
              className="btn btn-info"
              onClick={() => textSearch(input.current.value)}
            >
              Tìm
            </div>
          </div>
        </div>
      </div>
    );
  }
  function textSearch(text) {
    if (text === "") {
    } else {
      var filteredStaff = staffList.filter((staff) =>
        staff.name.toLowerCase().includes(text.toString().toLowerCase())
      );
      //   console.log(filteredStaff);
      setStaffList(filteredStaff);
    }
  }
  function RenderNhanVien(props) {
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
console.log(props.departments);
  const staff = staffList.map((nhanVien) => {
    return (
      <RenderNhanVien
        key={nhanVien.id}
        nhanVienID={nhanVien.id}
        image={nhanVien.image}
        name={nhanVien.name}
        department={nhanVien.department}
      />
    );
  });
  return (
    <div className="container mt-5">
      <div className="row">
        <RenderBreadcrumb />
      </div>
      <div className="row">
        <RenderSearch />
        <AddUser
          getNewStaffList={(staff) => getNewStaffList(staff)}
          getNewDepartmentList={(department)=>getNewDepartmentList(department)}
          currentStaffList={staffList}
          currentDepartmentList={props.departments}
        />
      </div>

      <hr />
      <div className="row">{staff}</div>
    </div>
  );
}

export default TrangNhanVien;
