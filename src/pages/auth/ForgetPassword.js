import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../../components/customInput/CustomInput";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { useDispatch } from "react-redux";
import { forgetPasswordAction } from "../../redux/auth/userAction";

const inputs = [
  {
    label: "Email *",
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
        const {name, value} = e.target;
        setFormData({
            ...formData, [name] : value
        })

    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const {email} = formData;
        dispatch(forgetPasswordAction(email))

    }
  return (
    <div>
      <Header />
      <div className="main">
        <Form onSubmit={handleOnSubmit}>
          {inputs.map((input) => {
            return <CustomInput key={input.label} {...input} onChange={handleOnChange}/>;
          })}
          <Button variant="outline-success" type="submit">
            Send Email
          </Button>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default ForgetPassword;
