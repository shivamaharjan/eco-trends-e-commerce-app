import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import img1 from "../../assets/random/img3.jpg"
import { StyledDINBoldText } from '../../TextStyles';

function CategoryNav() {
  return (
    <div>
      <Container>
        <Row className="p-5 g-lg-5 g-md-5 g-sm-3">
          <Col>
            <Image
              src={img1}
              alt="Your Image"
              fluid
              style={{ width: "10 rem" }}
              rounded
            />
            <StyledDINBoldText className="mt-3 text-color text-center text-category-nav">
              Wellness & Style
            </StyledDINBoldText>
          </Col>
          <Col>
            <Image
              src={img1}
              alt="Your Image"
              fluid
              style={{ width: "10 rem" }}
              rounded
            />
            <StyledDINBoldText className="mt-3 text-color text-center text-category-nav">
              Eco Essentials
            </StyledDINBoldText>
          </Col>
          <Col>
            <Image
              src={img1}
              alt="Your Image"
              fluid
              style={{ width: "10 rem" }}
              rounded
            />
            <StyledDINBoldText className="mt-3 text-color text-center text-category-nav">
              Green Living
            </StyledDINBoldText>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CategoryNav