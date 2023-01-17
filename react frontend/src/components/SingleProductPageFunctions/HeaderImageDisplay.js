import React from 'react'
import {Link} from "react-router-dom";

const HeaderImageDisplay = () => {
    return(
        <div
                className="image-fluid"
                style={{
                    backgroundImage: "url('https://pragativadi.com/wp-content/uploads/2022/11/Clear-Your-Web-Browser.png')",
                    backgroundSize: "cover",
                    maxHeight: "120vh",
                    minHeight: "25vh",
                    color: "#1e2749",
                }}
            >
                <div className="text-center" style={{padding:"15%", background:"rgba(255,255,255,0.5)"}}>
                    {/*<Link to={"/"}>*/}
                    {/*    <a href={""}>*/}
                    {/*        <img src="https://searchvectorlogo.com/wp-content/uploads/2020/08/justworks-inc-logo-vector.png"*/}
                    {/*             alt="Payroll, Benefits, HR Software, and Compliance | Justworks | Justworks"*/}
                    {/*             style={{width:"40%", height: "7vw", objectFit: "cover"}}*/}
                    {/*             className={"rounded"}*/}
                    {/*        />*/}
                    {/*    </a>*/}
                    {/*</Link>*/}
                    <h1 className="title_font">Justworks</h1>
                    <p className="title_font mt-3" style={{fontSize:"2vw"}}>Find your special discount only at Justworks.</p>
                </div>

            </div>
    )
}

export default HeaderImageDisplay;