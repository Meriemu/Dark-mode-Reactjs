import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from './context/ThemeContext'

const DarkMode = () => {
	const { goDark, handleClick } = useContext(DarkModeContext);
	const [position, setPosition] = useState({L: null, R: null});

	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}
	useEffect(() => {
		if (goDark) {
				setPosition(prevState => ({ L: getRandomInt(100), R: getRandomInt(100) }))
				console.log(getRandomInt(100))
		}
	}, [goDark, ]);
	return (
    <div className="container">
		<h2> { goDark ? ' Look for me !' : 'Hey !'}</h2>
		<button 
			className="toggleMode"  style={{ left: goDark && position.L + '%', right: goDark && position.R +'%', position: goDark && 'absolute' }}
			onClick={handleClick} > { goDark ? '🔆' : '🌙' }
		</button>
    </div>
  );
};

export default DarkMode;
