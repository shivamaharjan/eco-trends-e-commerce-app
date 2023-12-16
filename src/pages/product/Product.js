import React, { useEffect, useState } from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import img from "../../assets/random/img3.jpg"
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { StyledDINBoldText } from '../../TextStyles'
import { BiHeart } from 'react-icons/bi'


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

    const quantityOptions = Array.from(
      { length: productData.quantity || 1 },
      (_, index) => index + 1
    );

  return (
    <div>
      <Header />
      <Container className="main mt-5">
        <Row className="d-flex g-5">
          {/* All product image */}
          {/* Product Image */}
          <Col md={7}>
            <Row className="flex-column">
              <Col>
                <Image
                  src={productData.thumbnail}
                  alt="Your Image"
                  fluid
                  rounded
                />
              </Col>
              <Col>
                <Row style={{ display: "flex", flexWrap: "wrap" }}>
                  {productData.images &&
                    productData.images.map((image, i) => (
                      <Col key={i}>
                        <Image
                          src={image}
                          alt={`Image ${i + 1}`}
                          fluid
                          rounded
                          style={{ maxWidth: "5rem ", margin: "0.5rem" }}
                        />
                      </Col>
                    ))}
                </Row>
              </Col>
            </Row>
          </Col>

          {/* Product Details */}

          <Col md={5}>
            <Row className="d-flex flex-column g-3">
              <Col>
                <StyledDINBoldText className="text-color">
                  <h4>{productData.title}</h4>
                  <h3>${productData.price}</h3>
                </StyledDINBoldText>
              </Col>

              <Col className="text-color">
                <Form.Group className="mb-3">
                  <Form.Label>QUANTITY</Form.Label>
                  <Form.Select>
                    {quantityOptions.map((option, i) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Row>
                  <Col md={2}>
                    <BiHeart className="text-color" style={{fontSize: "3rem"}}/>
                  </Col>
                  <Col md={5}>
                    <Button
                      style={{
                        backgroundColor: "#d4a373",
                        color: "white",
                        fontSize: "1.8rem",
                      }}
                      className="mb-3"
                    >
                      Add to Cart
                    </Button>
                  </Col>
                  <Col md={5}>
                    <Button
                      style={{
                        backgroundColor: "#d4a373",
                        color: "white",
                        fontSize: "1.8rem",
                      }}
                      className="mb-3"
                    >
                      Buy Now
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Product