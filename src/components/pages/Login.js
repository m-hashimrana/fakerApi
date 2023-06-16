import React, { useEffect, useState } from 'react';
import InputField from '../common/InputField';
import { Formik, useFormik } from 'formik';
import Button from '../common/Button';
import * as Yup from 'yup';
import { authApi } from '../../services/api';
import { getAuthToken } from '../auth/getAuth';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ isAuthroized, setIsAuthroized }) => {
	const navigate = useNavigate();
	const validationSchema = Yup.object().shape({
		// email: Yup.string().email('Invalid email').required('Email is required'),
		password: Yup.string().required('Password is required'),
	});

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema,
		onSubmit: (values) => {
			authApi()
				.then((res) => {
					console.log(res.data.token);
					setIsAuthroized(true);
					localStorage.setItem('token', res?.data?.token);
				})
				.catch(console.log);
		},
	});
	useEffect(() => {
		let token = getAuthToken();
		if (token) navigate('/login/dashboard');
	}, [isAuthroized]);
	return (
		<form onSubmit={formik?.handleSubmit}>
			<div className='inputs'>
				<InputField
					name={'email'}
					type={'text'}
					placeholder={'enter your username'}
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
	const [isAuthroized, setIsAuthroized] = useState(false);
	return (
		<div className='loginWrapper'>
			<h1>Sign in to your account</h1>
			<LoginForm isAuthroized={isAuthroized} setIsAuthroized={setIsAuthroized} />
		</div>
	);
};

export default Login;
