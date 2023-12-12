import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { IoIosCart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase-config";
import { setUser } from "../../redux/auth/userSlice";
import Hamburger from "hamburger-react";
import { StyledText } from "../../TextStyles";

function Header() {
  const { user } = useSelector((state) => state.userInfo);
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    signOut(auth).then(() => {
      dispatch(setUser({}));
    });
  };

  return (
    <div className="d-flex flex-column">
      <div
        className="text-white text-center mb-0"
        style={{ background: "#d4a373", fontSize: "14px" }}
      >
        <StyledText>
          " Gift the Planet: Unwrap Eco-Friendly Joy with Our Sustainable
          Holiday Sale! Get Upto 30% off
          <Link to="/" className="link-color">
            &nbsp;&nbsp;Learn more &nbsp;
          </Link>
          "
        </StyledText>
      </div>

      <div className="d-flex justify-content-between align-items-center p-2">
        {/* Left Section */}
        <div className="text-color"style={{ marginLeft: "20px" }}>
          <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
        </div>

        {/* Middle Section */}
        <Navbar.Brand
          style={{
            fontFamily: "Futura, sans-serif",
            fontWeight: "400",
            fontSize: "30px",
          }}
        >
          <Link to="/" className="nav-link">
            <h3 className="text-color">Eco Trends</h3>
          </Link>
        </Navbar.Brand>

        {/* Right Section */}
        <div className="d-flex gap-4 text-color" style={{ marginRight: "20px" }}>
          <Link to="/login" className="nav-link">
            <CgProfile size={25} />
          </Link>
          <Link to="/cart" className="nav-link">
            <IoIosCart size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
