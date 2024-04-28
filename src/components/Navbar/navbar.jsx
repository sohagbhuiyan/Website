import React, { useRef, useState } from "react";
import "./navbar.css";
import logo from "../../assets/ee.png";
import { Link } from "react-scroll";
import contact from "../../assets/c.jpg";
import navOpen from "../../assets/n.png";
import navClose from "../../assets/nc.png";
const Navbar = () => {
  const CvDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1c7fNSEsD4LyZBfgn39ImuNUZsBwOxNfX/view?usp=drive_link",
      "_blank"
    );
  };

  const [menu, setMenu] = useState(false);
  const menuref = useRef();
  const menuclose = () => {
    setMenu((menu) => !menu);
  };
  return (
    <>
      {menu ? (
        <img
          src={navClose}
          alt="logo"
          className="navClose"
          onClick={menuclose}
        />
      ) : (
        <img
          src={navOpen}
          alt="logo"
          className="navClose"
          onClick={menuclose}
        />
      )}

      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />

        <div ref={menuref} className="desktopmenu">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopMenuListItem"
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopMenuListItem"
          >
            Projects
          </Link>

          <button onClick={CvDownload} className="desktopMenuListItembtn">
            CV
          </button>
          <Link
            activeClass="active"
            to="footer"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopMenuListItem"
          ></Link>
        </div>

        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
          <button className="desktopbtn">
            <img src={contact} alt="contact" className="dektopImg" />
            Contact Me
          </button>
        </Link>
      </nav>
      {menu && (
        <div className="mobilemenu">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mobileListItem"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="mobileListItem"
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="mobileListItem"
          >
            Projects
          </Link>

          <button onClick={CvDownload} className="mobileListItem">
            CV
          </button>
          <Link
            activeClass="active"
            to="footer"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="mobileListItem"
          ></Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            <button className="mobileListItem">
              <img src={contact} alt="contact" className="dektopImg" />
              Contact Me
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
