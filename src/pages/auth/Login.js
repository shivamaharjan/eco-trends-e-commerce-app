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
              <Col className="login-form">
                <Form onSubmit={handleOnSubmit}>
                  {inputs.map((input) => {
                    return (
                      <div style={{ marginBottom: "30px" }}>
                        <CustomInput
                          onChange={handleOnChange}
                          key={input.label}
                          {...input}
                        />
                      </div>
                    );
                  })}
                  <Button
                    type="submit"
                    style={{
                      width: "150px",
                      backgroundColor: "#d4a373",
                      color: "white",
                    }}
                  >
                    Sign in
                  </Button>
                  &nbsp;&nbsp;
                  <Link to="/forget-password" className="link-color">
                    Forget Your Password?
                  </Link>
                </Form>
              </Col>

              {/* SignUp Form */}
              <Col className="signup-box">
                <div className="box p-3">
                  <StyledDINBoldText>
                    <p className="text-color">New Customer?</p>
                  </StyledDINBoldText>
                  <StyledText>
                    <p>Create an account with us and,</p>
                    <ul>
                      <li> Check out faster</li>
                      <li>Save multiple shipping address</li>
                      <li>Access your order history</li>
                      <li>Track new orders</li>
                    </ul>
                  </StyledText>
                  <Link
                    to="/register"
                    className="d-flex justify-content-center nav-link"

                  >
                    <Button
                      style={{
                        width: "150px",
                        backgroundColor: "#d4a373",
                        color: "white",
                      }}
                    >
                      Sign up
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
