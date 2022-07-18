import React from "react";
import {Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap';
import {Link} from 'react-router-dom';

// Render từng phòng ban
function DepartmentEl({department}) {
    let deptEl = department.id === "Dept01" ? "dept01" :
    department.id === "Dept02" ? "dept02" :
    department.id === "Dept03" ? "dep03" :
    department.id === "Dept04" ? "dep04" : "dept05";

    return (      
        <Link to={`/departments/${department.name}`}>
            <Card className={deptEl}>
                <CardBody>
                    <CardTitle className="cardTitle">{department.name} Department</CardTitle>
                    <CardText>Số lượng nhân viên: {department.numberOfStaff}</CardText>
                    <CardImg src={department.image} alt={department.name}/>
                </CardBody>
            </Card>
        </Link>
    )
}

//Render danh sách toàn bộ phòng ban
function DepartmentList(props) {
    const departmentList = props.departments.map((department) => {
        return (
            <div key={department.id} className="col-12 col-md-6 col-lg-4 staff-list">
                <DepartmentEl department={department} />
            </div>
        )
    })

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