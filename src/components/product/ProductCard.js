import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProductCard({ thumbnail, title, description, price, slug }) {

  const navigate = useNavigate();
  const handleOnClick = () => {
     const productDetails = {
       thumbnail,
       title,
       description,
       price,
       slug,
     };
    navigate(`/product/${slug}`, { state: { product: productDetails } });

  }
 

  return (
    <Card className="card-width">
      <Card.Img
        onClick={handleOnClick}
        variant="top"
        src={thumbnail}
        style={{ height: "350px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title
          className="text-truncate"
          style={{
            color: "#d4a373",
          }}
        >
          {title}
        </Card.Title>
        <Card.Text className="text-color">$ {price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
