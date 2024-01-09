import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { StyledText } from '../../TextStyles';
import { GiOlive } from "react-icons/gi";
import { GiEcology } from "react-icons/gi";
import { GiWisdom } from "react-icons/gi";
import { MdEmojiNature } from "react-icons/md";

function InfoSlide() {
  return (
    <div
      className="rounded p-5 text-color mt-5"
      style={{
        marginLeft: "30px",
        marginRight: "30px",
        backgroundColor: "#fefae0b3",
        fontFamily: "Futura, sans-serif",
      }}
    >
      <Row className="justify-content-center g-5">
        <Col xs={12} md={4}>
          <Row className="flex-column g-3 text-center">
            <Col className="d-flex justify-content-center align-items-center">
              <GiEcology style={{ fontSize: "40px", color: "#40916c" }} />
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <h6 style={{ fontSize: "16px", fontWeight: "bold" }}>
                Sustainable Living
              </h6>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              Embrace Eco-Trends, Nurture Tomorrow. Commit to sustainable living
              for a greener legacy.
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <Row className="flex-column g-3 text-center">
            <Col className="d-flex justify-content-center align-items-center">
              <GiOlive style={{ fontSize: "40px",color: "#40916c" }} />
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <h6 style={{ fontSize: "16px", fontWeight: "bold" }}>
                Green Innovation
              </h6>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              In the realm of eco-trends, green innovation blooms, uniting
              progress with planetary care.
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <Row className="flex-column g-3 text-center">
            <Col className="d-flex justify-content-center align-items-center">
              {/* <GiWisdom /> */}
              <MdEmojiNature style={{ fontSize: "40px", color: "#40916c" }} />
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <h6 style={{ fontSize: "16px", fontWeight: "bold" }}>
                Nature-Inspired Wisdom
              </h6>
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