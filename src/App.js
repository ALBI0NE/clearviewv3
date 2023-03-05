import Navbar from "./compontents/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Glasses from "./pages/Glasses";
import CareTips from "./pages/CareTips";
import Contact from "./pages/Contact";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Services' element={<Services />}></Route>
          <Route path='/Glasses' element={<Glasses />}></Route>
          <Route path='/CareTips' element={<CareTips />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
