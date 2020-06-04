import React , {Component} from 'react'
import {Navbar,Nav} from "react-bootstrap"
import {Link } from "react-router-dom"
export  default class NavigationBar extends Component{

    render(){

        return(
           
           <Navbar bg="dark" variant="dark">
                <Link to={"/"} className="navbar-brand" >Book Shop</Link>
           
                <Nav className="mr-auto">
                <Link to={"add"} className="nav-link">Add Book</Link>
                <Link to={"list"} className="nav-link">Book List</Link>
                <Link to={"newadd"} className="nav-link">New Add Book</Link>
                <Link to={"excelexport"} className="nav-link">Export Excel</Link>
                </Nav>
            </Navbar>

        )
    }

}

/*

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Book Shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="add">Add Book</Nav.Link>
      <Nav.Link href="list">List Book</Nav.Link>
      
    </Nav>
   
  </Navbar.Collapse>
</Navbar>


*/