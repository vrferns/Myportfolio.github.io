import React from 'react'
import './Profile.css';
export default function Profile() {
    return ( 
    <div className = 'profile' >
        <h1 className = 'heading' > HOME </h1>  
        <div className = 'profile-parent' >
        <div className = 'profile-details' >
        <div className = 'cols' >
        <div className = "profile-detail" >
        <span className = "primary-text " > 
        { " " }
        Hello I 'm <span className="higghlighted-text">Valentina Fernandes</span>   
        </span>   
        </div>   
        <div className = "profile-role" >
        <span className = "primary-text" > 
        { "" } 
        <h1 > I 'm a <br/> Computer Engineering <br/> Student  </h1>  
        </span>  
        <span className = "profile-role-tagline" >
        I 'm in Third year of my Diploma.  
        </span> 
         </div>      
         <div className = 'porile-option' >
        <button className = "btn primary-btn" > 
        { "" }
        Hire Me { " " } 
        </button>  
        <a href = "\myMarksheet.pdf"download = "\myMarksheet.pdf" >
        <button className = "btn highlighted-btn" > my MarksSheet </button> 
        </a>  
        </div>  
        </div>  
        <div className = 'profile-picture' >
        <div className = 'profile-picture-background' ></div> 
        </div>  
        </div>  
        </div> 


        </div>  
    );
}