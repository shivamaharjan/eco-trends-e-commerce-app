import React from "react";
import { Col, Row } from "react-bootstrap";
import { StyledDINBoldText, StyledText } from "../../TextStyles";
import ProductCard from "../product/ProductCard";
import { useDispatch } from "react-redux";
import { getAllProductAction } from "../../redux/product/productAction";


function CategoryBody() {
    const dispatch = useDispatch();
    const handleOnClick = () => {
        dispatch(getAllProductAction())
    }
  return (
    <div>
      <Row className="text-color flex-column justify-content-center">
        <Col>
          <StyledDINBoldText>
            <h2 onClick={handleOnClick}>Shop all</h2>
          </StyledDINBoldText>
        </Col>
        <Col>
          <StyledText>
            Discover unparalleled quality that stands the test of time. Every
            purchase is a vote for a greener tomorrow.
          </StyledText>
        </Col>
      </Row>
      <div>
        <Row>
          <Col>
            <ProductCard />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CategoryBody;
