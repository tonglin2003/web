import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Spacer from './components/Spacer'
import './css/styles.css'

function BriefBioReact() {

    return (
        <>
            <Header />
            <Spacer />

            <div className="hero-container">
                <div className="row">
                    <div className="col m-3">
                        <h1 className={"title_font"}>Client Brief Bio</h1>
                        <h4 className="m-3 font ">Their slogan etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu volutpat odio facilisis mauris sit amet. Orci a scelerisque purus semper eget. Non sodales neque sodales ut. Tellus at urna condimentum mattis pellentesque id nibh tortor. Tellus mauris a diam maecenas. Phasellus vestibulum lorem sed risus ultricies tristique. Sit amet porttitor eget dolor morbi non ar 
                        </h4>
                        <p className="font fw-bold m-3">Learn More</p>
                        
                    </div>
                    <div className="col">
                        <img src={ "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg" }
                             className={"img-fluid w-75 mb-5 rounded"} style={{float: "center" }}/>


                    </div>
                </div>
            </div>


            <Spacer />
            <Footer />

        </>
    )
}

export default BriefBioReact;
