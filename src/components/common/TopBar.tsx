import React, { useEffect, useState } from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
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
      <Navbar bg={"dark"} variant={"dark"} expand="sm" className={"nav-bar"}>
        <Navbar.Brand href="#home" className={"ms-2 me-3"}>
          <img src={logo} width="35" height="35" alt={"Gauge Audio"} />
        </Navbar.Brand>
        <Navbar.Brand className={"w-100 gruppo"}>Gauge Audio</Navbar.Brand>
        <Navbar.Brand>{time}</Navbar.Brand>
        {/*<Navbar.Toggle*/}
        {/*  className={"pe-sm-2 pe-lg-4"}*/}
        {/*  aria-controls="basic-navbar-nav"*/}
        {/*/>*/}
        <Navbar.Collapse id="basic-navbar-nav">
          <NavDropdown
            align={{ sm: "start" }}
            drop={"start"}
            className={"me-4"}
            title={
              <span>
                <Grid3x3GapFill />
              </span>
            }
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="/Player">Spotify</NavDropdown.Item>
            <NavDropdown.Item href="/Player">Tidal</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default TopBar;
