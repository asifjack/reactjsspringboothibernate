import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Header from "./components/Header";
import Home from './components/Home'
import Menu from "./components/Menu";
import AddCourse from "./components/AddCourse"
import AllCourses from "./components/AllCourses";
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UpdateCourse from './components/UpdateCourse';

function App() {
  return (
    <div>
      <ToastContainer />
      <Router>
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>
              <Route path="/" component={Home} exact />
              <Route path="/add-course" component={AddCourse} />
              <Route path="/view-courses" component={AllCourses} />
              <Route path='/edit/:id' component={UpdateCourse} />
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
