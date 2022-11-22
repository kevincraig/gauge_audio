import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Button,
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { Grid3x3GapFill } from "react-bootstrap-icons";
import logo from "../../assets/images/ga-logo.svg";

function TopBar() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString(["en-us"], {
      hour: "numeric",
      minute: "numeric",
    })
  );
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString(["en-us"], {
          hour: "numeric",
          minute: "numeric",
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar
        bg={"dark"}
        variant={"dark"}
        expand="sm"
        fixed={"top"}
        className={"m-0 p-0"}
      >
        <Navbar.Brand href="#home" className={"ms-2 me-2"}>
          <img src={logo} width="30" height="30" alt={"Gauge Audio"} />
        </Navbar.Brand>
        <Navbar.Brand className={"w-100"} style={{ fontSize: "1.0em" }}>
          Gauge Audio
        </Navbar.Brand>
        <Navbar.Brand>{time}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavDropdown
            align={{ sm: "start" }}
            className={"me-3"}
            title={
              <span>
                <Grid3x3GapFill />
              </span>
            }
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default TopBar;
