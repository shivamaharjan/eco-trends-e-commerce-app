import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { StyledDINBoldText, StyledText } from "../../TextStyles";
import ProductCard from "../product/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductAction } from "../../redux/product/productAction";
import CategoryNav from "./CategoryNav";
import img1 from "../../assets/random/img3.jpg";



function CategoryBody() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryHeading, setCategoryHeading] = useState("");

  React.useEffect(() => {
    dispatch(getAllProductAction());
  }, []);

    const { productList } = useSelector((state) => state.productInfo);
    const dispatch = useDispatch();

      const handleCategoryClick = (category, head) => {
        setSelectedCategory(category);
        setCategoryHeading(head)
      };

  const filteredProducts =
    productList && productList.length > 0
      ? productList.filter(
          (product) =>
            selectedCategory === "" ||
            (product.parentCategory &&
              product.parentCategory
                .toLowerCase()
                .includes(selectedCategory.toLowerCase()))
        )
      : [];


   const handleOnClick = () => {
     setSelectedCategory(""); // Reset to "Shop all"
   };


  return (
    <div>
      <div>
        <Container>
          <Row className="p-5 g-lg-5 g-md-5 g-sm-3 mt-5 mb-5">
            <Col onClick={() => handleCategoryClick("Wellness-and-Style", "Wellness and Style")}>
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
            <Col onClick={() => handleCategoryClick("Eco-Essentials", "Eco-Essentials")}>
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
            <Col onClick={() => handleCategoryClick("Green-Living", "Green Living")}>
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

      <Row className="text-color flex-column justify-content-center">
        <Col className="center-on-xs">
          <StyledDINBoldText>
            <h2 onClick={handleOnClick}>{categoryHeading|| "Shop all"}</h2>
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
        {productList && productList.length > 0 ? (
          <Row className="justify-content-center mt-5">
            {filteredProducts.map((product) => (
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
        ) : (
          <div>Loading products...</div>
        )}
      </div>
    </div>
  );
}

export default CategoryBody;
