import { Link } from "react-router-dom";
import { Container, Form } from "react-bootstrap";


export default function Profile() {
  return (
    <Container>
      <div id="wd-profile-screen">
        <h3>Profile</h3>
        <Form.Control defaultValue="alice" placeholder="username" className="mb-2" />
        <Form.Control defaultValue="123" placeholder="password" type="password" className="mb-2" />
        <Form.Control defaultValue="Alice" placeholder="First Name" className="mb-2" />
        <Form.Control defaultValue="Wonderland" placeholder="Last Name" className="mb-2" />
        <Form.Control defaultValue="2000-01-01" type="date" className="mb-2" />
        <Form.Control defaultValue="alice@wonderland" type="email" className="mb-2" />
        <Form.Select defaultValue="FACULTY" className="mb-2">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </Form.Select>
        <Link to="/Kambaz/Account/Signin" className="btn btn-primary btn-danger">
          Sign out
        </Link>
      </div>
    </Container>
  );
}