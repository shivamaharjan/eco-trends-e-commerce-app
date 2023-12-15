import React, { useEffect, useState } from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import { Col, Container, Image, Row } from 'react-bootstrap'
import img from "../../assets/random/img3.jpg"
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

function Product() {
  const { slug } = useParams();
  const [productData, setProductData] =useState({});
  const navigate =useNavigate();

  const {productList} =useSelector(state => state.productInfo)
 
    useEffect(() => {
      const selectedProduct = productList.find(
        (product) => product.slug === slug
      );
      if (selectedProduct) {
        setProductData(selectedProduct);
      } else {
        navigate("/category-home");
      }
     
    }, [productList]);

  return (
    <div>
      <Header />
      <Container className="main mt-5">
        <Row className="d-flex flex-column">
          {/* All product image */}
          {/* Product Image */}
          <Col md={6}>
            <Image
              src={productData.thumbnail}
              alt="Your Image"
              fluid
              rounded
            />
          </Col>
          {/* Product Details */}
          <Col md={6}>a</Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Product