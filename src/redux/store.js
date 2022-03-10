import { STAFFS } from "../shared/staffs";
import { DEPARTMENTS } from "../shared/staffs";

var redux =require('redux');

const staffInitialState = {
    staffList: STAFFS,
    departmentList: DEPARTMENTS
    // testConnect: "state testconnect o store da duoc chuyen thanh props test thoi"
};
const allReducer = (state = staffInitialState, action) => {
  switch (action.type) {
    // case "ADD_DATA":
    //     console.log("ket noi thanh cong tu dieu huong, bien nhan vao la: " + action.getItem );
    //   return state;

    default:
      return state;
  }
};
var store = redux.createStore(allReducer);
export default store;
