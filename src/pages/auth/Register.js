import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/customInput/CustomInput";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { createUserAction } from "../../redux/auth/userAction";
import { toast } from "react-toastify";
import { StyledText } from "../../TextStyles";

const inputs = [
  {
    label: "First Name *",
    name: "fName",
    type: "text",
    placeholder: "First Name",
    required: true,
  },
  {
    label: "Email *",
    name: "email",
    type: "email",
    placeholder: "Your email address",
    required: true,
  },
  {
    label: "Password *",
    name: "password",
    type: "password",
    placeholder: "********",
    required: true,
    minLength: 6,
  },
  {
    label: "Country",
    name: "country",
    type: "text",
    placeholder: "Country",
  },
  {
    label: "Address Line 1",
    name: "address1",
    type: "text",
    placeholder: "Main address",
  },
  {
    label: "Suburb",
    name: "suburb",
    type: "text",
    placeholder: "Suburb",
  },
];

const inputs2 = [
  {
    label: "Last Name *",
    name: "lName",
    type: "text",
    placeholder: "Last Name",
    required: true,
  },
  {
    label: "Phone number",
    name: "phone",
    type: "number",
    placeholder: "044*****",
  },
  {
    label: "Confirm Password *",
    name: "confirmPassword",
    type: "password",
    placeholder: "********",
    required: true,
    minLength: 6,
  },
  {
    label: "State/Province",
    name: "state",
    type: "text",
    placeholder: "State",
  },

  {
    label: "Address Line 2",
    name: "address2",
    type: "text",
    placeholder: "Secondary address",
  },
  {
    label: "Zip/Postcode",
    name: "zip",
    type: "text",
    placeholder: "Zip/Postcode",
  },
];

function Register() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const{ user} = useSelector((state) => state.userInfo);

  useEffect(() =>{
    if (user.uid){
      navigate("/")
    }
  },[user])

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;
    if (password !== confirmPassword){
        toast.error("Password donot match");
        return;
        
    }
    await dispatch(createUserAction(formData, navigate));
    
  };

  return (
    <div>
      <Header />
      <div className="main mt-5">
        <Container>
          <StyledText>
            <h1 className="text-color text-center ">New Account</h1>
          </StyledText>

          <Form onSubmit={handleOnSubmit}>
            <Row className="pt-5 ps-5 pe-5">
              <Col className="ms-5 ps-2">
                {inputs.map((input) => {
                  return (
                    <CustomInput
                      key={input.label}
                      {...input}
                      onChange={handleOnChange}
                    />
                  );
                })}
              </Col>
              <Col className="pe-2 me-5">
                {inputs2.map((input) => {
                  return (
                    <CustomInput
                      key={input.label}
                      {...input}
                      onChange={handleOnChange}
                    />
                  );
                })}
              </Col>
            </Row>
            <div className="d-flex justify-content-center align-items-center p-5 mb-5">
              <Button
                style={{
                  width: "150px",
                  backgroundColor: "#d4a373",
                  color: "white",
                }}
              >
                Create Account
              </Button>
            </div>
          </Form>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
