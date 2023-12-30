import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import AccountDetails from "../../components/profile/AccountDetails";
import OrderDetails from "../../components/profile/OrderDetails";
import { auth } from "../../config/firebase-config";
import { setUser } from "../../redux/auth/userSlice";
import { useNavigate } from "react-router-dom";

function Profile() {
  const dispatch = useDispatch();
  const [activeSection, setActiveSection] = useState("orders");
  const navigate = useNavigate();

  const handleLogOut = () => {
    // Logout from firebase and also create redux user
    signOut(auth).then(() => {
      dispatch(setUser({}));
    });
  };

  return (
    <div>
      <Header />
      <div>
        <Row style={{ marginRight: "30px" }}>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center"
            style={{
              backgroundColor: "rgba(250, 237, 205, 0.596)",
              minHeight: "80vh",
            }}
          >
            <h4
              className="text-color"
              style={{
                fontFamily: "Futura, sans-serif",
              }}
            >
              {activeSection === "orders"
                ? "Order Management"
                : "Account Details"}
            </h4>
          </Col>
          <Col xs={12} md={8} className="mt-5">
            <Row className="flex-column ms-5">
              <Col>
                <Row>
                  <Col>
                    <div
                      className="d-flex gap-5 justify-content-center align-items-center"
                      style={{
                        fontFamily: "Futura, sans-serif",
                        fontWeight: "100",
                        fontSize: "14px",
                      }}
                    >
                      <div
                        className={`nav-link ${
                          activeSection === "orders" ? "active" : ""
                        }`}
                        onClick={() => setActiveSection("orders")}
                      >
                        <p className="text-color">Orders</p>
                      </div>
                      <div
                        className={`nav-link ${
                          activeSection === "account" ? "active" : ""
                        }`}
                        onClick={() => setActiveSection("account")}
                      >
                        <p className="text-color">Account</p>
                      </div>
                    </div>
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <div
                      className="nav-link"
                      onClick={handleLogOut}
                      style={{
                        fontFamily: "Futura, sans-serif",
                        fontWeight: "100",
                        fontSize: "14px",
                      }}
                    >
                      <p className="text-color">Sign Out</p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col>
                {activeSection === "orders" && <OrderDetails />}
                {activeSection === "account" && <AccountDetails />}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
