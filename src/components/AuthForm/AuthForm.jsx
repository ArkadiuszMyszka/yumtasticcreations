import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Header, InputBox, Input, Button, Icon, Form, ErrorMessageStyled } from "./AuthForm.styled";
import icons from "../../images/ui/input/icons.svg"
import { privateApi } from '../../services/PrivateApi';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
});

export const AuthForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm, setErrors }) => {
        // Tutaj wykonujemy wywołanie API
        privateApi.post('/auth/authRegister', values)
          .then(response => {
            console.log('Registration successful', response);
            setSubmitting(false);
            resetForm();
            // Tutaj należy dodać przekierowanie lub wyświetlić komunikat o sukcesie
          })
          .catch(error => {
            console.error('Registration error', error);
            setErrors({ submit: 'Registration failed. Please try again.' });
            setSubmitting(false);
          });
      }}
    >
      {formik => (
        <Form onSubmit={formik.handleSubmit}>
          <Header>Registration</Header>
          <InputBox>
            <Icon><use href={`${icons}#icon-input_user`}></use></Icon>
            <Field name="name" as={Input} placeholder="Name" />
            <ErrorMessage name="name" component={ErrorMessageStyled} />
          </InputBox>
          <InputBox>
            <Icon><use href={`${icons}#icon-input_mail`}></use></Icon>
            <Field name="email" as={Input} placeholder="Email" />
            <ErrorMessage name="email" component={ErrorMessageStyled} />
          </InputBox>
          <InputBox>
            <Icon><use href={`${icons}#icon-input_lock`}></use></Icon>
            <Field name="password" as={Input} placeholder="Password" />
            <ErrorMessage name="password" component={ErrorMessageStyled} />
          </InputBox>
          <Button type="submit">Sign up</Button>
        </Form>
      )}
    </Formik>
  );
};
