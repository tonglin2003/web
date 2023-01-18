import React from 'react'
import { Link } from 'react-router-dom'
import Header from './components/WebHeaderAndFooter/Header'
import Footer from './components/WebHeaderAndFooter/Footer'
import Spacer from './components/Spacer'
import './css/styles.css'
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from "./components/HomePageFunctions/Category_Cards";
import RecommendDisplay from "./components/HomePageFunctions/recommendDisplay"


function Home() {

    return (
        <>

            <Header />
                <div
                className="image-fluid "
                style={{
                    backgroundImage: "url('https://img.freepik.com/free-photo/romantic-composition_24972-929.jpg?w=2000')",
                    backgroundSize: "cover",
                    maxHeight: "120vh",
                    minHeight: "25vh",
                    color: "#1e2749",

                }}
                >
                    <div style={{background: "rgba(224,228,255,0.3)", padding: "5vw"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img src={ "https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/61786221a8b701a33c2b9f0d_AxiosHQ_Launch_house-ad%20(1).png" }
                                     className={"img-fluid w-75 mb-5 rounded thumbnail"} style={{boxShadow: "10px 5px 2px #707cba"}} />

                                <img src={ "http://succeedwithwp.com/wp-content/uploads/2018/07/kinsta-review-managed-wordpress-hosting.jpeg" }
                                     className={"img-fluid w-75 rounded "} style={{float: "right", boxShadow: "10px 5px 2px #707cba" }} />
                            </div>
                            <div className="col p-3">
                                <h1 className={"title_font"}>Justworks</h1>
                                <p className="m-3 font ">
                                     Justworks is guided by four principles: customer obsession
                                    rather than competitor focus, passion for invention, commitment to operational
                                    excellence, and long-term thinking.
                                </p>
                                <p className="font fw-bold m-3">Find your special discount offer here: </p>
                                <Link to="/browse" className="mx-3" style={{textDecoration: "none"}}><button type="button" className="button-6">Find Discount</button></Link>
                            </div>

                        </div>
                    </div>
                        </div>
                </div>


     <div className={"py-5"} style={{borderBottom: "0.1vh #9facbf solid", borderTop: "0.1vh #9facbf solid"}}>
        <Carousel variant={"dark"}>

            <CarouselItem  image={"https://media.istockphoto.com/id/916092484/photo/women-clothes-hanging-on-hangers-clothing-rails-fashion-design.jpg?s=612x612&w=0&k=20&c=fUpcbOITkQqitglZfgJkWO3py-jsbuhc8eZfb4sdrfE="}
                           category={"Something"}
            />

             <CarouselItem image={"https://www.classcentral.com/report/wp-content/uploads/2021/06/udemy-sidebar.jpg"}
                           category={"Online Courses"} />
        </Carousel>
    </div>

    <div style={{background: "#f4f4f8"}} className="py-5">
        <div className="container">
            <div className="row">
                <RecommendDisplay num={0}
                                  image={"https://i.pcmag.com/imagery/articles/077yPajAahLZZQk744QUkQf-1..v1626098845.png"}
                                  description={"Find the best offer for Online Service Subscription only at Justworks.\n"}
                                  category={"Subscription"}
                                  link={`/browse/categories/Subscription`}
                />
                <RecommendDisplay num={1}
                                  image={"https://blog.hubspot.com/hubfs/best-online-courses.jpg"}
                                  description={"Today is the day to buy Online Courses with the best offer at Justworks.\n"}
                                  category={"Online Course"}
                                  link={"/browse/categories/Online Course"}
                />
                <RecommendDisplay num={2}
                                  image={"https://www.lvhn.org/sites/default/files/styles/max_768x768/public/2019-01/Content%20Image-Physical%20Therapy.jpg?itok=q97tR22a"}
                                  description={"Physical Service provided by Justworks customers will provide convenience."}
                                  category={"Physical Service"}
                                  link={"/browse/categories/Physical Service"}
                />




            </div>
        </div>
    </div>


            <Footer />

        </>
    )
}

export default Home;
