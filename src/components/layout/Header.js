import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase-config";
import { setUser } from "../../redux/auth/userSlice";

function Header() {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  

  const handleLogOut = () => {
     signOut(auth).then(() => {
       dispatch(setUser({}));
     });
  };


  return (
    <div className="d-flex flex-column">
      <div className="promo text-white text-center">
        <p>
          "Gift the Planet: Unwrap Eco-Friendly Joy with Our Sustainable Holiday
          Sale! Get Upto 30% off <Link to="/"> Learn more </Link> "
        </p>
      </div>
      <Navbar expand="lg" className="headercss">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="nav-link">
              Eco Trends
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {user.uid ? (
                <>
                  <span className="nav-link">
                    Welcome &nbsp;
                    <span style={{ fontStyle: "italic" }}>{user.fName}</span>
                  </span>
                  <Link to={"/#"} onClick={handleLogOut} className="nav-link">
                    Logout
                  </Link>
                  <Link to="/profile" className="nav-link">
                    Profile
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
