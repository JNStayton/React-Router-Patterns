import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';

const ViewColors = ({ findColorIdxByName, color }) => {
	const { name } = useParams();

	useEffect(
		() => {
			findColorIdxByName(name);
		},
		[ findColorIdxByName, name ]
	);

	return (
		<div>
			{color ? (
				<div style={{ backgroundColor: color.code }} id={color.code}>
					<h1>Your Color: {color.name.toUpperCase()}</h1>
					<p>
						<Link to="/colors/home">Go Back</Link>
					</p>
				</div>
			) : (
				<Navigate to="/colors/home" replace />
			)}
		</div>
	);
};

export default ViewColors;
