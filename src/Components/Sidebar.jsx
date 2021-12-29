import React from 'react'
import Data from "./Data.jsx"

export const Sidebar = ({isopen,setIsopen , islarge, setIslarge ,value ,setvalue}) => {
   
   if(islarge){
       setIsopen(false)
   }
    return (
        <>
         <div className={ isopen ? "dark" : "" } onClick={()=>setIsopen(false)}></div>     {/*  classname=dark */}
          <div className= {isopen?"open sidebar" : "sidebar" }>
          <div className="px-5 text-center">
          <div className="h1 pt-4">Insignia</div>
          <hr />
          <ul className="">
            
            {
                Data.map((item,index)=>{return(
                    <li className={"py-4 " + (index===value?"active":null) } onClick={()=>setvalue(index)}  key={index}>{item.topic}</li>
                )})
            }

          {/* <li className="py-4">About</li>
          <li className="py-4">Help</li>
          <li className="py-4">Features</li>
          <li className="py-4">Sign-up</li>
          <li className="py-4">Request-Demo</li> */}
          
          </ul>

          </div>
          
          
          
          
          </div>
        </>
    )
}
