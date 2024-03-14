// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import React, { useState } from 'react';


import 
{ 
  BrowserRouter ,
   Route,
   Routes
    } from "react-router-dom";



function App() {
  const[mode,setMode]=useState('light') //wather dark or not
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#2b4366'
      showAlert("dark mode has been enabled","success")
      document.title='Taxtutils-Dark Mode'
    }

    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("light mode has been enabled","success")
      document.title='Taxtutils-light Mode'
    }
  }
  return (
          <>  
          {/* <Navbar title="textutiels2"  dropdownmanu="download file" /> */}
          {/* <Navbar/> */}

        
    
          
      <BrowserRouter>
           <Navbar title="textutiels2" abouttext="About us" dropdownmanu="download file" mode={mode} toggleMode={toggleMode} />
           <Alert alert={alert} />
           

        <Routes>
            
            <Route exact path="/" element={<TextFrom showAlert={showAlert} heading="Enter the text to analyse" mode={mode}/>} />

            <Route exact path="/about" element={<About mode={mode} />}></Route>

            {/* <Route exact path="/about" element={<About/>}/> */}

        </Routes>
        
      </BrowserRouter>


{/* 
            <Navbar title="textutiels2" mode={mode} toggleMode={toggleMode} />
              <Alert alert={alert}/>
              <div className="container my-3">
              <TextFrom heading="Enter the text to analyse" mode={mode} />
              <About />
              </div>
             */}

        
  </>
  );
}

export default App;

