import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import page
import { Home, About, Error, Ai, Ml, Cns, Pe, OE, Cd, Pcc, Sse ,Fsd,Submit} from './pages/Allpages'
// const mongose=require('mangose')
// import Box from './pages/Box'
// import components
// const dburl= "mongodb + srv://y20cs175:<password>@cluster0.zjqwgri.mongodb.net/?retryWrites=true&w=majority"
import Footer from './Footer'
import Navbar from './components/Navbar'
import At from './pages/At'
import Ood from './pages/Ood'
import Sp from './pages/Sp'
import Test from './Test'
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return <>   
    <Router>
      <Navbar />
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="*" element={<Error />} />
            <Route path="/ai" element={<Ai/>}/>
            <Route path="/ml" element={<Ml />} />
            <Route path="/cns" element={<Cns/>} />
            <Route path="/oe" element={<OE/>} />
            <Route path="/pe" element={<Pe />} />
            <Route path="/cd" element={<Cd/>} />
            <Route path="/pcc" element={<Pcc />} />
            <Route path="/sse" element={<Sse />} />
            <Route path="/at" element={<At />} />
            <Route path="/ood" element={<Ood />} />
            <Route path="/sp" element={<Sp />} />
            <Route path="/fsd" element={<Fsd />} />  
            <Route path="/submit" element={<Submit />} />
        <Route path="/test" element={<Test />} />
            {/* <Route path='/cocktail/:id' element={<SingleCocktail/>}/> */}
      </Routes>
      <Footer/>
    </Router>
  </>
}

export default App
