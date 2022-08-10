import React, { useState } from "react";
import dateFormat from "dateformat";
import {Link} from 'react-router-dom';
import {Breadcrumb, BreadcrumbItem, Button,
        Modal, ModalHeader, ModalBody, Row, Col, Label} from 'reactstrap';
import { LocalForm, Control, Errors} from 'react-redux-form'


// Using Boostrap Cards to render staff info
function RenderStaff({staff, departments, staffInfoChange}) {
    const doB = dateFormat(staff.doB, "dd/mm/yyyy");
    const startDate = dateFormat(staff.startDate, "dd/mm/yyyy");
    const position = staff.salaryScale > 1 ? "Quản lý" : "Nhân viên";
    const department = departments.find((department) => {
        return department.id === staff.departmentId;
    });

    return(
        <div className="card" cursor="pointer" style={{margin: "10px"}}>
            <div className="row g-0 mt-3" style={{padding: "15px"}}>

                <div className="col-md-4">
                    <img src={staff.image} className="card-img-top" alt={staff.name} style={{width: "100%"}} />
                    <h5 className="card-title text-center mt-2">{staff.name}</h5>
                    <p className="card-text text-center"> Chức danh : {position}</p>
                    <Button color="success" onClick={staffInfoChange}>Cập Nhật</Button>
                </div>

                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text">Mã nhân viên : EC-00{staff.id}</p>
                        <p className="card-text">Ngày sinh : {doB}</p>
                        <p className="card-text">Ngày vào công ty : {startDate}</p>
                        <p className="card-text"> Phòng ban : {department.name} </p>
                        <p className="card-text"> Số ngày nghỉ còn lại : {staff.annualLeave}</p>
                        <p className="card-text"> Số ngày làm thêm : {staff.overTime}</p>                           
                    </div>
                </div>

            </div>
        </div>            
    );
}

const StaffInfo = (props) => {
    let staff = props.staff;

    // Validate Form
    const required = (val) => val !== '';
    const minLength = (min) => (val) => !(val) || (val.length >= min);
    const maxLength = (max) => (val) => !(val) || (val.length < max);
    const isNumber = (val) => !isNaN(Number(val));
    const salaryScaleValid = (val) => Number(val) >= 1.0 && Number(val) <= 3.0;

    const [ isModalOpen, setToggleModal ] = useState(false);
    const [ doB, setDoB ] = useState(dateFormat(props.staff.doB, "yyyy-mm-dd"));
    const [ startDate, setStartDate ] = useState(dateFormat(props.staff.startDate, "yyyy-mm-dd"));
    
    function handleToggleModal () {
        setToggleModal(!isModalOpen);
    }
    
    function staffInfoChange() {
        handleToggleModal();
    };

    function handleInputChange (values) {
        const target = values.target;
        const name = target.name;
        const value = target.value;
        if(name === 'doB') {
            setDoB(value);;
        }
        else if(name === 'startDate') {
            setStartDate(value);
        }
    };

   function onSubmit(values) {
       props.staffInfoChange(staff.id, values.name, values.doB, values.startDate, values.departmentId, values.salaryScale, values.annualLeave, values.overTime);
       handleToggleModal()
   }


    if(staff == null) {
        return <div></div>
    } else {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/staffs'>Nhân viên</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{staff.name}</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <hr/>  
            <div className="row">
                <div className="col-12 ">
                    <h3>Thông tin nhân viên</h3>
                </div>
            </div> 
            <RenderStaff staff={staff} departments={props.departments.departments} staffInfoChange={staffInfoChange}/>
                <Modal isOpen={isModalOpen} toggle={handleToggleModal}>
                    <ModalHeader toggle={handleToggleModal}>Cập nhật thông tin</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={onSubmit}>
                            <Row className='form-group'>
                                <Label htmlFor="name" md={4}>Tên</Label>
                                <Col md={8}>
                                    <Control.text model=".name" id="name" name="name" 
                                        placeholder="Nhập họ tên nhân viên"
                                        className='form-control'
                                        defaultValue={props.staff.name}
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(30)
                                        }}
                                    />
                                    <Errors
                                        className='text-danger'
                                        model=".name"
                                        show='touched'
                                        messages={{
                                            required: "Yêu cầu nhập!",
                                            minLength:'Yêu cầu tên có nhiều hơn 2 ký tự!',
                                            maxLength: 'Yêu cầu tên có ít hơn 30 ký tự!',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor="doB" md={4}>Ngày sinh</Label>
                                <Col md={8}>
                                    <Control type='date' model=".doB" id="doB" name="doB"
                                        className='form-control'
                                        defaultValue={doB}
                                        value={doB}
                                        onChange={(modelValue) => handleInputChange(modelValue)}
                                        validators={{
                                            required,
                                        }}
                                    />
                                    <Errors 
                                        className="text-danger"
                                        model='.doB'
                                        show="touched"
                                        messages={{
                                            required: 'Yêu cầu nhập!',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor="startDate" md={4}>Ngày vào công ty</Label>
                                <Col md={8}>
                                    <Control type="date" model='.startDate' id="startDate" name="startDate" 
                                        defaultValue={startDate}
                                        value={startDate}
                                        className='form-control'
                                        onChange={(modelValue) => handleInputChange(modelValue)}
                                        validators={{
                                            required,
                                        }}
                                    />
                                    <Errors
                                        className='text-danger'
                                        model='.startDate'
                                        show='touched'
                                        messages={{
                                            required: 'Yêu cầu nhập!',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor="department" md={4}>Phòng ban</Label>
                                <Col md={8}>
                                    <Control.select model=".departmentId" name="departmentId" id="departmentId"
                                                    className="form-control"
                                                    defaultValue={props.staff.departmentId}
                                                    onChange={(modelValue) => handleInputChange(modelValue)}
                                                    >
                                        <option value="Dept01">Sale</option>
                                        <option value="Dept02">HR</option>
                                        <option value="Dept03">Marketing</option>
                                        <option value="Dept04">IT</option>
                                        <option value="Dept05">Finance</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor="salaryScale" md={4}>Hệ số lương</Label>
                                <Col md={8}>
                                    <Control.text model=".salaryScale" 
                                        id="salaryScale" name="salaryScale" 
                                        placeholder="1.0 -> 3.0"
                                        className="form-control"
                                        defaultValue={props.staff.salaryScale}
                                        validators={{
                                            isNumber, salaryScaleValid,
                                        }}
                                    />
                                    <Errors
                                        className='text-danger'
                                        model='.salaryScale'
                                        show='touched'
                                        messages={{
                                            isNumber: 'Xin hãy nhập một số!',
                                            salaryScaleValid: 'Hệ số lương từ 1.0 đến 3.0'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="annualLeave" md={4}>Số ngày nghỉ còn lại</Label>
                                <Col md={8}>
                                    <Control.text model=".annualLeave" id="annualLeave" name="annualLeave" 
                                        placeholder="1.0"
                                        className='form-control'
                                        defaultValue={props.staff.annualLeave}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="overTime" md={4}>Số ngày đã làm thêm</Label>
                                <Col md={8}>
                                    <Control.text model=".overTime" id="overTime" name="overTime" 
                                        placeholder="1.0"
                                        className='form-control'
                                        defaultValue={props.staff.overTime}
                                    />
                                </Col>
                            </Row>
                            <hr/>
                            <Row className='form-group m-1'>
                                <Button type="submit" value='submit' color="primary">
                                    Cập nhật
                                </Button>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
    )}    
}

export default StaffInfo;