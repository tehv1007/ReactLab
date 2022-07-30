import React, {useState} from "react";
import { Card, CardBody, CardText, CardTitle, CardImg, InputGroup, InputGroupText, Input, Label, FormGroup, Breadcrumb, BreadcrumbItem } from "reactstrap";
import {Link} from 'react-router-dom';
import {Loading} from './LoadingComponent';
import {FadeTransform} from 'react-animation-components';

function RenderStaff ({item, staffsSalary}) {
    let department = item.department === "Sale" ? "dept01" :
                    item.department === "HR" ? "dept02" :
                    item.department === "Marketing" ? "dep03" :
                    item.department === "IT" ? "dep04" : "dept05";
    let departmentName = item.departmentId === "Dept01" ? "Sale" :
                    item.departmentId === "Dept02" ? "HR" :
                    item.departmentId === "Dept03" ? "Marketing" :
                    item.departmentId === "Dept04" ? "IT" : "Finance"; 

    return (
        <FadeTransform in
            transformProps={{exitTransForm: 'scale(0.5) translateY(-50%)'}}>
            <Card id={item.id}>
                <CardBody className={department}>
                    <CardTitle className="cardTitle2">Họ và tên: {item.name}</CardTitle>
                    <hr/>
                    <div className='row'>
                        <div className='col-4'>
                            <CardImg src={item.image} alt={item.name} />
                        </div>
                        <div className='col-8'>
                            <CardText>Phòng ban: {departmentName}</CardText>
                            <CardText>Mã nhân viên: EC-00{staffsSalary.staffsSalary.indexOf(item)}</CardText>
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
        </FadeTransform>
    )
}

function Salary(props) {
    const [sortEl, setSortEl] = useState('staffId');
    if(props.staffsSalary.staffsSalary) {
        const handleSortChange = (e) => {
            setSortEl(e.target.value);
        };

        sortEl === "highToLow" ? props.staffsSalary.staffsSalary.sort((a,b) => a.salary > b.salary ? -1 : 1)
        : sortEl === 'lowToHigh' ? props.staffsSalary.staffsSalary.sort((a,b) => a.salary > b.salary ? 1 : -1)
        : sortEl === 'nameAtoZ' ? props.staffsSalary.staffsSalary.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
        : sortEl === 'nameZtoA' ? props.staffsSalary.staffsSalary.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1)
        : sortEl === 'department' ? props.staffsSalary.staffsSalary.sort((a,b) => a.department > b.department ? 1 : -1)
        : props.staffsSalary.staffsSalary.sort((a,b) => a.id > b.id? 1 : -1);

        const rederList = props.staffsSalary.staffsSalary.map((staffSalary) => {
            return (
                <div key={staffSalary.id} className='col-12 col-md-6 col-lg-4 staff-list'>
                    <RenderStaff item={staffSalary} staffsSalary={props.staffsSalary}/>
                </div>
            )
        });

        if (props.staffsSalary.isLoading) {
            return (
                <div className="container container-content p-4 text-center">
                    <Loading/>
                </div>
            );
        }
        else if (props.staffsSalary.errMess) {
            return(
                <div className="container container-content p-4 text-center">
                    <h4>{props.staffsSalary.errMess}</h4>
                </div>
            );
        } else
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
    } else 
    return (
        <div className="row">
        </div>
        );
}

export default Salary;