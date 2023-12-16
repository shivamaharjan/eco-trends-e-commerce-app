import React from 'react'
import { StyledText } from '../../TextStyles'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import img1 from "../../assets/random/img3.jpg"
import { Link } from 'react-router-dom';

function ShopCategories() {
  return (
    <div style={{ marginLeft: "30px", marginRight: "30px" }}>
      <div>
        <StyledText className="text-color">
          <h1> Shop</h1>
        </StyledText>
      </div>
      <div>
        <Row className="justify-content-center g-5">
          <Col xs={12} md={4} className="mb-4">
            <Image
              src={img1}
              alt="Your Image"
              fluid
              style={{ width: "18 rem" }}
              rounded
            />
            <div>
              <StyledText>
                <h4>Wellness and Style</h4>
              </StyledText>
              <Link to="/Wellness-Style" className="nav-link">
                Shop now
              </Link>
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-4 ">
            <Image
              src={img1}
              alt="Your Image"
              fluid
              style={{ width: "18 rem" }}
              rounded
            />
            <div>
              <StyledText>
                <h4>Eco Essentials</h4>
              </StyledText>
              <Link to="/Wellness-Style" className="nav-link">
                Shop now
              </Link>
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-4 ">
            <Image
              src={img1}
              alt="Your Image"
              fluid
              style={{ width: "18 rem" }}
              rounded
            />
            <div>
              <StyledText>
                <h4> Green Living</h4>
              </StyledText>
              <Link to="/Wellness-Style" className="nav-link">
                Shop now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ShopCategories