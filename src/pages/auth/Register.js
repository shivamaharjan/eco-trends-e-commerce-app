import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/customInput/CustomInput";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { createUserAction } from "../../redux/auth/userAction";
import { toast } from "react-toastify";

const inputs = [
  {
    label: "First Name *",
    name: "fName",
    type: "text",
    placeholder: "First Name",
    required: true,
  },
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
    label: "Confirm Password *",
    name: "confirmPassword",
    type: "password",
    placeholder: "********",
    required: true,
    minLength: 6,
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
      <div className="main p-5">
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

          <Button variant="outline-success" type="submit">
            Register
          </Button>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
