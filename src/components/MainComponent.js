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
import { fetchStaffs, fetchDepartments, postStaff, staffDelete, fetchStaffsSalary, staffInfoChange } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        staffs: state.staffs,
        departments: state.departments,
        homeImage: state.homeImage,
        deptImages: state.deptImages,
        staffsSalary: state.staffsSalary,
    };
};

const mapDispatchToProps = dispatch => ({
    postStaff: (name, doB, startDate, departmentId, salaryScale, annualLeave, overTime) => dispatch(postStaff(name, doB, startDate, departmentId, salaryScale, annualLeave, overTime)),
    fetchStaffs: () => {dispatch(fetchStaffs())},
    staffDelete: (staffId) => dispatch(staffDelete(staffId)),
    fetchDepartments: () => {dispatch(fetchDepartments())},
    fetchStaffsSalary: () => {dispatch(fetchStaffsSalary())},
    staffInfoChange: (staffId, name, doB, startDate, departmentId, salaryScale, annualLeave, overTime) => dispatch(staffInfoChange(staffId, name, doB, startDate, departmentId, salaryScale, annualLeave, overTime)),
});

class Main extends Component {                 

    componentDidMount() {
        this.props.fetchStaffs();
        this.props.fetchDepartments();
        this.props.fetchStaffsSalary();
    }

    render() {  
        const staffs = this.props.staffs;
        const departments = this.props.departments;
        const staffsSalary = this.props.staffsSalary;

        const StaffId = ({match}) => {
            return (
                <StaffInfo staff={staffs.staffs.find((staff) => parseInt(staff.id, 10) === parseInt(match.params.staffId, 10))}
                    departments = {departments}
                    staffInfoChange = {this.props.staffInfoChange}
                />
            );
        };

        const DeptStaff = ({match}) => {
            return(
                <DepartmentStaff items={staffs.staffs.filter((item) => item.departmentId === match.params.departmentId)}
                            department={departments.departments.find((item) => item.id === match.params.departmentId)}
                />
            );
        }

        return (        
            <div>
                <Header/>
                    <TransitionGroup>
                        <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                            <Switch>
                                <Route exact path="/home" component={() =><Home image={this.props.homeImage} />} />
                                <Route exact path="/staffs" component={() => <StaffList staffs={staffs}
                                                                                        postStaff={this.props.postStaff}
                                                                                        staffDelete={this.props.staffDelete}
                                />} />
                                <Route path="/staffs/:staffId" component={StaffId} />
                                <Route exact path="/departments" 
                                component={() => <DepartmentList departments={departments} deptImages={this.props.deptImages}/>} /> 
                                <Route path="/departments/:departmentId" component={DeptStaff}/> 
                                <Route exact path="/salary" component={() => <Salary staffsSalary={staffsSalary}/>}/> 
                                <Redirect to='/home'/>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
