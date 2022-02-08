import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import BangLuong from '../components/BangLuong';
import Home from '../components/Home';
import NhanVien from '../components/NhanVien';
import NhanVienChiTiet from '../components/NhanVienChiTiet';
import PhongBan from '../components/PhongBan';
import { STAFFS } from '../shared/staffs';
class DieuHuongURL extends Component {
    render() {
        return (
       
            <div>      
              <hr />
              <Switch>
                <Route exact path="/" >
                <Home staffs={STAFFS}/>
                </Route>
                <Route exact path="/nhanvien">
                  <NhanVien />
                </Route>
                <Route exact path="/nhanvienchitiet/:id">
                  <NhanVienChiTiet />
                </Route>
                <Route exact path="/phongban">
                  <PhongBan />
                </Route>
                <Route exact path="/bangluong">
                  <BangLuong />
                </Route>
              </Switch>
            </div>
       
        );
    }
}

export default DieuHuongURL;