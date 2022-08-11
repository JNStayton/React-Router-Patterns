import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ColorsForm = ({ addColor }) => {
	const navigate = useNavigate();

	const INITIAL_STATE = { name: '', code: '#CCCCFF' };

	const [ formData, setFormData ] = useState(INITIAL_STATE);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addColor({ ...formData });
		setFormData(INITIAL_STATE);
		navigate('/colors/home', { replace: true });
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="Colors-Form">
				<label htmlFor="name">Color Name:</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					placeholder="e.g. Periwinkle"
					required
				/>
				<label htmlFor="code">Color Hex Code:</label>
				<input type="color" id="code" name="code" value={formData.code} onChange={handleChange} required />
				<button>Add My Color!</button>
			</form>
			<p>
				<Link to="/colors/home">Go Back</Link>
			</p>
		</div>
	);
};

export default ColorsForm;
