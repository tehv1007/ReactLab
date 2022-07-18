import React from 'react';
import {Card, CardBody, CardTitle, CardImg, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderDeptStaff({item}) {
    let department = item.department === "Sale" ? "dept01" :
                    item.department === "HR" ? "dept02" :
                    item.department === "Marketing" ? "dep03" :
                    item.department === "IT" ? "dep04" : "dept05";

    return (
        <Card id={item.id} className="deptStaff">
            <CardBody>
                <CardImg src={item.image} alt={item.name} />
                <CardTitle className={department}>
                    {item.name}
                </CardTitle>
            </CardBody>
        </Card>
    )
}

function DepartmentStaff(props) {
    const list = props.items.map((item) => {
        return (
            <div key={item.id} className="col-6 col-md-4 col-lg-2 staff-list">
                <RenderDeptStaff item={item}/>
            </div>
        )
    });

    return (
        <div className="container">
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to='/departments'>Phòng ban</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.department.name}</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <hr/>
        <div className="row">
            <div className="col-12 ">
                <h3>Danh sách nhân viên phòng {props.department.name}</h3>
            </div>
        </div>
        <div className="row"> 
            {list}
        </div>
    </div>
    )
}

export default DepartmentStaff;