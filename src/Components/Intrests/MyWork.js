import React from 'react'
import './MyWork.css'
export default function MyWork() {
    return (
        <div className="MyWork">
            <h1 className="head">My Work</h1>
            <div className="work">
               <div className="proj">
                <img src={process.env.PUBLIC_URL + "/capt.png"}  alt="...." />
               </div>
               <div className="proj">
                <img src={process.env.PUBLIC_URL + "/capt1.png"}  alt="...." />
               </div>
               <div className="proj">
                <img src={process.env.PUBLIC_URL + "/capt2.png"}  alt="...." />
               </div>
            </div>
        
        </div>
    )
}
