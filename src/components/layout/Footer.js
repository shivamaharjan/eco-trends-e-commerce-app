import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="headercss">
      <Container>
        <Row>
          <Col md={4} className="mt-3">
            <h5>Contact Us</h5>
            <p>Email: ecotrends@gmail.com</p>
            <p>Phone: +1 123-456-7890</p>
          </Col>
          <Col md={4} className="mt-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/about" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  Services
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4} className="mt-3">
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li>
                <a className="nav-link" href="#facebook">
                  Facebook
                </a>
              </li>
              <li>
                <a className="nav-link" href="#twitter">
                  Twitter
                </a>
              </li>
              <li>
                <a className="nav-link" href="#instagram">
                  Instagram
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3">
        &copy; {new Date().getFullYear()} Eco Trends
      </div>
    </footer>
  );
}

export default Footer;
