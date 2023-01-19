import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'
// import {replaceAt} from '@writetome51/array-replace-at';
import UpdateUserData from '../UserData/UpdateUserData'
import '../../css/styles.css'
import Spacer from '../Spacer'


function BriefBio() {

  //-----------------------------------------------------------------------
  //           VARIABLES
  //-----------------------------------------------------------------------


  // Get the user id from the page---------------------------------------------------
  const { product_id } = useParams()
  const id = Number(product_id)

  //Init logged in user data from Backend
  const loggedUser = JSON.parse(localStorage.getItem('currentUser'))
  const userID = loggedUser.id

  //Init current user data from Frontend
  const [shopOwner, setShopOwner] = useState(-1)
  //Init user data from Backend
  const [userData, setUserData] = useState([])

  //states of the profile page
  const [isLoggedUser, setIsLoggedUser] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)


  //saved variables --------------------------------------------------
  const [name, setName] = useState(" ")
  const [image, setImage] = useState(" ")
  const [shopBanner, setShopBanner] = useState(" ")
  const [bio, setBio] = useState(" ")
  const [staffPhotos, setStaffPhotos] = useState(" ")
  const [history, setHistory] = useState(" ")
  const [testimonials, setTestimonials] = useState(" ")

  //variables during Edit Mode --------------------------------------------------
  const [newName, setNewName] = useState(name)
  const [newImage, setNewImage] = useState(image)
  const [newShopBanner, setNewShopBanner] = useState(shopBanner)
  const [newBio, setNewBio] = useState(bio)
  // const newStaffPhotos=[0,0,0,0,0,0,0,0,0]
  const [newStaffPhotos, setNewStaffPhotos] = useState(staffPhotos)
  const [newHistory, setNewHistory] = useState(history)
  const [newTestimonials, setNewTestimonials] = useState(testimonials)

  // //Staff photos 
  const [sp0, setSP0] = useState(" ")
  const [sp1, setSP1] = useState(" ")
  const [sp2, setSP2] = useState(" ")
  const [sp3, setSP3] = useState(" ")
  const [sp4, setSP4] = useState(" ")
  const [sp5, setSP5] = useState(" ")
  const [sp6, setSP6] = useState(" ")
  const [sp7, setSP7] = useState(" ")
  const [sp8, setSP8] = useState(" ")

  // var replaceAt = require('@writetome51/array-replace-at').replaceAt;


  //-----------------------------------------------------------------------
  //           FUNCTION
  //-----------------------------------------------------------------------

  function findUserByProduct(array) {
    console.log(userData)

    return array.find((e) => {
      return e.products.some(checkProductId);
    })
  }

  function checkProductId(product) {
    console.log(userData)

    return product === id;
  }

  console.log("hi")
  console.log(shopOwner)


  const updatedInfo = ()=>{
    console.log(newStaffPhotos)

    UpdateUserData.UpdateShop({userID, newName, newImage, newBio, newHistory, newTestimonials, newStaffPhotos, newShopBanner})
    .then((response) =>  {return response})
    .catch(error => console.log('error',error))
  }

const handleShopUpdate=(e)=>{
  console.log(userData)

    e.preventDefault()
    updatedInfo()

}

function handleAvatarChange(e) {
  console.log(userData)

  setNewImage(URL.createObjectURL(e.target.files[0]))
}

function handleBannerChange(e) {
  console.log(userData)

  setNewShopBanner(URL.createObjectURL(e.target.files[0]))
}

const handleMiniStaffChange = (e, i) => {
  switch(i) {
    case 0:
      setSP0(URL.createObjectURL(e.target.files[0]))
    case 1:
      setSP1(URL.createObjectURL(e.target.files[0]))
    case 2:
      setSP2(URL.createObjectURL(e.target.files[0]))
    case 3:
      setSP3(URL.createObjectURL(e.target.files[0]))
    case 4:
      setSP4(URL.createObjectURL(e.target.files[0]))
    case 5:
    setSP5(URL.createObjectURL(e.target.files[0]))
    case 6:
      setSP6(URL.createObjectURL(e.target.files[0]))
    case 7:
      setSP7(URL.createObjectURL(e.target.files[0]))
    case 8:
      setSP8(URL.createObjectURL(e.target.files[0]))
    default:
      return null
  }
  // setNewStaffPhotos[i](URL.createObjectURL(e.target.files[0]))
}

// const handleUpdateStaffP = () => {
//   const newStaff = [sp0,sp1,sp2,sp3,sp4,sp5,sp6,sp7,sp8];
//   setNewStaffPhotos(newStaff);
// }




  //-----------------------------------------------------------------------
  //           EXECUTIONS
  //-----------------------------------------------------------------------


  useEffect(() =>{
    console.log(userData)

    if(shopOwner !== -1){
    setName(shopOwner.name)
    setImage(shopOwner.image)
    setBio(shopOwner.bio)
    setShopBanner(shopOwner.shop_banner)
    setStaffPhotos(shopOwner.staff_photos)
    setHistory(shopOwner.history)
    setTestimonials(shopOwner.testimonials)
    //variables during edit mode
    setNewName(shopOwner.name)
    setNewImage(shopOwner.image)
    setNewBio(shopOwner.bio)
    setNewShopBanner(shopOwner.shop_banner)
    setNewStaffPhotos(shopOwner.staff_photos)
    setNewHistory(shopOwner.history)
    setNewTestimonials(shopOwner.testimonials)

    //Staff photos 
    setSP0(shopOwner.staff_photos[0])
    setSP1(shopOwner.staff_photos[1])
    setSP2(shopOwner.staff_photos[2]) 
    setSP3(shopOwner.staff_photos[3])
    setSP4(shopOwner.staff_photos[4])
    setSP5(shopOwner.staff_photos[5])
    setSP6(shopOwner.staff_photos[6])
    setSP7(shopOwner.staff_photos[7])
    setSP8(shopOwner.staff_photos[8])

    

    setLoading(false);
 }

  }, [shopOwner])

  // const arr = [1,2,3]
  // const updateStaffPhotos=()=>{
  //   replaceAt(0, sp0, newStaffPhotos);
  //   replaceAt(1, sp1, newStaffPhotos);
  //   replaceAt(2, sp2, newStaffPhotos);
  //   replaceAt(3, sp3, newStaffPhotos);
  //   replaceAt(4, sp4, newStaffPhotos);
  //   replaceAt(5, sp5, newStaffPhotos);
  //   replaceAt(6, sp6, newStaffPhotos);
  //   replaceAt(7, sp7, newStaffPhotos);
  //   replaceAt(8, sp8, newStaffPhotos);
  //   console.log(newStaffPhotos)
  // }

  useEffect(() => {
    console.log(userData)

    if (userData.length > 0) {
      setShopOwner(findUserByProduct(userData))
      console.log(userData)
      console.log(shopOwner)


    }
  }, [userData])


  //Check if current user is shop owner
  useEffect(() => {
    console.log(userData)

    console.log(shopOwner)
    if (loggedUser.id > -1 && shopOwner.id === loggedUser.id) {
      setIsLoggedUser(true)
    }
  }, [shopOwner])

  //Retrieve user data from the backend ------------------------------------
  useEffect(() => {
    console.log(userData)

    fetch("/api/userdata")
      .then((res) => res.json())
      .then((userData) => {
        setUserData(userData);

      });
  }, []);

  //DEBUG USER DATA (START)-----------------
  const [loading, setLoading] = useState(true);

  if (loading && (shopOwner === -1 || shopOwner.length < 1 || !userData || userData.length < 1)) {
    return <p>Loading...</p>;
  }
  if (!loading && (shopOwner === -1 || shopOwner.length < 1 || !userData ||userData.length < 1)) {
    return <p>Opps. Something went wrong</p>;
  }
  //DEBUG USER DATA (END)-----------------


  //-----------------------------------------------------------------------
  //           RETURN
  //-----------------------------------------------------------------------

  return (
    <>

<form method='post' style={{ padding: "0px !important"}}
                    onSubmit={(e) =>{
                        setIsEditMode(!isEditMode);
                        setName(newName);
                        setImage(newImage);
                        setBio(newBio);
                        setHistory(newHistory);
                        setTestimonials(newTestimonials);
                        setStaffPhotos([...newStaffPhotos]);
                        setShopBanner(newShopBanner);
                        handleShopUpdate(e);
                        }}>

       {/* EXIT EDIT MODE buttons --------------------------------------------------*/}
       
       {(isEditMode) && <hr></hr>}
       <div className='row' style={{ paddingLeft: "80px", paddingRight: "80px" }}>
          <div className='col-sm' style={{ paddingTop: "15px" }} >
              {(isEditMode) && <p onClick={() => setIsEditMode(!isEditMode)}
                  type="button"
                  className="button6fontfam"
                  style={{ color: "#3295e5", textAlign: "center" }}>
                  Cancel Edit</p>}
          </div>
          <div className='col-sm'>
              {isEditMode && <input type='submit'
                  value="Save"
                  className="button-6"
  
                  />}
          </div>
      </div>

      {/* --------------EDIT BUTTON-------------- */}
      {isLoggedUser ? !(isEditMode) && <p onClick={() => setIsEditMode(!isEditMode)}
        type="button"
        className="font"
        style={{ color: "#3295e5", textAlign: "center" }}>
        Edit Shop Page</p> : <p></p>}

      {/* --------------SHOP BANNER-------------- */}
      <div className="hero-image">
      {!(isEditMode) && <img src={shopBanner} className='img-fluid shadow-4' />}
      {isEditMode && <img src={newShopBanner} className='img-fluid shadow-4' />}
        <div className="hero-text">
          {!(isEditMode) && <h1 className={"herofont"} style={{ textShadow: "5px 5px 3px black" }}>Welcome to {name}'s Shop</h1>}
          {!(isEditMode) && <p style={{ textShadow: "3px 3px 2px black" }}>Here you will learn more about our products and our story</p>}
          {!(isEditMode) && <Link to="/product/:product_id" style={{ textDecoration: "none" }}><button type="button" className="button-6 m-3" style={{ boxShadow: "5px 5px 5px black" }}>Browse Shop</button></Link>}
          {isEditMode && <div className='profile contain'> <label style={{color: "black"}}>Edit Banner Image (URL):</label>
                        <input
                            type="text"
                            className="font"
                            value={newShopBanner}
                            onChange={(e)=> {setNewShopBanner(e.target.value); handleBannerChange()}}/><br></br></div>} 
        </div>
      </div>

      <Spacer />

      <div className="hero-container">
        <div className="row">

      {/* --------------NAME & BIO-------------- */}
          <div className="col m-3">
          {!(isEditMode) && <h1 className={"clientbiofont"} style={{ marginLeft: "15px" }}>{name}</h1>}
          {(isEditMode) && <label style={{ marginLeft: "15px" }}>Edit Company Name:</label>}
          {isEditMode && <input
                        type="text"
                        className="font"
                        name="name"
                        value={newName}
                        style={{ marginLeft: "15px" }}
                        onChange={(e) => setNewName(e.target.value)} />}<br></br>

            <p className="font fw-bold m-3">Connect with Us</p>
            <p className="m-3">
            {!(isEditMode) && <><LinesEllipsis
                text={bio}
                className="font"
                maxLine='6'
                ellipsis='...'
                trimRight
                basedOn='letters'
              /> <br></br><Link style={{ textDecoration: "none" }} to={"/profile/user/" + shopOwner.id}>Read more</Link></> }
              {isEditMode && <label>Edit Bio:</label>}
                    {isEditMode && <textarea
                        type="text"
                        className="font"
                        rows="10"
                        style={{ whiteSpace: "pre-wrap", width: "100%" }}
                        value={newBio}
                        onChange={(e) => setNewBio(e.target.value)} />}
              <br></br>
              <a style={{ padding: "0px", marginTop: "20px", width: "35px" }} href="#" className="fa fa-facebook"></a><a href="#" className="fa fa-twitter"></a><a href="#" className="fa fa-linkedin"></a>
            </p>
          </div>

          {/* --------------LOGO IMAGE-------------- */}
          <div className="col">
          {!(isEditMode) && <img src={image}
              className={"img-fluid w-75 mb-5 rounded"} style={{ float: "center" }} />}
          {isEditMode && <><img src={newImage} style={{ float: "center" }} className="img-fluid w-75 mb-5 rounded" /><br></br>
                      <label>Edit Profile Image URL:</label>
                      <br></br>
                      <input
                          type="text"
                          className="font"
                          value={newImage}
                          onChange={(e)=> {setNewImage(e.target.value); handleAvatarChange()}}/><br></br>  </>}
          </div>

        </div>
      </div>


      <div className="wrapper">
        <p className="font fw-bold m-3">Meet Our Team</p>

          {/* --------------STAFF IMAGE-------------- */}
          {!(isEditMode) && <img src={staffPhotos[0]} className="image--cover" />}
          {!(isEditMode) && <img src={staffPhotos[1]} className="image--cover" />}
          {!(isEditMode) && <img src={staffPhotos[2]} className="image--cover" />}
          {!(isEditMode) && <img src={staffPhotos[3]} className="image--cover" />}
          {!(isEditMode) && <img src={staffPhotos[4]} className="image--cover" />}
          {!(isEditMode) && <img src={staffPhotos[5]} className="image--cover" />}
          {!(isEditMode) && <img src={staffPhotos[6]} className="image--cover" />}
          {!(isEditMode) && <img src={staffPhotos[7]} className="image--cover" />}

          {isEditMode && <img src={sp0} className="image--cover" />}
          {isEditMode && <img src={sp1} className="image--cover" />}
          {isEditMode && <img src={sp2} className="image--cover" />}
          {isEditMode && <img src={sp3} className="image--cover" />}
          {isEditMode && <img src={sp4} className="image--cover" />}
          {isEditMode && <img src={sp5} className="image--cover" />}
          {isEditMode && <img src={sp6} className="image--cover" />}
          {isEditMode && <img src={sp7} className="image--cover" />}

          {/* <div className='row'>
            <div className='col'>{isEditMode && <><br></br>
                      <label>Staff Image #1 (URL):</label>
                      <br></br>
                      <input type="text" value={sp0}
                          onChange={(e)=> {setSP0(e.target.value); handleMiniStaffChange(e, 0); updateStaffPhotos();
                          }}/><br></br>  </>}</div>
            <div className='col'></div>
            <div className='col'></div>
            <div className='col'></div>
            <div className='col'></div>
            <div className='col'></div>
            <div className='col'></div>
            <div className='col'></div>
            <div className='col'></div>
          </div> */}
      </div>

      <div className="LearnMore text-center"><hr></hr>
        <div className="LearnMore card-header">
          Connections Made Possible by Justworks
        </div><br></br>

          {/* --------------BIG STAFF IMAGE & HISTORY-------------- */}
        <div className="LearnMore card-body">
        {!(isEditMode) && <img src={staffPhotos[8]} className='img-fluid shadow-4' />}
          {!(isEditMode) && <div className="LearnMorecard-footer text-muted title_font">{history[0]}</div>}
          {!(isEditMode) && <p className="LearnMore card-text font">{history[1]}</p>}
          <Link to="/browse" style={{ textDecoration: "none" }}><button type="button" className="button-6 m-3">Browse Products</button></Link>
        </div>
      </div>

      <Spacer />

      <div className="container">
        <div className="row">

            {/* --------------TESTIMONIALS-------------- */}
          <div className="col align-self-start">
          {!(isEditMode) && <img className="img-fluid" src={testimonials[0]} />}
          </div>
          <div className="col align-self-center">
          {!(isEditMode) && <h1 className="title_font">{testimonials[1]}</h1>}
            {!(isEditMode) && <p className='font' style={{ margin: "15px" }}>{testimonials[2]}</p>}
          </div>

        </div>
      </div>

      <Spacer />

      <div className="container">
        <div className="row">

           {/* --------------TESTIMONIALS-------------- */}
          <div className="col align-self-start">
          {!(isEditMode) && <h1 className="title_font" style={{ paddingTop: "20px" }}>{testimonials[4]}</h1>}
          {!(isEditMode) && <div className="font" style={{ paddingTop: "20px" }}>{testimonials[5]}</div>}
          </div>
          <div className="col align-self-end">
          {!(isEditMode) && <img className="img-fluid" src={testimonials[3]} />}
          </div>

        </div>
      </div>

            </form>


      {/* <script>
        $( "span" ).wrap( "<div><div><p><em><b></b></em></p></div></div>" );
      </script> */}

    </>
  )

}
export default BriefBio;
