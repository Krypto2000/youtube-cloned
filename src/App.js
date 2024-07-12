import React, { useEffect } from 'react'
import { useState } from 'react';
import { Container } from 'react-bootstrap'
import { Header } from './component/header/Header'
import { Sidebar } from './component/sidebar/Sidebar'
import  Homescreen  from './screen/homescreen/Homescreen'
import LoginScreen from './screen/homescreen/LoginScreen/LoginScreen';
import "./_App.scss"
import { Route, Routes, Navigate, useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';


const Layout = ({children})=>{
  const [sidebar,toggleSidebar]= useState(false); 

  const handleToggleSidebar= ()=>toggleSidebar(value=>!value)
  return(
    <>
     {<><Header handleToggleSidebar={handleToggleSidebar} /><div className='app_container border border-info'>
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className='app_main border border-warning'>
          {children}
        </Container>

      </div></> 
    }
    </>
  )
}
const App = () => {
  const {accessToken, loading} = useSelector(state=>state.auth)
  
  const history = useNavigate()
  
  useEffect(()=>{

    if (!loading && !accessToken){
      history('/auth');
    }

  },[accessToken, loading,history])
  return (
    
      <Routes>
        <Route path="/" element={<Layout><Homescreen /></Layout>} />
        <Route path="/auth" element={<LoginScreen />} />
        <Route path="/search" element={<Layout><h1>Search me</h1></Layout>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    
  );
}

export default App
