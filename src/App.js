import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Education from './pages/Education';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route index element = {<Home/>}/>
          <Route path="/home" element ={<Home/>}/>
          <Route path="/education" element ={<Education/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
