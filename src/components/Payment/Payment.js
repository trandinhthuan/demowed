// import { useSelector } from "react-redux";
// import { Box, Stepper, Step, StepLabel } from "@mui/material";
// import { Formik } from "formik";
// import Shipping from "./Shipping";
// import * as yup from "yup";
// import React, { useState } from "react";
// const initialValues = {
//   billingAddress: {
//     firstNam: "",
//     lastName: "",
//     country: "",
//     street1: "",
//     street2: "",
//     city: "",
//     state: "",
//     zipCode: "",
//   },
//   shippingAddress: {
//     isSameAddress: true,
//     firstName: "",
//     lastName: "",
//     country: "",
//     street1: "",
//     street2: "",
//     city: "",
//     state: "",
//     zipCode: "",
//   },
//   email: "",
//   phoneNumber: "",
// };
// const checkoutSchema = [
//   yup.object().shape({
//     billingAddress: yup.object().shape({
//       firstName: yup.string().required("required"),
//       lastName:  yup.string().required("required"),
//       country:  yup.string().required("required"),
//       street1:  yup.string().required("required"),
//       street2:  yup.string(),
//       city:  yup.string().required("required"),
//       state:  yup.string().required("required"),
//       zipCode:  yup.string().required("required"),
//     }),
//     shippingAddress: yup.object().shape({
//       isSameAddress:yup.boolean(),
//       firstName: yup.string().when("isSameAddress",{
//         is:false,
//         then: yup.string().required("required")
//       }),
//       lastName:  yup.string().when("isSameAddress",{
//         is:false,
//         then: yup.string().required("required")
//       }),
//       country:  yup.string().when("isSameAddress",{
//         is:false,
//         then: yup.string().required("required")
//       }),
//       street1:  yup.string().when("isSameAddress",{
//         is:false,
//         then: yup.string().required("required")
//       }),
//       street2:  yup.string(),
//       city:   yup.string().when("isSameAddress",{
//         is:false,
//         then: yup.string().required("required")
//       }),
//       state:   yup.string().when("isSameAddress",{
//         is:false,
//         then: yup.string().required("required")
//       }),
//       zipCode:   yup.string().when("isSameAddress",{
//         is:false,
//         then: yup.string().required("required")
//       }),
//   }),
// }),
// yup.object().shape({
//   email: yup.string().required("required"),
//   phoneNumber: yup.string().required("required"),
// })
// ]
// const Payment = () => {
//   const [activeStep, setActiveStep] = useState[0];
//   const cart = useSelector((state) => state.cart.cart);
//   const isFirstStep = activeStep === 0;
//   const isSecondStep = activeStep === 1;
//   const handleFormSubmit = async (value, actions) => {
//     setActiveStep(activeStep + 1);
//   };
//   async function makePayment(values) {}
//   return (
//     <div>
//       <Box width="80%" m="100px auto">
//         <Stepper activeStep={activeStep} sx={{ m: "20px 0" }}>
//           <Step>
//             <StepLabel>Bling</StepLabel>
//           </Step>
//           <Step>
//             <StepLabel>Payment</StepLabel>
//           </Step>
//         </Stepper>
//         <Box>
//           <Formik
//             onSubmit={handleFormSubmit}
//             initialValues={initialValues}
//             validationSchema={checkoutSchema[activeStep]}
//           >
//             {({
//               values,
//               errors,
//               touched,
//               handleBlur,
//               handleChange,
//               handleSubmit,
//               setFieldValue,
//             })=>(
//               <form onSubmit={handleSubmit}>
//                 {isFirstStep &&(
//                   <Shipping
//                   values={values}
//                   errors={errors}
//                   touched={touched}
//                   handleBlur={handleBlur}
//                   handleChange={handleChange}
//                   handleSubmit={handleSubmit}
//                   setFieldValue={setFieldValue}
//                   />
//                 )}
//               </form>
//             )}
//           </Formik>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default Payment;
import React from "react";

const Payment = () => {
  return <div className="flex items-center justify-center m-20">Đã Mua Hàng Thành Công</div>;
};

export default Payment;
