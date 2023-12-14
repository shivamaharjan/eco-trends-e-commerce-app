import { signOut } from "firebase/auth";
import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { Col, Navbar, Row } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { IoIosCart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StyledText } from "../../TextStyles";
import { auth } from "../../config/firebase-config";
import { setUser } from "../../redux/auth/userSlice";
import { useMediaQuery } from "react-responsive";

function Header() {
  const { user } = useSelector((state) => state.userInfo);
  const [isOpen, setOpen] = useState(false);
  const isXlScreen = useMediaQuery({ query: "(min-width: 1200px)" });
  const dispatch = useDispatch();

  const handleLogOut = () => {
    signOut(auth).then(() => {
      dispatch(setUser({}));
    });
  };

  return (
    <div className="d-flex flex-column">
      <div className="text-white text-center mb-0 text-container">
        <StyledText>
          " Gift the Planet: Unwrap Eco-Friendly Joy with Our Sustainable
          Holiday Sale! Get Upto 30% off. &nbsp;&nbsp;
          <Link to="/" className="link-color">
            Learn more
          </Link>
          &nbsp;"
        </StyledText>
      </div>

      <Row
        className="d-flex justify-content-between align-items-center p-2"
        style={{ marginLeft: "30px", marginRight: "30px" }}
      >
        {/* Left Section */}
        <Col className="d-flex justify-content-between align-items-center">
          {isXlScreen ? (
            // Render link for XL screen
            <div
              className="d-flex gap-3 justify-content-start align-items-center"
              style={{
                fontFamily: "Futura, sans-serif",
                fontWeight: "400",
                fontSize: "12px",
              }}
            >
              <Link to="/category-home" className="nav-link">
                <p className="text-color">SHOP ALL</p>
              </Link>
              <Link to="/" className="nav-link">
                <p className="text-color">STYLE</p>
              </Link>
              <Link to="/" className="nav-link">
                <p className="text-color">ECO-ESSENTIAL</p>
              </Link>
              <Link to="/" className="nav-link">
                <p className="text-color">GREEN-LIVING</p>
              </Link>
            </div>
          ) : (
            // Render hamburger for smaller screens
            <div className="text-color">
              <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
            </div>
          )}
        </Col>
        {/* Middle Section */}
        <Col
          className="d-flex justify-content-center align-items-center"
          style={{
            fontFamily: "Futura, sans-serif",
            fontWeight: "400",
            fontSize: "30px",
          }}
        >
          <Link to="/" className="nav-link">
            <h3 className="text-color">Eco Trends</h3>
          </Link>
        </Col>

        {/* Right Section */}
        <Col className="d-flex gap-3 justify-content-end align-items-center text-color">
          <Link to="/login" className="nav-link">
            <CgProfile size={25} />
          </Link>
          <Link to="/cart" className="nav-link">
            <IoIosCart size={25} />
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
