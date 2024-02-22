import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Debe de tener 15 caracteres o menos')
        .required('Requerido'),
      lastName: Yup.string()
        .max(10, 'Debe de tener 10 caracteres o menos')
        .required('Requerido'),
      email: Yup.string().email('El email es incorrecto').required('Requerido'),
    }),
  });

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name</label>
        <input
          placeholder="First name"
          type="text"
          {...getFieldProps('firstName')}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          placeholder="Last name"
          {...getFieldProps('lastName')}
        />

        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email address"
          {...getFieldProps('email')}
        />

        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
