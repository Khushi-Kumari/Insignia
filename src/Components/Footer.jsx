import React from 'react'
import img1 from "../images/logo.png"
export const Footer = ({islarge, setIslarge}) => {
    return (
        <div className="container mb-5">
       
            <div className="row align-items-center mb-5">
             <div className="col  text-center  h5 lh-base"><img src={img1} style={{height:"45px",width:"45px", border:"2.6px solid rgb(0, 247, 255)" ,borderRadius:"100%"}} alt="" className="me-2" /><br/>Insignia</div> 
            <div className="col text-center  h6 lh-base">About <br />Profiles <br />Features<br />Carriers </div>
            <div className="col  text-center h6 lh-base">Help<br />Home <br />Contact <br />Goto </div>
            {islarge?
            <div className="col text-center  h6 lh-lg ">Social <br /><i className="fa fa-facebook fa-2x" aria-hidden="true"></i> <br /> <i className="fa fa-twitter fa-2x" aria-hidden="true"></i><br /> <i className="fa fa-instagram fa-2x" aria-hidden="true"></i> </div>
            : 
            <div className=" h6 text-center pt-5 mb-0"> <i className="fa fa-facebook fa-2x me-3" aria-hidden="true"></i><i className="fa fa-twitter fa-2x me-3" aria-hidden="true"></i> <i className="fa fa-instagram fa-2x" aria-hidden="true"></i> </div>
            }
            </div>
<div className="h6 text-center">&copy; Insignia 2020, All Rights Reserved</div>

        </div>
    )
}
