import React from "react";
import {Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap';
import {Link} from 'react-router-dom';

// Render từng phòng ban
function DepartmentEl({item}) {
    let department = item.id === "Dept01" ? "dept01" :
    item.id === "Dept02" ? "dept02" :
    item.id === "Dept03" ? "dep03" :
    item.id === "Dept04" ? "dep04" : "dept01";

    return (      
        <Link to={`/departments/${item.id}`}>
            <Card className={department}>
                <CardBody>
                    <CardImg src={item.image} alt={item.name} className='deptImg'/>
                    <CardTitle>{item.name} Department</CardTitle>
                    <CardText>Số lượng nhân viên: {item.numberOfStaff}</CardText>
                </CardBody>
            </Card>
        </Link>
    )
}

//Render danh sách toàn bộ phòng ban
function DepartmentList(props) {
    const departmentList = props.departments.map((department) => {
        return (
            <div key={department.id} className="col-12 col-md-6 col-lg-4 staff">
                <DepartmentEl item={department} />
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center">Phòng Ban</h2>
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