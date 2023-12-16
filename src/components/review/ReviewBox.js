import React from "react";
import { Col, Row } from "react-bootstrap";
import { StyledText } from "../../TextStyles";

function ReviewBox() {
  return (
    <div>
        <StyledText>
      <Row className="flex-column g-4 text-color">
        
        <Col>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi commodi
          explicabo, praesentium cumque pariatur delectus blanditiis ut
        </Col>
        <Col>Customer name</Col>
      </Row>
      </StyledText>
    </div>
  );
}

export default ReviewBox;
