import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navmenu from './Components/Navmenu';
import Profile from './Components/Home/Profile';
import Info from './Components/AboutMe/Info';
import MyWork from './Components/Intrests/MyWork';
import Contact from './Components/ContactMe/Contact';
import Footer from './Components/Footer/Footer';

export default function App() {
    return ( 
       <>

        <Navmenu/>
        <Profile/>
        <Info/>
        <MyWork/>
        <Contact/>
        <Footer/>


       </>
    );
}