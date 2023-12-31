import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductCard from '../product/ProductCard';
import { useSelector } from 'react-redux';

function FeaturedItems() {
  const { productList } = useSelector((state) => state.productInfo);
  const getRandomNumber = () => Math.random() - 0.5;
  const shuffledProductList = [...productList].sort(getRandomNumber);
  const limitedProductList = shuffledProductList.slice(0, 3);
  return (
    <div
      className="rounded p-5 text-color mt-5"
      style={{
        marginLeft: "30px",
        marginRight: "30px",
        fontFamily: "Futura, sans-serif",
      }}
    >
      <h1>Now Trending</h1>
      <div>
        <Row className="justify-content-center mt-5">
          {limitedProductList.map((product) => (
            <Col
              key={product.slug}
              xs={12}
              md={6}
              lg={4}
              className="mb-5 card-on-xs"
            >
              <ProductCard {...product} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default FeaturedItems