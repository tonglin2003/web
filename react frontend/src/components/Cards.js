import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../css/styles.css'


const Cards = ({size, image, title, price, productId}) => {
    /**
     * size (int, Required): from 1 to 3 to decide size
     * Image: (string, Optional): Link or directory to the product image
     * title: (string, optional): Title/name of the product
     * productId: (int, required only if size=1): productId to decide which product to be show on
     * Product demonstration page when the product is being clicked
    * */


    if(size === 1){ return <SmallCard image = {image}
                                      title={title}
                                      price={price}
                                      productId={productId}
    /> }
    else if(size === 2){ return <MediumCard image = {image} title={title} price={price} />}
    else if (size === 4) {return <BioCard image ={image} title={title} price={price} /> }

}

const SmallCard = ({image, title, price, productId}) => {

    return(
        <>
            <div className="col-md-4 col-sm-6 col-xs-6 d-block mx-auto">
                <div className="card px-5 text-center position-relative">
                    <Link to={`/product/${productId}`}
                          className="card text-center position-relative"
                          style={{border: "none"}}
                    >
                        <img src={image} className="card-img-top d-block mx-auto overflow-auto" alt="Los Angeles Skyscrapers" />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title" >{title}</h5>
                        <p className="card-text">${price}</p>
                        <div className="col text-center">
                            <div className="col text-center">
                                <Link to="/" class="button-6" style={{fontSize: "1.5vw"}}>Add to cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// import React, {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import css from "../css/styles.css"
//
// const Header = () => {
//
//     const currentUser = JSON.parse(localStorage.getItem('currentUser'))
//     const [isLoggedin, setIsLoggedIn] = useState(false);
//
//     console.log(currentUser);
//     // console.log(isLoggedin);
//     console.log("hi hi hi")
//
//     //Check if logged in
//     useEffect(() => {
//         if(currentUser){
//             if(currentUser !== -1){
//                 setIsLoggedIn(true)
//             }
//         }
//     }, []);
//
//     function Logout (){
//         localStorage.setItem('currentUser', -1);
//         currentUser = localStorage.getItem('currentUser');
//         setIsLoggedIn(false);
//     }
//
//     return (
//         <header>
//             <nav className="navbar navbar-inverse navbar-fixed-top navbar-expand-lg navbar-light " style={{borderBottom: "solid" ,borderBlockColor:"whitesmoke"}} id="nav">
//                 <div className={"container-fluid"}>
//                 <Link class=" navbar-brand" to="/"></Link>
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNav" style={{padding:"10px",paddingBottom:"15px"}}>
//                     <ul className="navbar-nav">
//                         <li className="nav-item active">
//                             <Link to="/" class="nav-link">Home</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to="/" class="nav-link">Services</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to="/browse" class="nav-link">Shop</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to="/post" class="nav-link">Post Product</Link>
//                         </li>
//                         <li className="nav-item">
//                             {/*<Link to="/post" style={{textDecoration: "none"}}><button type="button" className="button-6">Post Product</button></Link>*/}
//                         </li>
//                     </ul>
//                     <Link to={"/"}>
//                             <a href={""}>
//                                 <img src="data:image/png;base64,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" alt="Payroll, Benefits, HR Software, and Compliance | Justworks | Justworks" width="195" height="35" />
//                             </a>
//                         </Link>
//                     <div className="container-logo" style={{margin: "auto 5%"}}>
//                         {!(isLoggedin) && <Link to={'/login'} id="getstartedbutton" style={{textDecoration: "none", padding:"20px"}}>Get Started</Link>}
//                         &nbsp;&nbsp;&nbsp;
//                         {!(isLoggedin) && <Link to={'/login'} id="theloginbutton" >Login</Link>}
//                         {isLoggedin && <Link to={'/'} style={{textDecoration: "none"}}
//                                             onClick={ () => {Logout(); }} >Logout</Link>}
//                         &nbsp;&nbsp;&nbsp;
//
//                     </div>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     )
// }
// export default Header


const MediumCard = ({image, title, price}) => {
    return(
        <>
            {/* <div className="col-sm"> */}
                <div className="card">
                    <img src={image} className="card-img-top" alt="Palm Springs Road" />
                    <div className="card-body">
                    <p className="card-title">{title}</p>
                        <p className="card-text">${price}</p>
                        <div className="col text-center">
                            <Link to="/" class="btn btn-primary">Purchase</Link>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}



const BioCard = ({image, title, price}) => {
    return(
        <>
            <div className="">
                <div className="card medium profile products">
                    <img src={image} className="card-img-top profile center" alt="Palm Springs Road" />
                    <div className="card-body">
                    <p className="card-title medium">{title}</p>
                        <p className="card-text">${price}</p>
                        <div className="col text-center">
                            <Link to="/" class="btn btn-primary">Purchase</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Cards