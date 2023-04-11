import './App.css';
import {Routes,Route, BrowserRouter } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/home';
import Education from './components/education';
import Skills from './components/skills';
import Projects from './components/projects';
import More from './components/more';
import Contact from './components/contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav />
    <Routes>
        <Route path='/' element={<h1>Hello! It's me</h1>}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/More' element={<More />}></Route>
        <Route path='/Education' element={<Education />}></Route>
        <Route path='/Projects' element={<Projects />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Skills' element={<Skills />}></Route>
    </Routes> 
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
