import { Link } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
export default function Dashboard() {
  return (
    <Container>
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> 
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> 
      <hr />
      <div id="wd-dashboard-courses">


      <Row xs={1} md={5} className="g-4">
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home" 
          className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/reactjs.png" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>

      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home" 
          className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/nodejs.png" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS5678 Node JS</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Backend Development Essentials</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>

      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/9101/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/angular.png" width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS9101 Angular</Card.Title>
              <Card.Text className="wd-dashboard-course-description">Frontend Framework Mastery</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1123/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/python.png" width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1123 Python Programming</Card.Title>
              <Card.Text className="wd-dashboard-course-description">Programming Foundations</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1415/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/java.png" width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1415 Java Fundamentals</Card.Title>
              <Card.Text className="wd-dashboard-course-description">Object-Oriented Programming</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1617/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/htmlcss.png" width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1617 HTML & CSS</Card.Title>
              <Card.Text className="wd-dashboard-course-description">Web Design Basics</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1819/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/mongodb.png" width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1819 MongoDB</Card.Title>
              <Card.Text className="wd-dashboard-course-description">NoSQL Database Management</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/2021/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/devops.png" width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS2021 DevOps</Card.Title>
              <Card.Text className="wd-dashboard-course-description">CI/CD & Deployment</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      </Row>
    </div>
    </div>
    </Container>
  );
};


