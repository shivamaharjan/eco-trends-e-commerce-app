import React from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";

function ProductCard({ thumbnail, title, description, price }) {
  const renderTooltip = (props) => (
    <Tooltip id="tooltip">
      <strong>{title}</strong>
    </Tooltip>
  );

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={thumbnail}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <OverlayTrigger placement="bottom" overlay={renderTooltip}>
          <Card.Title className="text-truncate">{title}</Card.Title>
        </OverlayTrigger>
        <Card.Text>$ {price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
