import React from 'react'
import './Contact.css'
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

export default function Contact() {
    return ( 
    <div className = "contact"id = "contact" >
        <h1 className = "heading" > Contact Me </h1>    
        <div className = "row" > <div className = "content" >
        <h2 className = "title" > contact info </h2> 

        <div className = "info" >
        <h4 className = "info_cont" > < i > <FaPhoneAlt/> </i>+91 8805346933 </h4 >
        <h4 className = "info_cont" > < i > <FaEnvelope/> </i> vrferns17 @gmail.com </h4 >
        <h4 className = "info_cont" > < i > <MdLocationPin/> </i>Goa, India </h4 >
        </div>    
        </div>   


        <div className = "contact_form" >
        <div className = "container" >
        <div className = "raw" >
        <div className = "col-lg-10 offset-lg-1" >
        <div className = "contact_form_container py-5" >
        <div className = "contact_form_title" > Get in Touch </div> 

        <form id = "contact_form" action='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox' >
        <div className = "contact_form_name d-flex " >
        <input type = "text"id = "contact_form_name"placeholder = "Your name"className = "contact_form_name"required = "true" />
        <input type = "email"id = "contact_form_"placeholder = "email"className = "contact_form_email"required = "true" />
        <input type = "number"id = "contact_form_phone"placeholder = "Your Phone Number"className = "contact_form_number"required = "true" />
        </div>   
        <div className = "contact_form_text" > < br/> < br />
        <textarea className = "text_field "placeholder = "Message"cols = "100"rows = "5" >
        </textarea>   
        </div > 
        < div className = "contact_form_button" >
        <button type = "submit"className = "button contact_submit_button" > < i > <FaPaperPlane/> Send Message </i></button >
        </div>

        </form>

        </div>   
        </div>    
        </div>    
        </div>    
        </div> 
        </div>
    </div > 

    )
}