import React from 'react'
import Header from './components/WebHeaderAndFooter/Header'
import Footer from './components/WebHeaderAndFooter/Footer'
import Spacer from './components/Spacer'
import './css/styles.css'

function Policy() {

    return (
        <>
            <Header />
            <Spacer />
            <div className="container">
                <div className="row">
                    <div className="col-sm">

                        <div className="title_font" style={{paddingLeft:"140px"}}> Store Policy </div>
                            <p className="font" style={{padding:"5px",margin:"10px"}}>
                                We founded the Justworks marketplace with one goal in mind: giving our
                                customers a fair, rewarding and enjoyable shopping
                                experience. Our store policies are detailed below,
                                please have a look and contact us to learn more!
                            </p>
                        </div>

<img src="https://marketplace.jazzhr.com/wp-content/uploads/78032653-justworks-neon-sign-1-scaled.jpg" style={{width:"83vh", height:"55vh" }} />

                    </div>
                </div>
            <div>
                <div className="title_font" style={{textAlign:"center",paddingTop:"40px", paddingBottom:"40px"}}> Our Shipping Policy</div>
                <p className="font" id="questions">
                    <em> <strong> How much does shipping and handling cost? </strong> </em>
                </p>

                    <p className="font" style={{textAlign:"center", margin:"30px"}}>
                        Shipping and handling costs may vary depending upon the rates offered by our shipping
                        carriers and promotions we may run. Justworks® reserves the right to change its shipping
                        policies at any time. The shipping methods offered during checkout will differ based on
                        your shipping address and number of items being ordered.
                    </p>

                <p className="font" style={{textAlign:"center", paddingBottom:"40px"}}>
                    All delivery dates and times are not guaranteed and are estimates provided by the
                    carrier. Please note that orders are processed and shipped Monday through Friday
                    within 1 to 3 business days of the order date.
                </p>
                <p className="font" id="questions">
                    <strong> <em> When will my order be processed? </em> </strong>
                </p>

                <p className="font" style={{textAlign:"center", margin:"30px"}}>
                    Orders are processed and shipped Monday through Friday within 1 to 3
                    business days of the order date. Please note that we do not process
                    orders on weekends and major holidays. All processing times are estimates
                    and may be subject to change.
                </p>


                 <div className="title_font" style={{textAlign:"center",paddingTop:"40px", paddingLeft:"20px", paddingBottom:"40px"}}> Our Return Policy</div>
                        <p className="font" id="questions">
                             <strong> <em> Can I return my items? </em> </strong>
                        </p>

                        <p className="font" style={{textAlign:"center", margin:"30px"}}>
                            For customers that live within the same country as the seller, returns are completely free.
                            The product are to be unworn, unwashed, and unaltered. The purchase must
                            be received by us within 30 days of your order date.
                            Please account for the time it takes for the carrier to ship your item(s) to the sellers
                            warehouse.
                        </p>

                        <p className="font" id="questions">
                             <strong> <em> What if I am outside of the Sellers Country? </em> </strong>
                        </p>

                        <p className="font" style={{textAlign:"center", margin:"30px"}}>
                            If you are outside the sellers country,
                            you may return unworn, unwashed, and unaltered items. Any such return must be received
                            at our warehouse within 30 days of your order date or it will not be accepted. At this
                            time, we are unable to provide free return shipping to anyone outside the contiguous
                            United States.
                        </p>

                      <div className="title_font" style={{textAlign:"center",paddingTop:"40px", paddingLeft:"20px", paddingBottom:"40px"}}> Prohibited Content</div>
                           <p className="font" id="questions">

                             <strong> <em> Buying or selling the following is prohibited on Justworks Marketplace. </em> </strong>
                           </p>

                        <div className="container">
                            <div className="row" style={{paddingTop:"30px"}}>
                              <div className="col-sm" style={{border:"solid"}}>

                                <p className="font" style={{margin:"30px"}}>
                                    <ul>
                                        <li> Alchohol </li>
                                        <li> Used cosmetics </li>
                                        <li> Gambling </li>
                                        <li> Body parts (Humans, animals)</li>
                                        <li> Discrimination </li>
                                        <li> Misleading, Violent, or Hateful </li>
                                        <li> Tabacco Products </li>
                                        <li> Weapons, ammunition, and Explosives</li>
                                    </ul>
                                </p>
                          </div>
                                <div className="col-sm" style={{border:"solid"}}>
                                <p className="font" style={{margin:"30px"}}>
                                    If found promoting such products, your account will be banned from
                                    any future postings and your account will immediately be terminated.
                                    If your listing has been rejected for violating our policies and you
                                    feel it was a mistake, you can request a review by contacting us using either
                                    phone number or email:
                                    <div>
                                    111-111-111 or email us at justworksmarketplace@js.com.
                                    </div>
                                </p>
                                </div>
                            </div>
                        </div>

            <div className="title_font" style={{textAlign:"center",paddingTop:"50px", paddingLeft:"20px", paddingBottom:"1px"}}> Contact Us </div>
                <p className="font" style={{margin:"30px", textAlign:"center"}}>
                    You can contact us directly at 111-111-111 or email us at justworksmarketplace@js.com.
                    <p>
                        Please note our hours range from weekdays 9am-7pm.
                    </p>
                </p>

            </div>

            <Spacer />
            <Footer />

        </>
    )
}

export default Policy;