import React, {useState} from "react";
import { Card, CardBody, CardText, CardTitle, CardImg, InputGroup, InputGroupText, Input, Label, FormGroup, Breadcrumb, BreadcrumbItem } from "reactstrap";
import {Link} from 'react-router-dom';

function RenderStaff ({item}) {
    let department = item.department === "Sale" ? "dept01" :
                    item.department === "HR" ? "dept02" :
                    item.department === "Marketing" ? "dep03" :
                    item.department === "IT" ? "dep04" : "dept05";

    return (
        <Card id={item.id}>
            <CardBody className={department}>
                <CardTitle className="cardTitle2">Họ và tên: {item.name}</CardTitle>
                <hr/>
                <div className='row'>
                    <div className='col-4'>
                        <CardImg src={item.image} alt={item.name} />
                    </div>
                    <div className='col-8'>
                        <CardText>Phòng ban: {item.department}</CardText>
                        <CardText>Mã nhân viên: EC-00{item.id}</CardText>
                        <CardText>Hệ số lương: {item.salaryScale}</CardText>
                        <CardText>Số ngày làm thêm: {item.overTime}</CardText>
                        <InputGroup className={department}>
                            <InputGroupText>Lương</InputGroupText>
                            <Input value={`${item.salary} VNĐ`} disabled className="text-center"/>
                        </InputGroup>
                    </div>
                </div>
            </CardBody> 
        </Card>
    )
}

function Salary(props) {
    const basicSalary = 3000000;
    const overTimeSalary= 200000;
    const staffEl = props.staffs.map((staff) => {
        const salary = Math.floor((staff.salaryScale*basicSalary) + (overTimeSalary*staff.overTime));
        staff.salary = salary;
        return (staff);
    })

    const [sortEl, setSortEl] = useState('staffId');
    const handleSortChange = (e) => {
        setSortEl(e.target.value);
    };

    sortEl === "highToLow" ? staffEl.sort((a,b) => a.salary > b.salary ? -1 : 1)
    : sortEl === 'lowToHigh' ? staffEl.sort((a,b) => a.salary > b.salary ? 1 : -1)
    : sortEl === 'nameAtoZ' ? staffEl.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
    : sortEl === 'nameZtoA' ? staffEl.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1)
    : sortEl === 'department' ? staffEl.sort((a,b) => a.department.name > b.department.name ? 1 : -1)
    : staffEl.sort((a,b) => a.id > b.id? 1 : -1);

    const rederList = staffEl.map((staff) => {
        return (
            <div key={staff.id} className='col-12 col-md-6 col-lg-4 staff-list'>
                <RenderStaff item={staff} />
            </div>
        )
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/staffs'>Nhân viên</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <hr/>
            <div className="row align-items-center">
                <div className="col-12 col-md-6">
                    <h3>BẢNG LƯƠNG</h3>
                </div>
                <div className="col-12 col-md-3 offset-md-2 offset-lg-3">
                    <FormGroup>
                        <Label>Sắp xếp theo</Label>
                        <Input
                            type="select"
                            onChange={handleSortChange} >
                            <option value="staffId">Mã nhân viên</option>
                            <option value="lowToHigh">Mức lương tăng dần</option>
                            <option value="highToLow">Mức lương giảm dần</option>
                            <option value="nameAtoZ">Tên từ A - Z</option>
                            <option value="nameZtoA">Tên từ Z - A</option>
                            <option value="department">Phòng ban</option>
                        </Input>
                    </FormGroup>
                </div>
            </div>
            <hr/>
            <div className="row">
                {rederList}
            </div>
        </div>
    )
}

export default Salary;
