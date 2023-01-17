import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../../css/styles.css'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import "../../css/card.css";


const UserProductCards = ({image, title, price, discount, productId, category, description}) => {
    return(
        <>
        <MDBRow className="justify-content-center mb-3" style={{maxWidth: "120vw"}}>
            <MDBCol md="12" xl="10">
              <MDBCard className="shadow-0 border rounded-3">
                <MDBCardBody className="py-5">
                  <MDBRow>
                    <MDBCol md="12" lg="3" className="mb-4 mb-lg-0 my-5">
                      <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image rounded hover-zoom hover-overlay"
                      >
                        <MDBCardImage
                          src={image}
                          fluid
                          className="w-100"
                        />
                        <a href="react frontend/src/components#!">
                          <div
                            className="mask"
                            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                          ></div>
                        </a>
                      </MDBRipple>
                    </MDBCol>
                    <MDBCol md="6">
                      <h5 className="title_font" style={{fontSize:"2rem"}}>{title}</h5>
                      <div className="d-flex flex-row">
                        <div className="text-danger mb-1 me-2">
                          <MDBIcon fas icon="star" />
                          <MDBIcon fas icon="star" />
                          <MDBIcon fas icon="star" />
                          <MDBIcon fas icon="star" />
                        </div>
                        <span>145</span>
                      </div>
                      <div className="mt-1 mb-0 text-muted small font">
                          {description}
                      </div>
                    </MDBCol>
                    <MDBCol
                      md="6"
                      lg="3"
                      className="border-sm-start-none border-start"
                    >
                      <div className="d-flex flex-row align-items-center mb-1">
                        <h4 className="mb-1 me-1 title_font" style={{fontSize: "1.5vw"}}>Current Price: ${ (Number(price) * (1-(Number(discount))/100)).toFixed(2)}</h4>
                      </div>
                      <div className="d-flex flex-column mt-4">
                          <Link to={`/product/${category}/${productId}`}>
                                <button className="button-6 w-100">Details</button>
                          </Link>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </>
    )
}


export default UserProductCards