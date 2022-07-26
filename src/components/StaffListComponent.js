import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Card, CardBody, CardTitle, CardImg, InputGroup, Input, FormGroup, Form,
        Button, Label, Col, FormFeedback, Modal, ModalHeader, ModalBody} from 'reactstrap';

class StaffAddForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            isModalOpen: false,
            id: '',
            name: '',
            doB: '',
            salaryScale: 1.0,
            startDate: '',
            department: 'Sale',
            annualLeave: 0,
            overTime: 0,
            salary: '',
            clicked: false,
            touched: {
                name: false,
                doB: false,
                startDate: false,
            },
            searchValue: ''
        }

        this.handleAddSubmit = this.handleAddSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleToggleModal = this.handleToggleModal.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    //Hàm xử lý tìm kiếm nhân viên với Uncontrolled Form
    handleSearchSubmit (e) {
        e.preventDefault();
        this.setState({
            searchValue: this.fullName.value,
        })
    };

    // Open-close Form thêm nhân viên
    handleToggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    };

    // Lấy dữ liệu vào của Form thêm nhân viên
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
            [name]: value,
        });
    }

    // Hàm xử lý khi submit thêm nhân viên với Controlled Form
    handleAddSubmit(e) {
        e.preventDefault();
        const invalid = this.nameValidate(this.state.name);
        const error = this.submitValidate(this.state.name, this.state.doB, this.state.startDate);
        if (invalid === ''
            && error.name === ''
            && error.doB === ''
            && error.startDate === ''
        ) {
            this.props.handleAddSubmit(this.state);
            this.handleToggleModal();
            this.setState({
                name: '',
                doB: '',
                salaryScale: '',
                startDate: '',
                department: 'Sale',
                annualLeave: '',
                overTime: '',
                salary: ''
            });
        };
    };

    // Blur to a field controlled form
    handleBlur = (field) => (e) => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    };

    // Name validate
    nameValidate(name) {
        let invalid = '';
        if(this.state.touched.name && name.length < 3) {
            invalid = "Yêu cầu tên có nhiều hơn 2 ký tự";
        } else if (this.state.touched.name && name.length > 29) {
            invalid = "Yêu cầu tên có ít hơn 30 ký tự";
        }
        return invalid;
    }

    // Form submit validate
    submitValidate(name, doB, startDate) {
        const errors = {
            name: '',
            doB: '',
            startDate: ''
        };

        if(this.state.clicked && name === '') {
            errors.name = "Yêu cầu nhập";
        };

        if(this.state.clicked && doB === '') {
            errors.doB = "Yêu cầu nhập";
        };

        if(this.state.clicked && startDate === '') {
            errors.startDate = "Yêu cầu nhập";
        };

        return errors;
    }

    // Click to submit button on Controlled form
    handleClick() {
        this.setState({
            clicked: true
        })
    }

    // View render for StaffAddForm component
    render() {
        const invalid = this.nameValidate(this.state.name);
        const error = this.submitValidate(this.state.name, this.state.doB, this.state.startDate);
        
        if(this.props.staffs) {
            const filtered = !this.state.searchValue
            ? this.props.staffs
            : this.props.staffs.filter((staff) => staff.name.toLowerCase().includes(this.state.searchValue.toLowerCase()));

            var list = filtered.map((staff) => {
                return(
                    <div key={staff.id} className="col-6 col-md-4 col-lg-2 staff-list">
                        <RenderStaff item={staff} />
                    </div>
                )
            })
        }

        return (
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
				  
                <hr/>
                <div className="row">
                    {list}
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.handleToggleModal}>
                    <ModalHeader toggle={this.handleToggleModal}>Thêm nhân viên</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleAddSubmit}>
                            <FormGroup row>
                                <Label htmlFor="name" md={4}>Tên</Label>
                                <Col md={8}>
                                    <Input type="text" id="name" name="name" 
                                        placeholder="Nhập họ tên nhân viên"
                                        value={this.state.name}
                                        valid={invalid === '' && this.state.name !== '' && error.name === ''}
                                        invalid={invalid !== '' || error.name !== ''}
                                        onBlur={this.handleBlur('name')}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{error.name ? error.name : invalid}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="doB" md={4}>Ngày sinh</Label>
                                <Col md={8}>
                                    <Input type="date" id="doB" name="doB"
                                        value={this.state.doB}
                                        valid={error.doB === '' && this.state.doB !== ''}
                                        invalid={error.doB !== ''}
                                        onBlur={this.handleBlur('doB')}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{error.doB}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="startDate" md={4}>Ngày vào công ty</Label>
                                <Col md={8}>
                                    <Input type="date" id="startDate" name="startDate" 
                                        value={this.state.startDate}
                                        valid={error.startDate === '' && this.state.startDate !== ''}
                                        invalid={error.startDate !== ''}
                                        onBlur={this.handleBlur('startDate')}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{error.startDate}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="department" md={4}>Phòng ban</Label>
                                <Col md={8}>
                                    <Input type="select" name="department"
                                            value={this.state.department}
                                            onChange={this.handleInputChange}>
                                        <option defaultValue>Sale</option>
										<option>HR</option>
										<option>Marketing</option>
										<option>IT</option>
										<option>Finance</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="salaryScale" md={4}>Hệ số lương</Label>
                                <Col md={8}>
                                    <Input type="text" id="salaryScale" name="salaryScale" 
                                        placeholder="Hệ số lương từ 1.0 -> 3.0"
                                        value={this.state.salaryScale}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="annualLeave" md={4}>Số ngày nghỉ còn lại</Label>
                                <Col md={8}>
                                    <Input type="text" id="annualLeave" name="annualLeave" 
                                        placeholder="1.0"
                                        value={this.state.annualLeave}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="overTime" md={4}>Số ngày đã làm thêm</Label>
                                <Col md={8}>
                                    <Input type="text" id="overTime" name="overTime" 
                                        placeholder="1.0"
                                        value={this.state.overTime}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <hr/>
                            <FormGroup row>
                                <Col>
                                    <Button type="submit" color="primary" onClick={this.handleClick}>
                                        Thêm
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

//Hiển thị hình ảnh và họ tên nhân viên
function RenderStaff ({item}) {
    return(
        <Card id={item.id} className='staffEl'>
            <Link to={`/staffs/${item.id}`}>
                <CardBody>
                    <CardImg src={item.image} alt={item.name} />
                    <CardTitle className='nameTitle text-center'>
                        {item.name}
                    </CardTitle>
                </CardBody>
            </Link>
        </Card>
    )
}

// Hàm xử lý lọc nhân viên, sắp xếp nhân viên theo vị trí và hiển thị toàn bộ nhân viên.
function StaffList(props) {

    return(
        <div className="container container-content">
            <StaffAddForm 
                staffs={props.staffs}
                handleAddSubmit={(data) => props.handleAddSubmit(data)}
            />
        </div>
    );
}

export default StaffList;