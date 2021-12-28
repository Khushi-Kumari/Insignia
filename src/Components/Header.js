import React from "react";
import img1 from "../images/logo.png"

export const Header = ({ isopen, setIsopen, islarge, setIslarge,isactive ,setisactive }) => {
  return (
    <>
      <div className="shadow-sm sticky-top header pt-4">
        <div className="container px-5 py-2">
          {!islarge && (
            <div className="row align-items-center ">
              <div className="col">
                <b
                  className={isopen ? "" : "fa fa-bars "  }
                  // we could also use cross (X) icon in isopen ( fa fa-times )
                  // it is not mandatory to use italic tag to wrap font icons ..we can use bold tag also
                  onClick={() => setIsopen(!isopen)}
                  aria-hidden="true"
                >
                  {isopen ? "X" : ""}
                  {!isopen ?<span className="h1 ps-3">Insignia</span>:null}
                </b>
              </div>
              <div className="col text-center"><img src={img1} style={{height:"45px",width:"45px", border:"2.6px solid rgb(0, 247, 255)" ,borderRadius:"100%"}} alt="" className="" /></div>
            </div>
          )}
          {islarge && <div className="row align-items-center"> 
         <div className="col-4 h1 "> {!isopen?<> <img src={img1} className="me-3" style={{height:"45px",width:"45px", border:"2.6px solid rgb(0, 247, 255)" ,borderRadius:"100%"}}/><span>Insignia </span></> : null} </div>
          
          <div className="col-8 text-center">
           <ul className="d-flex justify-content-between align-items-center p-0  m-0 "><li  className="">About</li>
            <li  className="">Help</li>
            <li  className="">Features</li>
            <li  className="">Sign-Up</li>
            <li  className="">Request-Demo</li></ul>
          
          {/* <li  onClick={()=>setisactive(true)} style={isactive ?{color:"rgb(0,247,255)" }:null} className="">Request-Demo</li></ul> */}
          
          </div>
          
          
          
          
          
          
          </div>}
        </div>
      </div>
    </>
  );
};
