import React, { Component } from 'react';

import StaffDetailsComponent from './StaffDetailsComponent';
class StaffListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStaff: null
        }
    }
   
    onStaffSelect(staff) {
        this.setState({ selectedStaff: staff });  // luu lai thong tin cua nhan vien duocclick
    }

    render() {
        return (
            <div className='container-fluid'>
                <h1>Ứng dụng quản lý nhân sự v1.0</h1>
                <div className='row'>
                    {
                        this.props.staffs.map(element => {
                            return (

                                <div className='col-12 col-sm-6 col-md-4 '>
                                    <div className='nhanvien' onClick={() => this.onStaffSelect(element)}>
                                        <div className='chu'>{element.name}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/* //hien thi chi tiet thong tin nhan vien duoc click */}
                <StaffDetailsComponent staff={this.state.selectedStaff} /> 

            </div>
        );
    }
}

export default StaffListComponent;