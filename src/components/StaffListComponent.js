import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {Card, CardBody, CardTitle, CardImg, InputGroup, FormGroup, Input} from 'reactstrap';

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

//Hiển thị danh sách nhân viên và tìm kiếm, lựa chọn
function StaffList(props) {
    const [filterText, setFilterText] = useState('');
    const [sort, setSort] = useState('all');

    const handleFilterText= (e) => {
        setFilterText(e.target.value);
    };

    const handleSortChange = (e) => {
        setSort(e.target.value);
    };

    const filtered = !filterText ? props.staffs : props.staffs.filter((staff) => 
        staff.name.toLowerCase().includes(filterText.toLowerCase())
    );

    const sorted = sort === 'all' ? filtered
                : sort === 'manager' ? filtered.filter((e) => e.salaryScale > 1)
                : filtered.filter((e) => e.salaryScale === 1);
                
    const stafflist = sorted.map((staff) => {
        return (
            <div key={staff.id} className ="col-6 col-md-4 col-lg-2 staff-list">
                <RenderStaff item={staff} />
            </div>
        )
    });

    return (
        <div className='container'>
            <div className='row subnav'>
                <div className='col-12 col-lg-4'>
                    <h3>Danh sách nhân viên</h3>
                </div>
                <div className='col-12 col-lg-4'>
                    <InputGroup>
                        <Input className='mb-2'
                            type="text"
                            placeholder="Tìm theo tên nhân viên..."
                            onChange={handleFilterText} />
                    </InputGroup>
                </div>
                <div className='col-12 col-lg-4'>
                    <FormGroup>
                        <Input className='inputSelect'
                            type='select'
                            onChange={handleSortChange}>
                            <option value='all'>Tất cả</option>
                            <option value='manager'>Quản lý</option>
                            <option value='staff'>Nhân viên</option>
                        </Input>
                    </FormGroup>
                </div>                
            </div>
            <hr />
            <div className='row staff-list'>
                {stafflist}
            </div>
        </div>
    )
}

export default StaffList;