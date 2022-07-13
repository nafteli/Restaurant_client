import './App.css';
import React from 'react';
import { Nav, Navbar, Container, Row, Col }
    from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route ,Link } from "react-router-dom";
import MenuList from './components/menu/menuList';
import MenuReservation from './components/menu/MenuReservation'
// import MenuByCategory from './components/menu/MenuByCategory';
import QueueList from './components/queue/queuelist';
import TabaleList from './components/tabales/tabaleslist';
//import SideMenu from './components/defultComponent/sidebar';
import Homepage from './components/homePage/homePage'
//import CreateGroup from './components/queue/queuInput'
import CreateGroup from
  "./components/queue/CreateGrup";



export default function App() {

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>

            <Nav className="justify-content-end">
              <Nav>
              <Link to={"/QueueList/addgrop"}
                className="nav-link">
                Create Group
              </Link>
              </Nav>

              <Nav>
              <Link to={"/QueueList"}
                className="nav-link">
                Groups List
              </Link>
              </Nav>

              <Nav>
              <Link to={"/menu"}
                className="nav-link">
                Show Menu
              </Link>
              </Nav>

              <Nav>
              <Link to={"/tabel"}
                className="nav-link">
                Tables
              </Link>
              </Nav>
            </Nav>
            </Container>
          </Navbar>
          </header>

          <Container>
          <Row>
            <Col md={12}>
            <div className="wrapper">
            </div>
            </Col>
          </Row>
          </Container>
        </div>
        {/* <SideMenu /> */}
        <Routes>
          <Route path="/" element={<CreateGroup />} />
          <Route path="/menu" element={<MenuList />} />
          <Route path="/menuReservation/:GroupSeqNo" element={<MenuReservation />} />
          <Route path="/menu/starter" element={<MenuList />} />
          <Route path="/menu/Soups" element={<MenuList />} />
          <Route path="/menu/MainCourse" element={<MenuList />} />
          <Route path="/menu/desserts" element={<MenuList />} />
          <Route path="/QueueList" element={<QueueList />} />
          <Route path="/QueueList/addgrop" element={< CreateGroup />} />
          <Route path="/tabel" element={<TabaleList />} />


        </Routes>
      </BrowserRouter>
    </>

  );
}


// // Import other React Component
// import EditStudent from
//   "./Components/edit-student.component";
// import StudentList from
//   "./Components/student-list.component";




