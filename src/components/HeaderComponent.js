import React, { Component }from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {Jumbotron} from 'react-bootstrap';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
    };

    toggleNav () {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    };

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h2>ỨNG DỤNG QUẢN LÝ NHÂN SỰ</h2>
                                <p>Ứng dụng quản lý nhân sự giúp tăng cường khả năng quản lý, giám sát, điều hành doanh nghiệp, mở rộng khả năng truy cập thông tin giúp cho các nhà quản lý thực hiện công việc của mình một cách nhanh chóng, dễ dàng và thuận tiện. Sử dụng tối ưu nguồn lực trong sản xuất kinh doanh, giảm thiểu khối lượng công việc giấy tờ. Phân tích và đánh giá thông tin chính xác, kịp thời thông qua hệ thống các giải pháp lưu trữ thông tin, thực hiện theo một quy trình thống nhất và chuẩn hóa.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;