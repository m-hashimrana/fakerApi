import React from 'react';

const InputField = ({ name, type, onChange, value, placeholder }) => {
	return (
		<input className='inputField' name={name} type={type} onChange={onChange} value={value} placeholder={placeholder} />
	);
};

export default InputField;
