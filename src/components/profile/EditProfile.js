import React, { useState } from 'react'
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Row } from 'react-bootstrap';
import CustomInput from '../customInput/CustomInput';
import { createUserAction } from '../../redux/auth/userAction';
import { useNavigate } from 'react-router-dom';

function EditProfile() {
  const { user } = useSelector(state => state.userInfo)
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };



    const handleOnSubmit = async (e) => {
      e.preventDefault();
      await dispatch(createUserAction(formData, navigate));
    };

    const handleOnClick = () => {
      navigate("/profile")
    }

  const inputs = [
    {
      label: "First Name *",
      name: "fName",
      type: "text",
      placeholder: "First Name",
      required: true,
      value: user.fName,
    },
    {
      label: "Last Name *",
      name: "lName",
      type: "text",
      placeholder: "Last Name",
      required: true,
      value: user.lName,
    },
    {
      label: "Email *",
      name: "email",
      type: "email",
      placeholder: "Your email address",
      required: true,
      value: user.email,
    },

    {
      label: "Phone number",
      name: "phone",
      type: "number",
      placeholder: "044*****",
      value: user.phone,
    },
    {
      label: "Country",
      name: "country",
      type: "text",
      placeholder: "Country",
      value: user.country,
    },
    {
      label: "Address Line 1",
      name: "address1",
      type: "text",
      placeholder: "Main address",
      value: user.address1,
    },
    {
      label: "Suburb",
      name: "suburb",
      type: "text",
      placeholder: "Suburb",
      value: user.suburb,
    },

    {
      label: "State/Province",
      name: "state",
      type: "text",
      placeholder: "State",
      value: user.state,
    },
    {
      label: "Zip/Postcode",
      name: "zip",
      type: "text",
      placeholder: "Zip/Postcode",
      value: user.zip,
    },

    {
      label: "Address Line 2",
      name: "address2",
      type: "text",
      placeholder: "Secondary address",
      value: user.address2,
    },
  ];
  
  return (
    <div>
      <Header />
      <div className="main pt-5 ps-5 pe-5">
        <Button
          onClick={handleOnClick}
          style={{
            width: "100px",
            backgroundColor: "#d4a373",
            color: "white",
          }}
        >
          Go Back
        </Button>
        <Form className="mt-5" onSubmit={handleOnSubmit}>
          {inputs.map((input) => {
            return (
              <CustomInput
                key={input.label}
                {...input}
                onChange={handleOnChange}
              />
            );
          })}
          <div className="d-flex justify-content-center align-items-center p-5 mb-5">
            <Button
              style={{
                width: "150px",
                backgroundColor: "#d4a373",
                color: "white",
              }}
            >
              Edit Details
            </Button>
          </div>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default EditProfile;