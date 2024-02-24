import React, { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Header,
  InputBox,
  Input,
  Button,
  Icon,
  ErrorMessageStyled,
  Form,
} from "../AuthForm/AuthForm.styled.jsx";
import {
  OkIconStyled,
  ErrorIconStyled,
} from "./LoginForm.styled.jsx";
import icons from "../../images/ui/input/icons.svg";
import privateApi from "../../services/PrivateApi";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const LoginForm = () => {
  const [emailValid, setEmailValid] = useState(false);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm, setErrors }) => {
        privateApi
          .post("/login", values)
          .then((response) => {
            console.log("Login successful", response);
            localStorage.setItem("authToken", response.data.token);
            window.location.href = "/search";
          })
          .catch((error) => {
            console.error("Login error", error.response.data.message);
            setErrors({ submit: error.response.data.message });
            resetForm();
          });
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <Header>Sign In</Header>
          <InputBox>
            <Icon>
              <use href={`${icons}#icon-input_mail`}></use>
            </Icon>
            <Field
              name="email"
              as={Input}
              type="email"
              placeholder="Email"
              validate={(value) => {
                setEmailValid(validationSchema.fields.email.isValidSync(value));
              }}
            />
            <ErrorMessage name="email" component={ErrorMessageStyled} />
          </InputBox>
          {formik.touched.email && formik.errors.email ? (
              <ErrorIconStyled />
            ) : null}
            {emailValid && !formik.errors.email ? <OkIconStyled /> : null}
          <InputBox>
            <Icon>
              <use href={`${icons}#icon-input_lock`}></use>
            </Icon>
            <Field
              name="password"
              as={Input}
              type="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" component={ErrorMessageStyled} />
          </InputBox>
          <Button type="submit">Sign In</Button>
        </Form>
      )}
    </Formik>
  );
};