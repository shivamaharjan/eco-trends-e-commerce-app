import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../../components/customInput/CustomInput";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../redux/auth/userAction";
import { Link, useNavigate } from "react-router-dom";

const inputs = [
  {
    label: "Email *",
    name: "email",
    type: "email",
    placeholder: "your email address",
    required: true,
  },
  {
    label: "Password *",
    name: "password",
    type: "password",
    placeholder: "********",
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
      <div className="main">
        <Form onSubmit={handleOnSubmit}>
          {inputs.map((input) => {
            return (
              <CustomInput
                onChange={handleOnChange}
                key={input.label}
                {...input}
              />
            );
          })}
          <Button variant="outline-success" type="submit">
            Login
          </Button>
          <div className="mt-2">
            Forget Password? <Link to="/forget-password" className="link-color">Click here</Link>
          </div>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
