import React from 'react';

const Label = ({ variant, category }) => {
	return <span className={`category ` + `${variant}`}>{category}</span>;
};

export default Label;
