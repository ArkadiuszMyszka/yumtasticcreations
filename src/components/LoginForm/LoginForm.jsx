import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Header, InputBox, Input, Button, Icon, ErrorMessageStyled, Form } from "../AuthForm/AuthForm.styled.jsx";
import icons from "../../images/ui/input/icons.svg";

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
        axios.post('http://localhost:3001/server/routes/authroutes/loginRoutes', values) // Zaktualizuj URL zgodnie z konfiguracją Twojego API
          .then(response => {
            console.log('Login successful', response);
            localStorage.setItem('authToken', response.data.token); // Zapisywanie token JWT w localStorage
            window.location.href = '/dashboard'; // Przekierowanie na stronę główną/dashboard po pomyślnym logowaniu
          })
          .catch(error => {
            console.error('Login error', error.response.data.message);
            setErrors({ submit: error.response.data.message }); // Ustawić błąd formularza na podstawie odpowiedzi z serwera
            setSubmitting(false);
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
            <ErrorMessage name="email" component={ErrorMessageStyled} />
          </InputBox>
          <InputBox>
            <Icon><use href={`${icons}#icon-input_lock`}></use></Icon>
            <Field name="password" as={Input} type="password" placeholder="Password" />
            <ErrorMessage name="password" component={ErrorMessageStyled} />
          </InputBox>
          <Button type="submit" disabled={isSubmitting}>Sign In</Button>
        </Form>
      )}
    </Formik>
  );
};
