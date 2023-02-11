import { useEffect, useRef, useState } from 'react';
import './App.css';
import MainContent from './Components/MainContent';
import SidePanel from './Components/SidePanel';

function App() {
  const [quesColor, setQuesColor] = useState('white');
  // const changeColor = (btn) =>{
    
  // }
  return (
    <>
      <div className='container'>
        <h3>Demo Online Test</h3>
        <div className='mainContainer'>
          {/* hi */}
          <MainContent quesColor={quesColor} setQuesColor={setQuesColor} />
          <SidePanel quesColor={quesColor} />
        </div>
        <h4>&copy; Addmen</h4>
      </div>

    </>
  );
}

export default App;
