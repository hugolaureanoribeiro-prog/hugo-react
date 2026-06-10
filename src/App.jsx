import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import DragonBall from './Pages/DragonBall';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
        path="/hugo-react/" 
        element={<Home />} />
        <Route 
        path="/hugo-react/:dragonballId" 
        element={<DragonBall />} 
        />
      </Routes>
    </BrowserRouter>
  )
}

  


export default App