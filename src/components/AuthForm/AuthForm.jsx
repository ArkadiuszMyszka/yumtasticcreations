import React, { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Header,
  InputBox,
  Input,
  Button,
  Icon,
  Form,
  ErrorMessageStyled,
  PasswordStrength,
} from "./AuthForm.styled";
import icons from "../../images/ui/input/icons.svg";
import privateApi from "../../services/PrivateApi";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

const checkPasswordStrength = (password) => {
  let strength = 0;
  if (password.length >= 8) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/[0-9]/.test(password)) strength += 1;
  if (/[^A-Za-z0-9]/.test(password)) strength += 1;

  switch (strength) {
    case 0: return 'Very Weak';
    case 1: return 'Weak';
    case 2: return 'Medium';
    case 3: return 'Strong';
    case 4: return 'Very Strong';
    default: return 'Very Weak';
  }
};

export const AuthForm = () => {
  const [passwordStrength, setPasswordStrength] = useState("");

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm, setErrors }) => {
        privateApi
          .post("/register", values)
          .then((response) => {
            console.log("Registration successful", response);
            if (response.data.token) {
              localStorage.setItem("authToken", response.data.token);
            }
            setTimeout(() => {
              window.location.href = "/main";
            }, 1500);
            setSubmitting(false);
            resetForm();
          })
          .catch((error) => {
            console.error("Registration error", error);
            setErrors({ submit: "Registration failed. Please try again." });
            setSubmitting(false);
          });
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <Header>Rejestracja</Header>
          <InputBox>
            <Icon>
              <use href={`${icons}#icon-input_user`}></use>
            </Icon>
            <Field name="name" as={Input} placeholder="Name" />
            <ErrorMessage name="name" component={ErrorMessageStyled} />
          </InputBox>
          <InputBox>
            <Icon>
              <use href={`${icons}#icon-input_mail`}></use>
            </Icon>
            <Field name="email" as={Input} placeholder="Email" />
            <ErrorMessage name="email" component={ErrorMessageStyled} />
          </InputBox>
          <InputBox>
            <Icon>
              <use href={`${icons}#icon-input_lock`}></use>
            </Icon>
            <Field
              name="password"
              as={Input}
              type="password"
              placeholder="Password"
              onChange={(e) => {
                formik.setFieldValue("password", e.target.value);
                setPasswordStrength(checkPasswordStrength(e.target.value));
              }}
            />
            <ErrorMessage name="password" component={ErrorMessageStyled} />
            <PasswordStrength strength={passwordStrength}>
              Password strength: {passwordStrength}
            </PasswordStrength>
          </InputBox>
          <Button type="submit">Sign up</Button>
        </Form>
      )}
    </Formik>
  );
};
