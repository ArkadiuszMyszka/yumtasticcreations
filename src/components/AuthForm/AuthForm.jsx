import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Header, InputBox, Input, Button, Icon, ErrorMessageStyled } from "./AuthForm.styled";
import icons from "../../images/ui/input/icons.svg"
import privateApi from '../../services/PrivateApi';

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
        privateApi.post('/register', values)
          .then(response => {
            console.log('Registration successful', response);
          
            if (response.data.token) {
              localStorage.setItem('authToken', response.data.token);
            }
            window.location.href = '/search';
            
            setSubmitting(false);
            resetForm();
          })
          .catch(error => {
            console.error('Registration error', error);
            setErrors({ submit: 'Registration failed. Please try again.' });
            setSubmitting(false);
          });
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit} style={{ position: 'absolute', top: '375px', left: '50%', transform: 'translate(-50%, 0)', width: '335px' }}>
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
        </form>
      )}
    </Formik>
  );
};
