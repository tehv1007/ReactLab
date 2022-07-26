import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import StaffInfo from './StaffComponent';
import StaffList from './StaffListComponent';
import DepartmentList from './DepartmentComponent';
import DepartmentStaff from './DepartmentStaffComponent';
import Salary from './SalaryComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        image: state.image,
    };
};

class Main extends Component {                 

    constructor(props) {                           
        super(props);      
        this.state = {           
            staffs: [
                {
                    id: 0,
                    name: "Nguyễn Đức Tài",
                    doB: "1999-01-01T08:59:00.000Z",
                    salaryScale: 1.1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    department: "Sale",
                    annualLeave: 1,
                    overTime: 1,
                    image: '/assets/images/staff1.jpg',
                },
                {
                    id: 1,
                    name: "Nguyễn Thị Phương Thảo",
                    doB: "2000-01-01T08:59:00.000Z",
                    salaryScale: 1.2,
                    startDate: "2019-04-30T08:59:00.000Z",
                    department: "HR",
                    annualLeave: 2,
                    overTime: 3,
                    image: '/assets/images/staff2.jpg',
                },
                {
                    id: 2,
                    name: "Trần Đình Long",
                    doB: "2001-01-01T08:59:00.000Z",
                    salaryScale: 1.3,
                    startDate: "2019-04-30T08:59:00.000Z",
                    department: "IT",
                    annualLeave: 4,
                    overTime: 5,
                    image: '/assets/images/staff3.jpg',
                },
                {
                    id: 3,
                    name: "Vũ Thị Hiền",
                    doB: "2002-01-01T08:59:00.000Z",
                    salaryScale: 1.2,
                    startDate: "2019-04-30T08:59:00.000Z",
                    department: "Marketing",
                    annualLeave: 6,
                    overTime: 7,
                    image: '/assets/images/staff4.jpg',
                },
                {
                    id: 4,
                    name: "Phạm Thu Hương",
                    doB: "1999-01-01T08:59:00.000Z",
                    salaryScale: 1.3,
                    startDate: "2019-04-30T08:59:00.000Z",
                    department: "Finance",
                    annualLeave: 8,
                    overTime: 1,
                    image: '/assets/images/staff5.jpg',
                },
                {
                    id: 5,
                    name: "Phạm Thúy Hằng",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    department: "Sale",
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/staff6.jpg',
                },
                {
                    id: 6,
                    name: "Nguyễn Thị Thanh Thủy",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    department: "Sale",
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/staff7.jpg',
                },
                {
                    id: 7,
                    name: "Đỗ Anh Tuấn",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    department: "Marketing",
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/staff8.jpg',
                },
                {
                    id: 8,
                    name: "Nguyễn Thị Thanh Tâm",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    department: "IT",
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/staff9.jpg',
                },
                {
                    id: 9,
                    name: "Vũ Thị Quyên",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    department: "Finance",
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/staff10.jpg',
                },
                {
                    id: 10,
                    name: "Nguyễn Đăng Quang",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    department: "Finance",
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/staff11.jpg',
                },
                {
                    id: 11,
                    name: "Trương Thị Lệ Khanh",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    department: "Finance",
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/staff12.jpg',
                },
                {
                    id: 12,
                    name: "Nguyễn Hoàng Yến",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    department: "Finance",
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/staff13.jpg',
                },
                {
                    id: 13,
                    name: "Hồ Hùng Anh",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    department: "Finance",
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/staff14.jpg',
                },
                {
                    id: 14,
                    name: "Bùi Thành Nhơn",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    department: "Finance",
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/staff15.jpg',
                },
                {
                    id: 15,
                    name: "Nguyễn Văn Đạt",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    department: "HR",
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/staff16.jpg',
                },
            ],
        };
    }

    componentDidMount() {
        console.log(JSON.parse(localStorage.getItem('staffs')));
        if(localStorage && localStorage.getItem('staffs')) {
            var staffs = JSON.parse(localStorage.getItem('staffs'));
            this.setState({
                staffs: staffs,
            })
        }
    }

    // Hàm tạo ID duy nhất theo thứ tự tăng dần 1 đơn vị
    generateID() {
        let id = this.state.staffs.length - 1;
        return id += 1;
    };

// Hàm nhận dữ liệu newStaff từ Staffs Component và xử lý dữ liệu lưu vào localStorage
    handleAddSubmit = (data) => {
        var staffs=this.state.staffs;
        var newStaff = {
            id: this.generateID(),
            name: data.name,
            doB: data.doB,
            salaryScale: data.salaryScale,
            startDate: data.startDate,
            department: data.department,
            annualLeave: data.annualLeave,
            overTime: data.overTime,
            salary: 3000000*data.salaryScale + 200000*data.overTime,
            image: '/assets/images/newstaff.png',
        };
        staffs.push(newStaff);
        this.setState({
            staffs: staffs,
        });
        localStorage.setItem('staffs', JSON.stringify(staffs));
    };

    render() {  
        let staffs = this.state.staffs;
        let departments = [
            {
                id: "Dept01",
                name: "Sale",
                numberOfStaff: (staffs.filter((staff) => staff.department === "Sale")).length,
                image: '/assets/images/sale-department.jpg'
            },
            {
                id: "Dept02",
                name: "HR",
                numberOfStaff: (staffs.filter((staff) => staff.department === "HR")).length,
                image: '/assets/images/hr-department.jpg'
            },
            {
                id: "Dept03",
                name: "Marketing",
                numberOfStaff: (staffs.filter((staff) => staff.department === "Marketing")).length,
                image: '/assets/images/marketing-department.jpg'
            },
            {
                id: "Dept04",
                name: "IT",
                numberOfStaff: (staffs.filter((staff) => staff.department === "IT")).length,
                image: '/assets/images/it-department.jpg'
            },
            {
                id: "Dept05",
                name: "Finance",
                numberOfStaff: (staffs.filter((staff) => staff.department === "Finance")).length,
                image: '/assets/images/finance-department.jpg'
            }
        ]

        const StaffId = ({match}) => {
            return (
                <StaffInfo staff={staffs.find((staff) => parseInt(staff.id, 10) === parseInt(match.params.staffId, 10))}/>
            );
        };

        const DeptStaff = ({match}) => {
            return(
                <DepartmentStaff items={staffs.filter((item) => item.department === match.params.department)}
                            department={departments.find((item) => item.name === match.params.department)}
                />
            );
        }

        return (        
            <div>
                <Header/>
                    <Switch>
                        <Route exact path="/home" component={() =><Home image={this.state.image} />} />
                        <Route exact path="/staffs" component={() => <StaffList staffs={staffs} handleAddSubmit={this.handleAddSubmit}/>} />
                        <Route path="/staffs/:staffId" component={StaffId} />
                        <Route exact path="/departments" component={() => <DepartmentList departments={departments}/>} /> 
                        <Route path="/departments/:department" component={DeptStaff}/> 
                        <Route exact path="/salary" component={() => <Salary staffs={staffs}/>}/> 
                        <Redirect to='/home'/>
                    </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
