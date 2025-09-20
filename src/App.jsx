import React from "react"
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Notfound from "./pages/Notfound.jsx";
import Features from "./pages/Feature.jsx";
import FAQs from "./pages/FAQs.jsx";
import Analytics from "./pages/Analytics.jsx";
import Contact from "./pages/Contact";
import Signup from "./Signup.jsx"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return(
 <>
<Router>
  <Routes>
 <Route index element={<Home />} />
  <Route path='login' element={<Login />} />
  <Route path='*' element={<Notfound />} />
  <Route path='features' element={<Features />} />
   <Route path='faqs' element={<FAQs />} />
    <Route path='analytics' element={<Analytics />} />
     <Route path='contacts' element={<Contact />} />
     <Route path='Signup' element={<Signup />} />

  </Routes>
</Router>

 </>
  )
}

export default App