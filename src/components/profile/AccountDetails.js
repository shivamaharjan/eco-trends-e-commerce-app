import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AccountDetails() {
  const { user } = useSelector((state) => state.userInfo);


  return (
    <div className="border p-3 mt-5 ms-5">
      <Row
        className="pt-4 ps-3 pe-2 flex-column g-5 text-color"
        style={{
          fontFamily: "Futura, sans-serif",
          fontWeight: "100",
          fontSize: "14px",
        }}
      >
        <Col>
          <h5>
            {user.fName} {user.lName}
          </h5>
          <p style={{ marginBottom: "2px" }}>{user.email}</p>
          <p style={{ marginBottom: "2px" }}>{user.phone}</p>
          <p>{user.address}</p>
        </Col>
        <Col>
          <Row>
            <Col>
              <Link to="/change-password" className="nav-link">
                Change Password
              </Link>
            </Col>
            <Col className="d-flex justify-content-end">
              <Link to="/edit-profile" className="nav-link">
                Edit Details
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default AccountDetails;
