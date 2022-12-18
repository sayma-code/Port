import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import About from './Components/About';
import Work from './Components/Work';
import OtherProject from './Components/OtherProject';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Nav/>
    <Header/>
    <About/>
    <Work/>
    <OtherProject/>
    <Contact/>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<div>Default Page Content</div>}/>
    <Route path="/resume" element={<div>Play Page Content</div>}/>
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
