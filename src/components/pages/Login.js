import React, { useState } from 'react';
import InputField from '../common/InputField';
import { Formik, useFormik } from 'formik';
import Button from '../common/Button';
import * as Yup from 'yup';

const LoginForm = ({ user, setUser }) => {
	const validationSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Email is required'),
		password: Yup.string().required('Password is required'),
	});

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema,
		onSubmit: (values) => {
			return (
				setUser({
					email: values?.email,
					password: values?.password,
				}),
				localStorage.setItem('user', JSON.stringify(values))
			);
		},
	});

	return (
		<form onSubmit={formik?.handleSubmit}>
			<div className='inputs'>
				<InputField
					name={'email'}
					type={'email'}
					placeholder={'enter your email'}
					value={formik?.values?.email}
					onChange={formik?.handleChange}
				/>
				{formik.touched.email && formik.errors.email && <p style={{ color: 'red' }}>{formik.errors.email}</p>}
				<InputField
					name={'password'}
					type={'password'}
					placeholder={'********'}
					value={formik?.values?.password}
					onChange={formik?.handleChange}
				/>
				{formik.touched.password && formik.errors.password && <p style={{ color: 'red' }}>{formik.errors.password}</p>}
			</div>
			<Button type='submit' width={'35%'} height={'30px'} borderRadius={'12px'} bgc={'#FF8C38'} title={'Login'} />
		</form>
	);
};

const Login = () => {
	const [user, setUser] = useState({});
	return (
		<div className='loginWrapper'>
			<h1>Sign in to your account</h1>
			<LoginForm user={user} setUser={setUser} />
		</div>
	);
};

export default Login;
