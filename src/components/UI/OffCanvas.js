import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Hamburger from "../../assets/icon-hamburger.svg";
import logo from "../../assets/logo-bookmark.svg";
import "./OffCanvas.css";

const OffCanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="d-md-none col-2 ms-auto bg-none border-none"
      >
        <img src={Hamburger} />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div href="#home" className="col-2">
              <img src={logo} />
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="align-content-center text-center">
            <hr />
            <li className="offcanvas-item pt-2 pb-3">
              <a href="#features">Features</a>
            </li>
            <hr />
            <li className="offcanvas-item pt-2 pb-3">
              <a>Pricing</a>
            </li>
            <hr />
            <li className="offcanvas-item pt-2 pb-3">
              <a>Contact</a>
            </li>
            <hr />
            <Button className="offcanvas-item offcanvas-button mt-4">
              Login
            </Button>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

// render(<OffCanvas />);
export default OffCanvas;
