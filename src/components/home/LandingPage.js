import React from "react";
import { Col, Row } from "react-bootstrap";
import { ResponsiveContainer, StyledDINBoldText, StyledText } from "../../TextStyles";
import heroImage from "../../assets/random/img3.jpg";

function LandingPage() {
  return (
    <div>
      <Row
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "550px",
        }}
      >
        <Col className="d-flex justify-content-center align-items-center text-white">
          <div className="d-flex">
            <ResponsiveContainer>
              <StyledText
                style={{
                  fontSize: "30px",
                  display: "inline-block",
                  width: "100%",
                  lineHeight: "1.2",
                  marginBottom: "10px",
                }}
              >
                Shop the Change
                <br /> 
                Style with Purpose
              </StyledText>
              <StyledDINBoldText
                style={{
                  fontSize: "40px",
                  display: "inline-block",
                  width: "50%",
                  
                }}
              >
                EcoTrends
              </StyledDINBoldText>
            </ResponsiveContainer>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default LandingPage;
