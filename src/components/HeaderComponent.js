import React, { Component } from 'react';
import { Button, Collapse, Label, Modal, ModalBody, ModalHeader, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLeaf} from '@fortawesome/free-solid-svg-icons'
=======
import { Control, LocalForm, Errors } from 'react-redux-form';
import { NavLink } from 'react-router-dom';

>>>>>>> a6887970e05e0432dcb9cc12f6c13eb0a39c2b5c
const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            isNavOpen: false,
            username: '',
            touched: {
                username: false
            }
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);    
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        console.log(values);
        this.toggleModal();
    }

    render() {
        return (
            <React.Fragment>
                <Navbar color="dark" dark sticky="top" expand="md">
                    <div className='container'>
<<<<<<< HEAD
                        <NavbarBrand className="mr-auto" href="/habiliti"><FontAwesomeIcon icon={faLeaf} /> Habiliti</NavbarBrand>
=======
                        <NavbarBrand className="mr-auto" href="/"></NavbarBrand>
>>>>>>> a6887970e05e0432dcb9cc12f6c13eb0a39c2b5c
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
<<<<<<< HEAD
                                    <NavLink className="nav-link" to="/">
=======
                                    <NavLink className="nav-link" to="/home">
>>>>>>> a6887970e05e0432dcb9cc12f6c13eb0a39c2b5c
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/faqs">
                                        FAQs
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/features">
                                        Features
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                        Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className='navbar-text ml-auto'>
<<<<<<< HEAD
            
=======
                                <Button color="light" outline onClick={this.toggleModal}>
                                    Login
                                </Button>
>>>>>>> a6887970e05e0432dcb9cc12f6c13eb0a39c2b5c
                            </span>
                        </Collapse>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
<<<<<<< HEAD
                        
=======
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <div className='form-group'>
                                <Label htmlFor="username">First Name</Label>
                                <Control.text model=".username" id="username" name="username"
                                    placeholder="First Name"
                                    className="form-control"
                                    validators={{
                                        required,
                                        minLength: minLength(1),
                                        maxLength: maxLength(60)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".username"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be at least one character',
                                        maxLength: 'Must be 60 characters or less'
                                    }}
                                />
                            </div>
                                <Button type="submit">Login</Button>
                        </LocalForm> 
>>>>>>> a6887970e05e0432dcb9cc12f6c13eb0a39c2b5c
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }    
}

export default Header;