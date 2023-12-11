// import * as yup from "yup";

// let formSchema = yup.object().shape({
//   fName: yup.string().required("First name is required"),
//   lName: yup.string().required("Last name is required"),
//   phone: yup.string().matches(/^\d+$/, "Phone must contain only digits"),
//   email: yup
//     .string()
//     .email("Invalid email format")
//     .required("Email is required"),
//   password: yup
//     .string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required"),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password"), null], "Passwords must match")
//     .required("Confirm Password is required"),
// });
// const isValid = validationSchema.isValidSync(dataToValidate);

//  if (isValid) {
//    console.log("Validation successful");
//    dispatch(createUser(formData));
//  } else {
//    console.error("Validation failed");
//    const validationErrors = formSchema.validateSync(formData, {
//      abortEarly: false,
//    });
//    console.error("Validation errors:", validationErrors);
//  }

// const isValid = formSchema.isValidSync(formData);
