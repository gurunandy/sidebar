import './App.css';
import NavBar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Todos from './components/todo';
import Home from "./components/Home";
import Channels from "./components/Channels";
import Games from "./components/Games";
import About from "./components/About.js";


function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Sidebar >
      <Routes>
                  <Route path='/' element = {<Home/>}/>
                    <Route path="/home"  element={<Home />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/channels" element={<Channels />} />
                    <Route path = '/about' element={<About/>}/>
                  </Routes>
        </Sidebar>
    </BrowserRouter>
  </>
  );
}

export default App;
