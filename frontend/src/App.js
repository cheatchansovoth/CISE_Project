import Login from './Pages/Login'
import Register from './Pages/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Nav,Navbar,NavDropdown,NavLink} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import './App.css';
import UserTable from './Pages/UserTable';
import FindUser from './Pages/FindUser';
import ResetPassword from './Pages/ResetPassword';
import NewPassword from './Pages/NewPassword';
import SEPractice from "./Pages/SE-Practice";
import Moderator from './Pages/Moderator';
import Upload from './Pages/Upload'
import ApproveArticle from './Pages/ApproveArticle';

const storeData=JSON.parse(localStorage.getItem('token'));
const Logout=()=>
{
  window.localStorage.removeItem('token');
  window.location.reload();
}
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
                <Nav.Link as={Link} to="/login">{storeData? <a onClick={Logout}>Logout</a>: <a>Login</a>}</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
        <Route path='/' element={<SEPractice/>}></Route>
          <Route path='/Register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/usertable' element={<UserTable />}></Route>
          <Route path='/usertable/finduser/:id' element={<FindUser/>}></Route>
          <Route path='/resetpassword' element={<ResetPassword/>}></Route>
          <Route path='/upload' element={<Upload/>}></Route>
          <Route path='/resetpassword/newpassword/:id' element={<NewPassword/>}></Route>
          <Route path='/moderator' element={<Moderator/>}></Route>
          <Route path='/moderator/update/:id' element={<ApproveArticle/>}></Route>
        </Routes>
  </Router>
  );
}
export default App;
