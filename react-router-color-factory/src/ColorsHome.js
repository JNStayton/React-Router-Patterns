import { Link } from 'react-router-dom';

const ColorsHome = ({ colors }) => {
	return (
		<div>
			<p>
				<Link to="/colors/new">Add New Color</Link>
			</p>
			<h3>Select A Color To See The Color:</h3>
			<div>
				{colors.map((color) => (
					<p key={color.name}>
						<Link to={`/colors/${color.name}`}>{color.name}</Link>
					</p>
				))}
			</div>
		</div>
	);
};

export default ColorsHome;
