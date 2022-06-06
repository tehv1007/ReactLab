import { Component } from "react";
import dateFormat from "dateformat";

class StaffInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedStaffInfo: this.props.StaffInfo
        }
    }

    // Using Boostrap Cards to render staff info
    renderStaff(staff) {
        if(staff != null) {
            return(
                <div className="card" cursor="pointer" style={{margin: "20px"}}>
                    <div className="row g-0 mt-3" style={{padding: "15px"}}>

                        <div className="col-md-4">
                            <img src={staff.image} className="card-img-top" alt={staff.name} style={{width: "100%"}} />
                            <h5 className="card-title text-center mt-2">{staff.name}</h5>
                            <p className="card-text text-center"> Chức danh : {staff.role}</p>
                        </div>

                        <div className="col-md-8">
                            <div className="card-body">
                                <p className="card-text">Mã nhân viên : EC-00{staff.id}</p>
                                <p className="card-text">Ngày sinh : {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
                                <p className="card-text">Ngày vào công ty : {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
                                <p className="card-text"> Phòng ban : {staff.department.name} </p>
                                <p className="card-text"> Số ngày nghỉ còn lại : {staff.annualLeave}</p>
                                <p className="card-text"> Số ngày làm thêm : {staff.overTime}</p>                           
                            </div>
                        </div>

                    </div>
                </div>            
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    render() {
        const staff = this.props.staff; // get data from parent component "StaffList"
        console.log(staff);

        if(staff == null) {
            return <div></div>
        }

        const staffItem = this.renderStaff(staff);

        return(
            <div className="row">
                {staffItem}
            </div>
        )
    
    }
}

export default StaffInfo;