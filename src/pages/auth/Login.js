import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CustomInput from "../../components/customInput/CustomInput";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../redux/auth/userAction";
import { Link, useNavigate } from "react-router-dom";
import { StyledDINBoldText, StyledText } from "../../TextStyles";

const inputs = [
  {
    label: "Email Address",
    name: "email",
    type: "email",
    placeholder: "",
    required: true,
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "",
    required: true,
  },
];

function Login() {
  const [formData, setFormData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const userInfo = useSelector(state => state.userInfo.user)

  useEffect(() => {
    if (userInfo.uid){
        navigate("/")

    }
  }, [userInfo])

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUserAction(formData));

  };

  return (
    <div>
      <Header />
      <div className="main mt-5 mb-3">
        <StyledText>
          <p className="text-color text-center " style={{ fontSize: "50px" }}>
            Sign In
          </p>
        </StyledText>

        <Container className="mt-5">
          <StyledText>
            <Row>
              {/* Login Form */}
              <Col xs={12} md={6} className="mb-4">
                <Form onSubmit={handleOnSubmit}>
                  {inputs.map((input) => (
                    <div key={input.label} className="mb-3">
                      <CustomInput onChange={handleOnChange} {...input} />
                    </div>
                  ))}
                  <Button
                    type="submit"
                    style={{
                      width: "150px",
                      backgroundColor: "#d4a373",
                      color: "white",
                    }}
                    className="mb-3"
                  >
                    Sign in
                  </Button>
                  <span>&nbsp;&nbsp;</span>
                  <Link to="/forget-password" className="link-color">
                    Forget Your Password?
                  </Link>
                </Form>
              </Col>

              {/* SignUp Form */}
              <Col xs={12} md={6} className="mb-4">
                <div className="signup-box p-3">
                  <StyledDINBoldText>
                    <h5 className="text-color">New Customer?</h5>
                  </StyledDINBoldText>

                  <StyledText>
                    <p className="mb-0">Create an account with us and,</p>
                    <ul>
                      <li>Check out faster</li>
                      <li>Save multiple shipping addresses</li>
                      <li>Access your order history</li>
                      <li>Track new orders</li>
                    </ul>
                  </StyledText>
                  <Link
                    to="/register"
                    className="d-flex justify-content-center nav-link mb-3"
                  >
                    <Button
                      style={{
                        width: "150px",
                        backgroundColor: "#d4a373",
                        color: "white",
                      }}
                    >
                      Create Account
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </StyledText>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
