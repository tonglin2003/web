import React from 'react'
import { Link, NavLink  } from 'react-router-dom'
import '../../css/styles.css'
import {Carousel, Nav} from 'react-bootstrap';
import ReactDOM from "react-dom";


const CarouselItem = (props) => (

        <Carousel.Item {...props}>
            <NavLink to={"/browse"}>
                <a href={""}>
                    <img className="d-block w-50 mx-auto rounded" 
                         src={props.image} 
                         alt="First slide"
                    />
                </a>
            </NavLink>
        
            <Carousel.Caption>
                    <div className={"w-50 p-2 rounded"} style={{background: "#1a4b8f", transform: "skew(10deg)"}}>
                          <h3 className={"title_font text-white"}>
                              {props.category}
                          </h3>
                        
                          <p className={"text-white font"}>
                              Try some new experience?
                          </p>
                    </div>
            </Carousel.Caption>
      </Carousel.Item>
);

export default CarouselItem
