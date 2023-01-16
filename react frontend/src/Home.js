import React from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Spacer from './components/Spacer'
import './css/styles.css'
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from "./components/Category_Cards";
import RecommendDisplay from "./components/recommendDisplay"




function Home() {

    return (
        <>
            <Header />

            <div className="container my-5" >
                <div className="row">
                    <div className="col m-3">
                        <h1 className={"title_font"}>Justworks</h1>
                        <p className="m-3 font ">
                             Justworks is guided by four principles: customer obsession
                            rather than competitor focus, passion for invention, commitment to operational
                            excellence, and long-term thinking.
                        </p>
                        <p className="font fw-bold m-3">Find your special discount offer here: </p>
                        <Link to="/browse" className="mx-3" style={{textDecoration: "none"}}><button type="button" className="button-6">Browse Product</button></Link>
                    </div>
                    <div className="col">
                        <img src={ "https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/61786221a8b701a33c2b9f0d_AxiosHQ_Launch_house-ad%20(1).png" }
                             className={"img-fluid w-75 mb-5 rounded thumbnail"} style={{float: "right" }}/>

                        <img src={ "http://succeedwithwp.com/wp-content/uploads/2018/07/kinsta-review-managed-wordpress-hosting.jpeg" }
                             className={"img-fluid w-75 rounded "}/>
                    </div>
                </div>
            </div>


     <div className={"py-5 my-5"} style={{borderBottom: "0.1vh #9facbf solid", borderTop: "0.1vh #9facbf solid", background: "#ebedf0"}}>
        <Carousel variant={"dark"}>

            <CarouselItem  image={"https://media.istockphoto.com/id/916092484/photo/women-clothes-hanging-on-hangers-clothing-rails-fashion-design.jpg?s=612x612&w=0&k=20&c=fUpcbOITkQqitglZfgJkWO3py-jsbuhc8eZfb4sdrfE="} category={"Something"}/>

             <CarouselItem image={"https://www.classcentral.com/report/wp-content/uploads/2021/06/udemy-sidebar.jpg"} category={"Online Courses"} />
        </Carousel>
    </div>

    <div className="container">
        <div className="row">
            <RecommendDisplay num={0}
                              image={"https://i.insider.com/60a2c77ef27b4c0019444ece?width=1200&format=jpeg"}
                              description={"Find the best offer for women's clothing only at Justworks.\n"}
                              category={"Women's Clothing"}
                              link={`/browse/categories/women's clothing`}
            />
            <RecommendDisplay num={1}
                              image={"https://www.werd.com/wp-content/uploads/2022/08/taylor-stitch.jpg"}
                              description={"Today is the day to buy men's clothing with the best offer at Justworks.\n"}


                              //Today is the day to buy men's clothing with the best offer at Justworks.
                              category={"Men's Clothing"}
                              link={"/browse/categories/men's clothing"}
            />
            <RecommendDisplay num={2}
                              image={"https://kinsta.com/wp-content/uploads/2022/11/kinsta-cloud-hosting.jpg"}
                              description={"Technology tools will be more convenient and cheaper with the offers provided by Justworks."}
                              category={"Technology Tool"}
                              link={"/browse/categories/electronics"}
            />




        </div>
    </div>


            <Spacer />
            <Footer />

        </>
    )
}

export default Home;
