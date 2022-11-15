import React, { useContext, useState, useRef, useEffect } from 'react';
import DarkMode from './component/DarkMode';
import './DarkMode.scss';

import { DarkModeContext } from './component/context/ThemeContext';
function App() {
  const refCircle = useRef();
  const { goDark } = useContext(DarkModeContext);

  const [coord, setCoord] = useState({X:null, Y:null});

  const theme = goDark ? 'dark' : 'light';

  const htmlTag = document.getElementsByTagName("HTML")[0];

  htmlTag.setAttribute('data-force-color-mode',  theme);

  function mouseMoved() {
    refCircle.current.classList.remove('moving');
  }

  useEffect(() => {
    mouseMoved();

    document.addEventListener('mousemove', (e) => {
      refCircle.current.classList.add('moving');
      setCoord(prevValue => ({  X : e.pageX,Y: e.pageY }));
    });
  }, []);
 
  return (
    <div className="App" ref={refCircle} style={{ '--x': coord.X + 'px', '--y': coord.Y+'px' }}>
      <DarkMode />
    </div>
  );
}

export default App;
