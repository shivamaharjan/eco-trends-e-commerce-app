import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { StyledText } from '../../TextStyles';

function InfoSlide() {
  return (
    <div
      className="rounded pt-5 pb-5 ps-3 pe-3 text-color"
      style={{
        marginLeft: "30px",
        marginRight: "30px",
        backgroundColor: "#fefae0b3",
        fontFamily: "Futura, sans-serif",
      }}
    >
      <Row className="justify-content-center g-5">
        <Col xs={12} md={4}>
          <Row className="flex-column g-3 ">
            <Col className="d-flex justify-content-center align-items-center">
              icon
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <h6>Sustainable Living</h6>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              Embrace Eco-Trends, Nurture Tomorrow. Commit to sustainable living
              for a greener legacy.
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <Row className="flex-column g-3 ">
            <Col className="d-flex justify-content-center align-items-center">
              icon
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <h6>Green Innovation</h6>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              In the realm of eco-trends, green innovation blooms, uniting
              progress with planetary care.
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <Row className="flex-column g-3 ">
            <Col className="d-flex justify-content-center align-items-center">
              icon
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <h6>Nature-Inspired Wisdom</h6>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              Eco-trends echo nature's wisdom: tread lightly, cherish
              biodiversity, weave a sustainable tapestry for Earth
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default InfoSlide