<<<<<<< HEAD
import React, { Component } from "react";
=======
import {useMemo,useState,createContext } from 'react'
>>>>>>> 8b65d53c0426304c731e3e4a629d6835febee189
import Login from './Pages/Login'
import Register from './Pages/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Nav,Navbar,NavDropdown,NavLink} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes,Link,Redirect} from 'react-router-dom';
import './App.css';
import UserTable from './Pages/UserTable';
<<<<<<< HEAD
import SEPractice from "./Pages/SE-Practice";
//import NotFoundPage from "./pages/404";

=======
import FindUser from './Pages/FindUser';
import ResetPassword from './Pages/ResetPassword';
import NewPassword from './Pages/NewPassword';
>>>>>>> 8b65d53c0426304c731e3e4a629d6835febee189

function App() {
  return (

    <div className="App">
      <Navbars/>
    </div>
  );
}
const Navbars=()=>{
  const UserContext = createContext()
  return (
    <Router>//
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container >
            <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="text-center">
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <NavLink as={Link} to="/SEPractice">Select the Practice</NavLink>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
        <Route path='/' element={<Register/>}></Route>
          <Route path='/Register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
<<<<<<< HEAD
            <Route  path="/SEPractice" element={<SEPractice></SEPractice>}/>

          {/* <Route path='/menu' element={<Menu/>}></Route>
          <Route path='/register' element={<Register/>}></Route> */}
=======
          <Route path='/usertable' element={<UserTable />}></Route>
          <Route path='/usertable/finduser/:id' element={<FindUser/>}></Route>
          <Route path='/resetpassword' element={<ResetPassword/>}></Route>
          <Route path='/resetpassword/newpassword/:id' element={<NewPassword/>}></Route>
>>>>>>> 8b65d53c0426304c731e3e4a629d6835febee189
        </Routes>
  </Router>
  );
}
export default App;
