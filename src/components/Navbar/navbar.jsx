import React, { useRef, useState } from "react";
import "./navbar.css";
import logo from "../../assets/ee.png";
import { Link } from "react-scroll";
import contact from "../../assets/c.jpg";
import navOpen from "../../assets/n.png";
import navClose from "../../assets/nc.png";
import { RxCross2 } from "react-icons/rx";
import { TbMenu2 } from "react-icons/tb";
const Navbar = () => {
  const Links = [
    { name: "Home", link: "/Home" },
    { name: "Skills", link: "/Service" },
    { name: "Project", link: "/About" },
    { name: "Contact Me", link: "/Contact_me" },
  ];
  const [menu, setMenu] = useState(false);
  const CvDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1LLslhA-C1LJe0sSR6GvT0Ld7UOZMtPl7/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div className="nav">
      <div className="navtitle">
        <img src={logo} alt="" className="navImg" />
        <span className="">Welcome to Sohag Bhuiyan </span>
      </div>
      <div className="navName" onClick={()=>setMenu(!menu)}>
      {menu? (<TbMenu2/>) : (<RxCross2/>)}
      </div>
    </div>

    // <div>
    //   {menu ? (
    //     <img
    //       src={navClose}
    //       alt="navClose"
    //       className="navClose"
    //       onClick={menuclose}
    //     />
    //   ) : (
    //     <img
    //       src={navOpen}
    //       alt="navOpen"
    //       className="navOpen"
    //       onClick={menuclose}
    //     />
    //   )}

    //   <nav className="navbar">
    //     <img src={logo} alt="logo" className="logo" />

    //     <div ref={menuref} className="desktopmenu">
    //       <Link
    //         activeClass="active"
    //         to="intro"
    //         spy={true}
    //         smooth={true}
    //         offset={-100}
    //         duration={500}
    //         className="desktopMenuListItem"
    //       >
    //         Home
    //       </Link>
    //       <Link
    //         activeClass="active"
    //         to="skills"
    //         spy={true}
    //         smooth={true}
    //         offset={-50}
    //         duration={500}
    //         className="desktopMenuListItem"
    //       >
    //         Skills
    //       </Link>
    //       <Link
    //         activeClass="active"
    //         to="project"
    //         spy={true}
    //         smooth={true}
    //         offset={-50}
    //         duration={500}
    //         className="desktopMenuListItem"
    //       >
    //         Projects
    //       </Link>

    //       <button onClick={CvDownload} className="desktopMenuListItembtn">
    //         CV
    //       </button>
    //       <Link
    //         activeClass="active"
    //         to="footer"
    //         spy={true}
    //         smooth={true}
    //         offset={-50}
    //         duration={500}
    //         className="desktopMenuListItem"
    //       ></Link>
    //     </div>

    //     <Link
    //       activeClass="active"
    //       to="contact"
    //       spy={true}
    //       smooth={true}
    //       offset={-90}
    //       duration={500}
    //     >
    //       <button className="desktopbtn">
    //         <img src={contact} alt="contact" className="dektopImg" />
    //         Contact Me
    //       </button>
    //     </Link>
    //   </nav>

    //   {menu && (
    //     <div className="mobilemenu">
    //       <Link
    //         activeClass="active"
    //         to="intro"
    //         spy={true}
    //         smooth={true}
    //         offset={-100}
    //         duration={500}
    //         className="mobileListItem"
    //       >
    //         Home
    //       </Link>
    //       <Link
    //         activeClass="active"
    //         to="skills"
    //         spy={true}
    //         smooth={true}
    //         offset={-50}
    //         duration={500}
    //         className="mobileListItem"
    //       >
    //         Skills
    //       </Link>
    //       <Link
    //         activeClass="active"
    //         to="project"
    //         spy={true}
    //         smooth={true}
    //         offset={-50}
    //         duration={500}
    //         className="mobileListItem"
    //       >
    //         Projects
    //       </Link>

    //       <Link
    //         activeClass="active"
    //         to="footer"
    //         spy={true}
    //         smooth={true}
    //         offset={-50}
    //         duration={500}
    //         className="mobileListItem"
    //       ></Link>
    //       <Link
    //         activeClass="active"
    //         to="contact"
    //         spy={true}
    //         smooth={true}
    //         offset={-90}
    //         duration={500}
    //         className="mobileListItem"
    //       >
    //         <img src={contact} alt="contact" className="mobileImg" />
    //         Contact Me
    //       </Link>
    //       <button onClick={CvDownload} className="mobileListItem1">
    //         CV
    //       </button>
    //     </div>
    //   )}
    // </div>
  );
};

export default Navbar;
