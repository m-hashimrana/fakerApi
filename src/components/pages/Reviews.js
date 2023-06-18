import React from 'react';
import { reviews } from '../dataHelpers/DataHelpers';

const Reviews = () => {
	return (
		<div>
			{reviews?.map((review) => (
				<>
					<div key={review?.id} style={{ margin: '25px 20px' }}>
						<div>
							<span style={{ fontWeight: 'bold' }}>{review?.name} </span>
							<span style={{ fontWeight: '500' }}> {review?.date}</span>
						</div>
						<p>{review?.opinion}</p>
					</div>
					<div style={{ width: '100%', height: '3px', backgroundColor: '#bcbcbc' }}></div>
				</>
			))}
		</div>
	);
};

export default Reviews;
