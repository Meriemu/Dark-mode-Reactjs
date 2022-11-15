import React, { useContext, useState, useRef, useEffect } from 'react';
import DarkMode from './component/DarkMode';
import './DarkMode.scss';

import { DarkModeContext } from './component/context/ThemeContext';
function App() {
  const { goDark }= useContext(DarkModeContext);
  const [coord, setCoord] = useState({X:null, Y:null});
  const theme = goDark ? 'dark' : 'light';

  const refCircle = useRef();

  // console.log(theme)
  const htmlTag = document.getElementsByTagName("HTML")[0];
  htmlTag.setAttribute('data-force-color-mode',  theme ); 
  var timer;

    useEffect(() => {
      function mouseStopped() {
        refCircle.current.classList.remove('moving');
      }
      
      document.addEventListener('mousemove', (e) => {
        refCircle.current.classList.add('moving');
        setCoord(prevValue => ({  X : e.pageX,Y: e.pageY }));
      
        // clearTimeout(timer);
        // timer = setTimeout(mouseStopped, 3000);
      });
    }, []);
 

  return (
    <div className="App" ref={refCircle} style={{  '--x': coord.X + 'px', '--y': coord.Y+'px' }}>
      <DarkMode />
    </div>
  );
}

export default App;
