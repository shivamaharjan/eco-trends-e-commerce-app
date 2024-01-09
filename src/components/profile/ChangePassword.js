import React, { useState } from 'react'
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUserAction } from '../../redux/auth/userAction';
import CustomInput from '../customInput/CustomInput';
import {
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";


function ChangePassword() {
  const { user } = useSelector((state) => state.userInfo);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

const inputs = [
  {
    label: "Current Password",
    name: "password",
    type: "password",
    placeholder: "*******",
    required: true,
  },
  {
    label: "New Password",
    name: "newPassword",
    type: "password",
    placeholder: "*******",
    required: true,
  },
  {
    label: "Confirm Password",
    name: "confirmNewPassword",
    type: "password",
    placeholder: "*******",
    required: true,
  },
];

 const handleOnChange = (e) => {
   const { name, value } = e.target;
   setFormData({
     ...formData,
     [name]: value,
   });
 };

const handleOnClick = () => {
  navigate("/profile");
};

 const handleOnSubmit = async (e) => {
   e.preventDefault();

   const auth = getAuth();
   const user = auth.currentUser;

   // Create credentials for reauthentication
   const credentials = EmailAuthProvider.credential(
     user.email,
     formData.password
   );

   try {
     // Reauthenticate user
     await reauthenticateWithCredential(user, credentials);

     // If reauthentication is successful, update the password
     await updatePassword(user, formData.newPassword);

     // Optionally, dispatch an action to update the user's information in the Redux store
     // dispatch(updateUserAction({ ...user, password: formData.newPassword }));

     // Redirect or provide user feedback
     navigate("/profile");
   } catch (error) {
     console.error("Error changing password:", error.message);
     // Handle specific errors or display user-friendly messages
   }
 };
  
  return (
    <div>
      <Header />
      <div className="main">
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
              Change Password
            </Button>
          </div>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default ChangePassword;