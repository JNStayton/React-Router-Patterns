import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import ColorsHome from './ColorsHome';
import ColorsForm from './ColorsForm';
import ViewColors from './ViewColors';

function App() {
	const INITIAL_STATE = [
		{ name: 'Fuschia', code: '#FF00FF' },
		{ name: 'Jade', code: '#00A36C' },
		{ name: 'Midnight', code: '#301934' }
	];

	const [ colors, setColors ] = useState(INITIAL_STATE);
	const [ colorIdx, setColorIdx ] = useState(0);

	const addColor = (newColor) => {
		setColors([ newColor, ...colors ]);
	};

	const findColorIdxByName = (name) => {
		let idx = colors.findIndex((color) => color.name === name);
		setColorIdx(idx);
	};

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/colors/home" element={<ColorsHome colors={colors} />} />
					<Route path="/colors/new" element={<ColorsForm addColor={addColor} />} />
					<Route
						path="/colors/:name"
						element={<ViewColors findColorIdxByName={findColorIdxByName} color={colors[colorIdx]} />}
					/>
					<Route path="*" element={<Navigate to="/colors/home" replace />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
