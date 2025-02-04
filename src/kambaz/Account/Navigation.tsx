import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function AccountNavigation() {
  return (
    <Container>
      <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
        <Link to="/Kambaz/Account/Signin" id="wd-account-signin-link"
          className="list-group-item text-danger border border-0"> Signin </Link><br />
        <Link to="/Kambaz/Account/Signup" id="wd-account-signup-link"
          className="list-group-item text-danger border border-0"> Signup </Link><br />
        <Link to="/Kambaz/Account/Profile" id="wd-account-profile-link"
          className="list-group-item text-danger border border-0"> Profile </Link><br />
      </div>
    </Container>
  );
}