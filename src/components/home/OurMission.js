import React from 'react'
import { Col, Row } from 'react-bootstrap'
import heroImage from "../../assets/random/img3.jpg";

function OurMission() {
  return (
    <div
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "550px",
      }}
    >
      <Row
        style={{
          marginLeft: "30px",
          marginRight: "30px",
          color: "white",
          fontFamily: "Futura, sans-serif",
        }}
      >
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column "
          style={{ minHeight: "70vh" }}
        >
          <div className="mt-auto">
            <h5 style={{ margin: 0 }}>Our Mission</h5>
            <h1 className="mb-5" style={{ fontSize: "60px", margin: 0 }}>
              Live Sustainably
            </h1>
            <h5>
              EcoTrends strives to lead a green revolution, offering sustainable
              alternatives to inspire environmentally conscious choices for a
              healthier planet.
            </h5>
          </div>
        </Col>
        {/* <Col xs={12} md={6} className="d-none d-md-block mt-3">
          <div className="mt-auto">
            <h5 style={{ margin: 0 }}>Our Achievements</h5>
            <h1 className="mb-5" style={{ fontSize: "60px", margin: 0 }}>
              Live Sustainably
            </h1>
            <ul>
              <li><h5>
              Reduced tons of plastic waste, fostering a community dedicated to
              sustainable living.
            </h5></li>
            <li> <h5>
              Contributed to global initiatives, supporting reforestation, clean
              water, and biodiversity conservation."
            </h5></li>
            <li> <h5>
              Established impactful partnerships with eco-friendly brands and
              organizations.
            </h5></li>
            <li><h5>
              Inspired individuals through awareness campaigns, promoting
              informed choices for a greener future.
            </h5></li>
            </ul>
            
           
           
            
          </div>
        </Col> */}
      </Row>
    </div>
  );
}

export default OurMission