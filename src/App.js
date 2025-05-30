import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Books from './pages/Books';
import Experience from './pages/Experience';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route index element = {<Home/>}/>
          <Route path="/home" element ={<Home/>}/>
          <Route path="/education" element ={<Education/>}/>
          <Route path="/projects" element ={<Projects/>}/>
          <Route path="/books" element ={<Books/>}/>
          <Route path="/experience" element ={<Experience/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
