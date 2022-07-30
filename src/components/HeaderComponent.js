import React, { Component }from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="40" width="auto" alt='HR management' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/staffs'><span className='fa fa-users fa-lg'></span> Nhân viên</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/departments'><span className='fa fa-id-card-o fa-lg'></span> Phòng ban</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/salary'><span className='fa fa-money fa-lg'></span> Bảng lương</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
        );
    }
}

export default Header;