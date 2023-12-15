import React from "react";
import { Col, Row } from "react-bootstrap";
import { StyledDINBoldText, StyledText } from "../../TextStyles";
import ProductCard from "../product/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductAction } from "../../redux/product/productAction";


function CategoryBody() {

    const { productList } = useSelector((state) => state.productInfo);
    const dispatch = useDispatch();
    const handleOnClick = () => {
    
        dispatch(getAllProductAction())
    }
  return (
    <div>
      <Row className="text-color flex-column justify-content-center">
        <Col className="center-on-xs">
          <StyledDINBoldText>
            <h2 onClick={handleOnClick}>Shop all</h2>
          </StyledDINBoldText>
        </Col>
        <Col className="mb-5 center-on-xs">
          <StyledText>
            Discover unparalleled quality that stands the test of time. Every
            purchase is a vote for a greener tomorrow.
          </StyledText>
        </Col>
      </Row>
      <div>
        <Row className="justify-content-center mt-5">
          {productList.map((product) => (
            <Col
              key={product.slug}
              xs={12}
              md={6}
              lg={4}
              className="mb-4 card-on-xs"
            >
              <ProductCard {...product} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default CategoryBody;
