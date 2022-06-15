import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import StaffInfo from './StaffComponent';
import StaffList from './StaffListComponent';
import DepartmentList from './DepartmentComponent';
import DepartmentStaff from './DepartmentStaffComponent';
import Salary from './SalaryComponent';
import Footer from './FooterComponent';
import { STAFFS, DEPARTMENTS, IMAGE } from '../shared/staffs';   
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {                 

    constructor(props) {                           
        super(props);      
        this.state = {           
            staffs: STAFFS,
            departments: DEPARTMENTS  ,
            image: IMAGE  
        };
    }

    render() {  

        const StaffId = ({match}) => {
            return (
                <StaffInfo staff={this.state.staffs.find((staff) => staff.id === parseInt(match.params.staffId, 10))}/>
            );
        };

        const DeptStaff = ({match}) => {
            return(
                <DepartmentStaff items={this.state.staffs.filter((item) => item.department.id === match.params.departmentId)}
                            department={this.state.departments.find((item) => item.id === match.params.departmentId)}
                />
            );
        }

        return (        
            <div>
                <Header/>
                    <Switch>
                        <Route exact path="/home" component={() =><Home image={this.state.image} />} />
                        <Route exact path="/staffs" component={() => <StaffList staffs={this.state.staffs}/>} />
                        <Route path="/staffs/:staffId" component={StaffId} />
                        <Route exact path="/departments" 
                            component={() => <DepartmentList departments={this.state.departments}/>} /> 
                        <Route path="/departments/:departmentId" component={DeptStaff}/> 
                        <Route exact path="/salary" component={() => <Salary staffs={this.state.staffs}/>}/> 
                        <Redirect to='/home'/>
                    </Switch>
                <Footer/>
            </div>
        );
    }
}

export default Main;
