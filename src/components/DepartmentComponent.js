import React from "react";
import {Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Loading} from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';

// Render từng phòng ban
function DepartmentEl({department, deptImages}) {
    let deptEl = department.id === "Dept01" ? "dept01" :
        department.id === "Dept02" ? "dept02" :
        department.id === "Dept03" ? "dep03" :
        department.id === "Dept04" ? "dep04" : "dept05";

    let DeptImg = deptImages.find((deptImage) => deptImage.id === department.id);

    return (      
        <Link to={`/departments/${department.id}`}>
            <FadeTransform in
                transformProps={{exitTransForm: 'scale(0.5) translateY(-50%)'}}>
                <Card className={deptEl}>
                    <CardBody>
                        <CardTitle className="cardTitle">{department.name} Department</CardTitle>
                        <CardText>Số lượng nhân viên: {department.numberOfStaff}</CardText>
                        <CardImg src={DeptImg.image} alt={department.name}/>
                    </CardBody>
                </Card>
            </FadeTransform>
        </Link>
    )
}

//Render danh sách toàn bộ phòng ban
function DepartmentList(props) {
    const departmentList = props.departments.departments.map((department) => {
        return (
            <div key={department.id} className="col-12 col-md-6 col-lg-4 staff-list">
                <DepartmentEl department={department} deptImages={props.deptImages} />
            </div>
        )
    })

    if (props.departments.isLoading === true) {
        return (
            <div className="container container-content p-4 text-center">
                <Loading/>
            </div>
        );
    }
    else if (props.departments.errMess) {
        return(
            <div className="container container-content p-4 text-center">
                <h4>{props.departments.errMess}</h4>
            </div>
        );
    } else
        return (
            <div className="container">
                <div className="row deptEl">
                    <div className="col-12">
                        <h2 className="text-center">PHÒNG BAN</h2>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    {departmentList}
                </div>
            </div>
        )
}

export default DepartmentList;