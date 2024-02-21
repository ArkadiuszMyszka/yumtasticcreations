import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import axios from 'axios';
import { Header, InputBox, Input, Button, Icon, ErrorMessageStyled, Form } from "../AuthForm/AuthForm.styled.jsx";

import icons from "../../images/ui/input/icons.svg";
import privateApi from '../../services/PrivateApi';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export const LoginForm = () => {

  
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm, setErrors }) => {
        privateApi.post('/login', values)
          .then(response => {
            console.log('Login successful', response);
            localStorage.setItem('authToken', response.data.token);
            window.location.href = '/search';
          })
          .catch(error => {
            console.error('Login error', error.response.data.message);
            setErrors({ submit: error.response.data.message });
            resetForm();
          });
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Header>Sign In</Header>
          <InputBox>
            <Icon><use href={`${icons}#icon-input_mail`}></use></Icon>
            <Field name="email" as={Input} type="email" placeholder="Email" />
          </InputBox>
          <ErrorMessage name="email" component={ErrorMessageStyled} />
          <InputBox>
            <Icon><use href={`${icons}#icon-input_lock`}></use></Icon>
            <Field name="password" as={Input} type="password" placeholder="Password" />
          </InputBox>
          <ErrorMessage name="password" component={ErrorMessageStyled} />
          <Button type="submit" disabled={isSubmitting}>Sign In</Button>
        </Form>
      )}
    </Formik>
  );
};
