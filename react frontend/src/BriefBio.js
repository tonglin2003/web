import React from 'react'
import { Link } from 'react-router-dom'
import Header from './components/WebHeaderAndFooter/Header'
import Footer from './components/WebHeaderAndFooter/Footer'
import Spacer from './components/Spacer'
import './css/styles.css'

function BriefBio() {
    return (
        <>

<Header />

<div className="hero-image">
<img src ="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='img-fluid shadow-4'/>
  <div className="hero-text">
  <h1 className={"herofont"}>Welcome to *Client* Page</h1>
    <p>Here you will learn more about our products and our story</p>
    <Link to="/product/:product_id" style={{textDecoration: "none"}}><button type="button" className="button-6 m-3">Back to Product</button></Link>
  </div>
</div>

<Spacer />

<div className="hero-container">
                <div className="row">
                    <div className="col m-3">
                        <h1 className={"clientbiofont"}>Client Brief Bio</h1>
                        <p className="font fw-bold m-3">Connect Through Justworks</p>
                        <h4 className="m-3 font ">
                            Their slogan etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu volutpat odio
                            facilisis mauris sit amet. Orci a scelerisque purus semper eget. Non sodales neque
                            sodales ut. Tellus at urna condimentum mattis pellentesque id nibh tortor. Tellus
                            mauris a diam maecenas. Phasellus vestibulum lorem sed risus ultricies tristique.
                            Sit amet porttitor eget dolor morbi non ar
                        <br></br>
                        <a href="#" className="fa fa-facebook"></a> <a href="#" className="fa fa-twitter"></a> <a href="#" className="fa fa-linkedin"></a>
                        </h4>

                    </div>
                    <div className="col">
                        <img src={ "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg" }
                             className={"img-fluid w-75 mb-5 rounded"} style={{float: "center" }}/>
                            




                    </div>
                </div>
            </div>
  
           
      <div className="wrapper">
<p className="font fw-bold m-3">Meet Our Team</p>
  
  <img src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="image--cover" />
  <img src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="image--cover" />
  <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="image--cover" />
  <img src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="image--cover" />
  <img src="https://images.pexels.com/photos/13976092/pexels-photo-13976092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="image--cover" />
  <img src="https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="image--cover" />
  <img src="https://images.pexels.com/photos/3474629/pexels-photo-3474629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="image--cover" />
  <img src="https://images.pexels.com/photos/3799717/pexels-photo-3799717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="image--cover" />
</div>
        
         

      <div className="LearnMore card text-center">
        <div className="LearnMore card-header">
          Connections Made Possible by Justworks
        </div>
        <div className="LearnMore card-body">
          <img src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid shadow-4'/>
          <div className="LearnMorecard-footer text-muted">
        Founded in 2022
        </div>
          <p className="LearnMore card-text" >Their slogan etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu volutpat odio facilisis mauris sit amet. Orci a scelerisque purus semper eget. Non sodales neque sodales ut. Tellus at urna condimentum mattis pellentesque id nibh tortor. Tellus mauris a diam maecenas. Phasellus vestibulum lorem sed risus ultricies tristique. Sit amet porttitor eget dolor morbi non arcu risus quis. Volutpat est velit egestas dui. Non nisi est sit amet facilisis magna etiam tempor orci. Mauris a diam maecenas sed enim ut sem viverra. Nec nam aliquam sem et tortor consequat id. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Et malesuada fames ac turpis egestas integer. In est ante in nibh mauris. Adipiscing at in tellus integer feugiat. Gravida rutrum quisque non tellus orci ac auctor.</p>
          <Link to="/browse" style={{textDecoration: "none"}}><button type="button" className="button-6 m-3">Browse Products</button></Link>
        </div>
      </div>


<Spacer />


<div className="container">
  <div className="row">
    <div className="col align-self-start">
    <img className="img-fluid" src="https://i.ibb.co/Wsr9wjX/Pexels-photo-1681010.jpg"/>
    </div>
    <div className="col align-self-center">
    <h1>Testimonials</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu volutpat odio facilisis mauris sit amet. Orci a scelerisque purus semper eget. Non sodales neque sodales ut. Tellus at urna condimentum mattis pellentesque id nibh tortor. Tellus mauris a diam maecenas. Phasellus vestibulum lorem sed risus ultricies tristique. Sit amet porttitor eget dolor morbi non arcu risus quis. Volutpat est velit egestas dui. Non nisi est sit amet facilisis magna etiam tempor orci. Mauris a diam maecenas sed enim ut sem viverra. Nec nam aliquam sem et tortor consequat id. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Et malesuada fames ac turpis egestas integer. In est ante in nibh mauris. Adipiscing at in tellus integer feugiat. Gravida rutrum quisque non tellus orci ac auctor. In eu mi bibendum neque egestas congue quisque. Neque aliquam vestibulum morbi blandit cursus risus at ultrices.
    </p>
    </div>
  </div>
</div>

<Spacer />

<div className="container">
  <div className="row">
    <div className="col align-self-start">
     
    </div>
    <div className="col align-self-start">
    <h1>Testimonials</h1>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu volutpat odio facilisis mauris sit amet. Orci a scelerisque purus semper eget. Non sodales neque sodales ut. Tellus at urna condimentum mattis pellentesque id nibh tortor. Tellus mauris a diam maecenas. Phasellus vestibulum lorem sed risus ultricies tristique. Sit amet porttitor eget dolor morbi non arcu risus quis. Volutpat est velit egestas dui. Non nisi est sit amet facilisis magna etiam tempor orci. Mauris a diam maecenas sed enim ut sem viverra. Nec nam aliquam sem et tortor consequat id. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Et malesuada fames ac turpis egestas integer. In est ante in nibh mauris. Adipiscing at in tellus integer feugiat. Gravida rutrum quisque non tellus orci ac auctor. In eu mi bibendum neque egestas congue quisque. Neque aliquam vestibulum morbi blandit cursus risus at ultrices.
    </div>
    <div className="col align-self-end">
      
     <img className="img-fluid" src="https://i.ibb.co/7SxWmpX/Pexels-photo-14917591.jpg"/>
    </div>
  </div>
</div>
  



<script>
$( "span" ).wrap( "<div><div><p><em><b></b></em></p></div></div>" );
</script>

<Spacer />
            <Footer />
      </>
    )
  }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<BriefBio />);
            
export default BriefBio;
