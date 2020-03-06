import React from 'react';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import { useHistory } from 'react-router-dom';
import {FormField} from '../../components';

interface LoginForm {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Email precisa ser um email válido')
    .required('Email é obrigatório'),
  password: Yup.string()
    .trim()
    .required('Senha é obrigatória'),
});

export const LoginForm: React.FC = () => {
  let history = useHistory();
  const {errors, handleSubmit, handleChange, values} = useFormik<LoginForm>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
      history.push('school/dashboard');
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <FormField id="email"
                 name="email"
                 title="Email"
                 type="email"
                 placeholder="some@email.com"
                 iconCode="fa-user"
                 onChange={handleChange}
                 value={values.email}
                 error={errors.email}
      />
      <FormField id="password"
                 name="password"
                 title="Password"
                 type="password"
                 iconCode="fa-key"
                 onChange={handleChange}
                 value={values.password}
                 error={errors.password}
      />
      <button className="button is-light is-info is-fullwidth" type="submit">Entrar</button>
    </form>
  )
};
