import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { StyledText } from "../../TextStyles";
import CustomInput from "../../components/customInput/CustomInput";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { forgetPasswordAction } from "../../redux/auth/userAction";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const inputs = [
  {
    label: "Email Address",
    name: "email",
    type: "email",
    required: true,
    placeholder: "xyz@abc.com",
  },
];

function ForgetPassword() {
  const [formData, setFormData] = useState();
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { email } = formData;
    dispatch(forgetPasswordAction(email));
  };
  return (
    <div>
      <Header />
      <div className="main mt-5">
        <Container
          className=" d-flex flex-column justify-content-center align-items-center"
          style={{ maxWidth: "550px", margin: "auto" }}
        >
          <StyledText>
            <h1 className="text-color text-center ">Reset Password</h1>
          </StyledText>
          <StyledText className="p-5 text-center">
            <p>
              Fill in your email below to request a new password. An email will
              be sent to the address below containing a link to verify your
              email.
            </p>
          </StyledText>
        </Container>

        <Container style={{maxWidth:"550px"}}>
          <div className="ms-5 me-5">
            <Form onSubmit={handleOnSubmit}>
              {inputs.map((input) => {
                return (
                  <CustomInput
                    key={input.label}
                    {...input}
                    onChange={handleOnChange}
                  />
                );
              })}
              <div className=" d-flex flex-column justify-content-center align-items-center">
                <Button
                  style={{
                    width: "150px",
                    backgroundColor: "#d4a373",
                    color: "white",
                  }}
                >
                  Reset Password
                </Button>
              </div>
            </Form>
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
}

export default ForgetPassword;
