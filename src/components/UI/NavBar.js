import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import OffCanvas from "../UI/OffCanvas";
import logo from "../../assets/logo-bookmark.svg";
import Button from "react-bootstrap/Button";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Container
      bg="light"
      expand="lg"
      className="container-xxl py-3 row justify-content-center px-2"
    >
      <div className="row col-12">
        <div href="#home" className="col-2">
          <img src={logo} />
        </div>

        <OffCanvas className="col-1" />

        <nav class="d-none d-md-block col-5 ms-auto me-3">
          <ul className="row">
            <li className="col-3 pt-2">
              <a class>Features</a>
            </li>
            <li className="col-3 pt-2">
              <a>Pricing</a>
            </li>
            <li className="col-3 pt-2">
              <a>Contact</a>
            </li>
            <Button className="col-3 nav-btn">Login</Button>
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default NavBar;
