import { useState, useEffect } from "react";
import './App.css';
import {Front} from "./Components/Front.jsx"
import {Footer} from "./Components/Footer.jsx"
import {Header} from "./Components/Header"
import { Sidebar } from "./Components/Sidebar.jsx";
import '../node_modules/font-awesome/css/font-awesome.min.css'
function App() {
 const [value, setvalue] = useState(0)
  const [isopen, setIsopen] = useState(false); //used in header and sidebar
  const [islarge, setIslarge] = useState(window.innerWidth >=768 ? true:false); //used in header and sidebar
  console.log(window.innerWidth, islarge)
     
    const handleResize=e=>{
      window.innerWidth >=768 ? setIslarge(true):setIslarge(false)
    }

    useEffect(() => {
        window.addEventListener("resize", e=>handleResize(e))
    return () => {
       window.removeEventListener("resize", e=>handleResize(e))
    }
  }, [])

  


  return (
   <>
   <Header value={value} setvalue={setvalue} isopen={isopen} setIsopen={setIsopen} islarge={islarge} setIslarge={setIslarge} />
    
    <Sidebar value={value} setvalue={setvalue} isopen={isopen} setIsopen={setIsopen} islarge={islarge} setIslarge={setIslarge} />
   <Front/>
   <Footer islarge={islarge} setIslarge={setIslarge} />
   </>
  );
}

export default App;
