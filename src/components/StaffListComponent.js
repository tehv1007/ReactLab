import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Card, CardBody, CardTitle, CardImg, InputGroup, Input, FormGroup, Form,
        Button, Label, Row, Col, Modal, ModalHeader, ModalBody} from 'reactstrap';
import {LocalForm, Control, Errors} from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';

// Form validate
const required = (val) => val;
const minLength = (min) => (val) => !(val) || (val.length >= min);
const maxLength = (max) => (val) => !(val) || (val.length < max);
const isNumber = (val) => !isNaN(Number(val));
const salaryScaleValid = (val) => Number(val) >= 1.0 && Number(val) <= 3.0;

class StaffAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            doB: '',
            startDate: '',
            searchValue: ''
        };

        this.handleAddSubmit = this.handleAddSubmit.bind(this);
        this.handleToggleModal = this.handleToggleModal.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    //Hàm xử lý tìm kiếm nhân viên với Uncontrolled Form
    handleSearchSubmit (e) {
        e.preventDefault();
        this.setState({
            searchValue: this.fullName.value,
        });
    }

    // Open-close Form thêm nhân viên
    handleToggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }

    // Lấy dữ liệu vào của Form thêm nhân viên
    handleInputChange(values) {
        const target = values.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
            [name]: value,
        });
    }

    // Hàm xử lý khi submit thêm nhân viên với Controlled Form
    handleAddSubmit(values) {
            this.props.postStaff(values.name, values.doB, values.startDate, values.departmentId, values.salaryScale, values.annualLeave, values.overTime);
    } 

    staffDelete(staffId) {
        this.props.staffDelete(staffId);
    }

    // View render for StaffAddForm component
    render() {
        if(this.props.staffs) {
            const filtered = !this.state.searchValue
            ? this.props.staffs
            : this.props.staffs.filter((staff) => staff.name.toLowerCase().includes(this.state.searchValue.toLowerCase()));

            var list = filtered.map((staff) => {
                return(
                    <div key={staff.id} className="col-6 col-md-4 col-lg-2 staff-list">
                        <RenderStaff item={staff} staffDelete = { (staffId) => this.staffDelete(staffId)}
                        staffs={this.props.staffs} />
                    </div>
                )
            })
        }

        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-12 col-md-6 add-button">
                        <h3>Nhân viên</h3>
                        <Button color="success" onClick={this.handleToggleModal} >
                            <i className="fa fa-plus-square" aria-hidden="true"></i>
                            {' '}
                            Thêm nhân viên
                        </Button>
                    </div>

                    <div className="col-12 col-md-6">
                    <Form onSubmit={this.handleSearchSubmit} >
                        <FormGroup>
                            <InputGroup>
                                <Input 
                                    type="text" 
                                    placeholder="Tìm kiếm nhân viên..."
                                    innerRef={(input) => this.fullName = input}/>
                                <Button type="submit" color="primary">Tìm kiếm</Button>
                            </InputGroup>   
                        </FormGroup>
                    </Form>
                    </div>
                </div>
                <hr />
                <div className='row'>
                        {list}
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.handleToggleModal}>
                    <ModalHeader toggle={this.handleToggleModal}>Thêm nhân viên</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleAddSubmit}>
                            <Row className='form-group'>
                                <Label htmlFor="name" md={4}>Tên</Label>
                                <Col md={8}>
                                    <Control.text model=".name" id="name" name="name" 
                                        placeholder="Nhập họ tên nhân viên"
                                        className='form-control'
                                        onChange={(modelValue) => this.handleInputChange(modelValue)}
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
                                            minLength:'Yêu cầu nhiều hơn 2 ký tự!',
                                            maxLength: 'Yêu cầu ít hơn 30 ký tự!',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor="doB" md={4}>Ngày sinh</Label>
                                <Col md={8}>
                                    <Control type='date' model=".doB" id="doB" name="doB"
                                        className='form-control'
                                        value={this.state.doB}
                                        onChange={(modelValue) => this.handleInputChange(modelValue)}
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
                                        value={this.state.startDate}
                                        className='form-control'
                                        onChange={(modelValue) => this.handleInputChange(modelValue)}
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
                                                    defaultValue='Dept01'
                                                    onChange={(modelValue) => this.handleInputChange(modelValue)}
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
                                        defaultValue={1.0}
                                        onChange={(modelValue) => this.handleInputChange(modelValue)}
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
                                        defaultValue={0}
                                        onChange={(modelValue) => this.handleInputChange(modelValue)}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="overTime" md={4}>Số ngày đã làm thêm</Label>
                                <Col md={8}>
                                    <Control.text model=".overTime" id="overTime" name="overTime" 
                                        placeholder="1.0"
                                        className='form-control'
                                        defaultValue={0}
                                        onChange={(modelValue) => this.handleInputChange(modelValue)}
                                    />
                                </Col>
                            </Row>
                            <hr/>
                            <Row className='form-group m-1'>
                                <Button type="submit" color="primary">
                                    Thêm
                                </Button>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

//Hiển thị hình ảnh và họ tên nhân viên
function RenderStaff ({ item, staffDelete }) {
    return(
        <FadeTransform in
        transformProps={{exitTransForm: 'scale(0.5) translateY(-50%)'}}>
            <Card id={item.id} className='staffEl'>

                <CardBody>
                    <CardImg src={item.image} alt={item.name} />
                    <CardTitle className='nameTitle text-center'>
                        {item.name}
                    </CardTitle>
                    <div className="hide-show-btn">
                        <Link to={`/staffs/${item.id}`}>
                            <Button color="primary m-2" size="sm">Chi tiết</Button>
                        </Link>
                        <Button color="danger" size="sm" onClick = {() => {staffDelete(item.id)}}>Xóa</Button>
                    </div>
                </CardBody>

            </Card>
        </FadeTransform>
    )
}

//Hiển thị danh sách nhân viên và chức năng tìm kiếm, lọc theo thuộc tính
function StaffList(props) {
    if (props.staffs.isLoading === true) {
        return (
            <div className="container container-content p-4 text-center">
                <Loading/>
            </div>
        );
    }
    else if (props.staffs.errMess) {
        return(
            <div className="container container-content p-4 text-center">
                <h4>{props.staffs.errMess}</h4>
            </div>
        );
    } else
        return (
            <div className='container'>
                <StaffAddForm
                    staffs = {props.staffs.staffs}
                    postStaff = {props.postStaff}
                    staffDelete = {props.staffDelete}
                    staffInfoChange = {props.staffInfoChange}
                />
            </div>
        )
}

export default StaffList;