import React from "react";
import { Col, Row } from "react-bootstrap";
import { StyledDINBoldText, StyledText } from "../../TextStyles";
import heroImage from "../../assets/random/img3.jpg";

function CategoryHero() {
  return (
    <div className="mt-3">
      <Row
        className="d-flex flex-column"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          //   height: "400px",
          borderRadius: "20px",
        }}
      >
        <Col className="d-flex flex-column justify-content-center align-items-center mt-5">
          <StyledDINBoldText className="text-white" style={{ fontWeight: 900 }}>
            <h2 className="text-center">Shop All</h2>
          </StyledDINBoldText>

          <Row className="justify-content-center">
            <Col xs={12} md="auto" className="text-center">
              <StyledText className="text-white">
                <h5>Discover sustainability, Embrace Style :</h5>
              </StyledText>
            </Col>

            <Col xs={12} md="auto" className="text-center">
              <StyledText className="text-white">
                <h5> Make every choice counts</h5>
              </StyledText>
            </Col>
          </Row>

          <hr style={{ width: "80%", color: "white" }} />
        </Col>
        <Col>
          <Row>
            <Col
              md={5}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <StyledDINBoldText className="text-white">
                <h2>Up to 30% off</h2>
              </StyledDINBoldText>
              <StyledText className="text-white">
                <p className="mb-0">Unlock eco-friendly savings.</p>
                <p className="mb-0">Shop now for a greener lifestyle.</p>
              </StyledText>
            </Col>

            <Col md={7} className="g-5">
              <Row>
                <Col md={4} className="discount-card">
                  <StyledDINBoldText className="text-white">
                    <h1>30%</h1>
                    <h1>OFF</h1>
                  </StyledDINBoldText>
                  <StyledText className="text-white">
                    Orders 180$ or more
                  </StyledText>
                </Col>
                <Col md={4} className="discount-card">
                  <StyledDINBoldText className="text-white">
                    <h1>20%</h1>
                    <h1>OFF</h1>
                  </StyledDINBoldText>
                  <StyledText className="text-white">
                    Orders 120$ or more
                  </StyledText>
                </Col>
                <Col md={4} className="discount-card">
                  <StyledDINBoldText className="text-white">
                    <h1>10%</h1>
                    <h1>OFF</h1>
                  </StyledDINBoldText>
                  <StyledText className="text-white">
                    Orders 60$ or more
                  </StyledText>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default CategoryHero;
