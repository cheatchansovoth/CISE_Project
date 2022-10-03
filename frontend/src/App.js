import Login from './Pages/Login'
import Register from './Pages/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Nav,Navbar,NavDropdown,NavLink} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import './App.css';
import UserTable from './Pages/UserTable';


function App() {
  return (
    <div className="App">
      <Navbars/>
    </div>
  );
}
const Navbars=()=>{
  return (
    <Router>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container >
            <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="text-center">
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
        <Route path='/' element={<Login/>}></Route>
          <Route path='/Register' element={<Register/>}></Route>
          <Route path='/usertable' element={<UserTable />}></Route>
          <Route path='/login' element={<Login/>}></Route>
          {/* <Route path='/menu' element={<Menu/>}></Route>
          <Route path='/register' element={<Register/>}></Route> */}
        </Routes>
  </Router>
  );
}
export default App;
