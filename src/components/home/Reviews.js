import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { IoStarSharp } from "react-icons/io5";
import { StyledDINBoldText, StyledText } from '../../TextStyles';
import { FaArrowRightLong } from "react-icons/fa6";
import ReviewBox from '../review/ReviewBox';



function Reviews() {
  return (
    <div
      style={{
        marginLeft: "30px",
        marginRight: "30px",
        marginTop: "100px",
        marginBottom: "100px",
      }}
    >
      <Row className="g-5">
        <Col xs={12} md={12} xl={2} className="text-sm-end">
          <Row>
            <Col>
              <StyledDINBoldText
                className="text-color"
                style={{ marginBottom: "10px" }}
              >
                <h1>Excellent</h1>
              </StyledDINBoldText>
              <div style={{ color: "orange", marginBottom: "10px" }}>
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <StyledText
                className="text-color"
                style={{ marginBottom: "10px" }}
              >
                from 1088 reviews
              </StyledText>
            </Col>
            <Col>
              <div
                className="review-button text-color"
                style={{ width: "150px" }}
              >
                <span style={{ marginRight: "10px" }}> All reviews </span>
                <FaArrowRightLong style={{ color: "#04040454" }} />
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={3} md={3} xl={2}>
          <ReviewBox />
        </Col>
        <Col xs={3} md={3} xl={2}>
          <ReviewBox />
        </Col>
        <Col xs={3} md={3} xl={2}>
          <ReviewBox />
        </Col>
        <Col xs={3} md={3} xl={2}>
          <ReviewBox />
        </Col>
      </Row>
    </div>
  );
}

export default Reviews