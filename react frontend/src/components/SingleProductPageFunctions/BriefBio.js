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
  const [userID, setUserID] = useState(-1)

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
  const [staffPhotos, setStaffPhotos] = useState([])
  const [history, setHistory] = useState(" ")
  const [testimonials, setTestimonials] = useState(" ")

  //variables during Edit Mode --------------------------------------------------
  const [newName, setNewName] = useState(name)
  const [newImage, setNewImage] = useState(image)
  const [newShopBanner, setNewShopBanner] = useState(shopBanner)
  const [newBio, setNewBio] = useState(bio)
  const [newStaffPhotos, setNewStaffPhotos] = useState(staffPhotos)
  const [newHistory, setNewHistory] = useState(history)
  const [newTestimonials, setNewTestimonials] = useState(testimonials)


  //-----------------------------------------------------------------------
  //           FUNCTION
  //-----------------------------------------------------------------------

  function findUserByProduct(array) {
    return array.find((e) => {
      return e.products.some(checkProductId);
    })
  }

  function checkProductId(product) {
    return product === id;
  }

  const updatedInfo = () => {
    UpdateUserData.UpdateShop({ userID, newName, newImage, newBio, newHistory, newTestimonials, newStaffPhotos, newShopBanner })
      .then((response) => { return response })
      .catch(error => console.log('error', error))
  }

  const handleShopUpdate = (e) => {
    e.preventDefault()
    updatedInfo()
  }

  function handleAvatarChange(e) {
    setNewImage(URL.createObjectURL(e.target.files[0]))
  }

  function handleBannerChange(e) {
    setNewShopBanner(URL.createObjectURL(e.target.files[0]))
  }

  const handleStaffUrlChange = (e, i) => {
    let count = -1
    const newPhotos = newStaffPhotos.map(photo => {
      count++
      if(i === count) {return e.target.value}
      else { return photo}
    })
    setNewStaffPhotos(newPhotos)
  }
  
  const handleStaffPhotoChange = (e, i) => {
    let count = -1
    const newPhotos = newStaffPhotos.map(photo => {
      count++
      if(i === count) {return URL.createObjectURL(e.target.files[0])}
      else { return photo}
    })
    setNewStaffPhotos(newPhotos)
  }

  const handleHistoryChange = (e, i) => {
    let count = -1
    const tempHistory = newHistory.map(history => {
      count++
      if(i === count) {return e.target.value}
      else { return history}
    })
    setNewHistory(tempHistory)
  }

  const handleTestimonialChange = (e, i) => {
    let count = -1
    const tempTestimonials = newTestimonials.map(testimonial => {
      count++
      if(i === count) {return e.target.value}
      else { return testimonial}
    })
    setNewTestimonials(tempTestimonials)
  }

  const handleTestimonialImageChange = (e, i) => {
    let count = -1
    const tempTestimonials = newTestimonials.map(testimonial => {
      count++
      if(i === count) {return URL.createObjectURL(e.target.files[0])}
      else { return testimonial}
    })
    setNewTestimonials(tempTestimonials)
  }




  //-----------------------------------------------------------------------
  //           EXECUTIONS
  //-----------------------------------------------------------------------


  useEffect(() => {
    if (loggedUser) { setUserID(loggedUser.id) }

    console.log(userData)

    if (shopOwner !== -1) {
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
      setLoading(false);
    }

  }, [shopOwner])

  useEffect(() => {
    if (userData.length > 0) {
      setShopOwner(findUserByProduct(userData))
      console.log(userData)
      console.log(shopOwner)
    }
  }, [userData])


  //Check if current user is shop owner
  useEffect(() => {
    if (loggedUser && loggedUser.id > -1 && shopOwner.id === loggedUser.id) {
      setIsLoggedUser(true)
    }
  }, [shopOwner])

  //Retrieve user data from the backend ------------------------------------
  useEffect(() => {
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
  if (!loading && (shopOwner === -1 || shopOwner.length < 1 || !userData || userData.length < 1)) {
    return <p>Opps. Something went wrong</p>;
  }
  //DEBUG USER DATA (END)-----------------


  //-----------------------------------------------------------------------
  //           RETURN
  //-----------------------------------------------------------------------

  return (
    <>
      <form method='post' style={{ padding: "0px !important" }}
        onSubmit={(e) => {
          setIsEditMode(!isEditMode);
          setName(newName);
          setImage(newImage);
          setBio(newBio);
          setHistory(newHistory);
          setTestimonials(newTestimonials);
          setStaffPhotos(newStaffPhotos);
          setShopBanner(newShopBanner);
          handleShopUpdate(e);
        }}>

        {/* EXIT EDIT MODE buttons ------------------------------------------------------------------------------------

        {(isEditMode) && <hr></hr>}
        <div className='row' style={{ paddingLeft: "80px", paddingRight: "80px" }}>
          
          <div className='col-sm' style={{ paddingTop: "15px" }} >
            {(isEditMode) && <p type="button" className="button6fontfam" style={{ color: "#3295e5", textAlign: "center" }}
              onClick={() => setIsEditMode(!isEditMode)}>
              Cancel Edit</p>}</div>
          
          <div className='col-sm'>
            {isEditMode && <input type='submit' value="Save" className="button-6"/>}</div>
        
        </div>

        {/* --------------EDIT BUTTON------------------------------------------------------------------------------------ */}
        {isLoggedUser ? !(isEditMode) && <p onClick={() => setIsEditMode(!isEditMode)}
          type="button"
          className="font"
          style={{ color: "#3295e5", textAlign: "center" }}>
          Edit Shop Page</p> : <p></p>}

        {/* --------------SHOP BANNER------------------------------------------------------------------------------------ */}
        <div className="hero-image">
          {!(isEditMode) && <img src={shopBanner} className='img-fluid shadow-4' />}
          {isEditMode && <img src={newShopBanner} className='img-fluid shadow-4' />}
          <div className="hero-text">
            {!(isEditMode) && <h1 className={"herofont"} style={{ textShadow: "5px 5px 3px black" }}>Welcome to {name}'s Shop</h1>}
            {!(isEditMode) && <p style={{ textShadow: "3px 3px 2px black" }}>Here you will learn more about our products and our story</p>}
            {!(isEditMode) && <Link to="/product/:product_id" style={{ textDecoration: "none" }}><button type="button" className="button-6 m-3" style={{ boxShadow: "5px 5px 5px black" }}>Browse Shop</button></Link>}
            {isEditMode && <div className='profile contain'> <label style={{ color: "black" }}>Edit Banner Image (URL):</label>
              <input type="text" className="font"
                value={newShopBanner}
                onChange={(e) => { setNewShopBanner(e.target.value); handleBannerChange() }} /><br></br></div>}
          </div>
        </div>

        <Spacer />

        <div className="hero-container">
          <div className="row">

            {/* --------------NAME & BIO------------------------------------------------------------------------------------ */}
            <div className="col m-3">
              {!(isEditMode) && <h1 className={"clientbiofont"} style={{ marginLeft: "15px" }}>{name}</h1>}
              {isEditMode && <label style={{ marginLeft: "15px" }}>Edit Company Name:</label>}
              {isEditMode && <input type="text" className="font" name="name" style={{ marginLeft: "15px" }}
                value={newName}
                onChange={(e) => setNewName(e.target.value)} />}<br></br>

              <p className="font fw-bold m-3">Connect with Us</p>
              <p className="m-3">
                
                {!(isEditMode) && <>
                  <LinesEllipsis className="font" ellipsis='...' trimRight basedOn='letters'
                  text={bio}
                  maxLine='6'/> <br></br>
                  <Link style={{ textDecoration: "none" }} to={"/profile/user/" + shopOwner.id}>Read more</Link></>}
                
                {isEditMode && <label>Edit Bio:</label>}
                {isEditMode && 
                  <textarea type="text" className="font" rows="10" style={{ whiteSpace: "pre-wrap", width: "100%" }}
                            value={newBio}
                            onChange={(e) => setNewBio(e.target.value)} />}<br></br>
                <a style={{ padding: "0px", marginTop: "20px", width: "35px" }} href="#" className="fa fa-facebook"></a><a href="#" className="fa fa-twitter"></a><a href="#" className="fa fa-linkedin"></a>
              </p>
            </div>

            {/* --------------LOGO IMAGE------------------------------------------------------------------------------------ */}
            <div className="col">
              {!(isEditMode) && <img src={image}
                className={"img-fluid w-75 mb-5 rounded"} style={{ float: "center" }} />}
              {isEditMode && <><img src={newImage} style={{ float: "center" }} className="img-fluid w-75 mb-5 rounded" /><br></br>
                <label>Edit Profile Image URL:</label>
                <br></br>
                <input type="text" className="font"
                  value={newImage}
                  onChange={(e) => { setNewImage(e.target.value); handleAvatarChange() }} /><br></br>  </>}
            </div>

          </div>
        </div>


        <div className="wrapper">
          <p className="font fw-bold m-3">Meet Our Team</p>

          {/* --------------STAFF IMAGE------------------------------------------------------------------------------------ */}
          {/* Image */}
          {!(isEditMode) ?
            staffPhotos.slice(0, 8).map(photo => (
              <img src={photo} className="image--cover" />)) :
            newStaffPhotos.slice(0, 8).map(photo => (
              <img src={photo} className="image--cover" />))}

          {/* Input box */}
          <div className='row'>
            {isEditMode && newStaffPhotos.slice(0, 8).map((url, i) => (
              <div className='col'><br></br>
                <label>Staff Image #{i +1} (URL):</label><br></br>
                <input type="text" value={url}
                  onChange={(e) => {
                  handleStaffUrlChange(e, i);
                  handleStaffPhotoChange(e, i);}} /><br></br></div>))}</div></div>

        <div className="LearnMore text-center"><hr></hr>
          <div className="LearnMore card-header">
            Connections Made Possible by Justworks</div><br></br>

          {/* --------------BIG STAFF IMAGE & HISTORY------------------------------------------------------------------------------------ */}
          <div className="LearnMore card-body">
            {!(isEditMode) && <img src={staffPhotos[8]} className='img-fluid shadow-4' />}
            {!(isEditMode) && <div className="LearnMorecard-footer text-muted title_font">{history[0]}</div>}
            {!(isEditMode) && <p className="LearnMore card-text font">{history[1]}</p>}
            {!(isEditMode) && <Link to="/browse" style={{ textDecoration: "none" }}><button type="button" className="button-6 m-3">Browse Products</button></Link>}

            {isEditMode && <div style={{position: 'relative', align: "center"}}>
              <img src={newStaffPhotos[8]} className='img-fluid shadow-4' /> 
              <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                <div className='profile contain'> <label style={{ color: "black" }}>Edit Staff Image (URL):</label>
                  <input type="text" className="font"
                    value={newStaffPhotos[8]}
                    onChange={(e) => { handleStaffUrlChange(e,8); handleStaffPhotoChange(e,8) }} /><br></br></div></div></div>} <Spacer/>

            <div style={{padding: "0px 150px"}}>
            {isEditMode && <h2>Company History</h2>}<br></br>
            {isEditMode && <label style={{align: "center"}}>Edit Header:</label>}<br></br>
            {isEditMode && <input type='text' className='font' style={{align: "center", maxWidth: "600px"}}
                                  value={newHistory[0]}
                                  onChange={(e) =>{handleHistoryChange(e, 0)}}/>}<br></br><br></br>
            {isEditMode && <label style={{align: "center"}}>Edit Company History:</label>}
            {isEditMode && 
              <textarea type="text" className="font" rows="10" style={{ whiteSpace: "pre-wrap", width: "100%" }}
                        value={newHistory[1]}
                        onChange={(e) => handleHistoryChange(e,1)} />}<br></br></div>
          </div>
        </div>

        <Spacer />

        <div className="container">
          <div className="row">

            {/* --------------TESTIMONIAL 1------------------------------------------------------------------------------------ */}
            <div className="col align-self-start">
              {!(isEditMode) && <img className="img-fluid" src={testimonials[0]} />}
              {isEditMode && <img className="img-fluid" src={newTestimonials[0]} />}</div>
            
            <div className="col align-self-center">
              {!(isEditMode) && <h1 className="title_font">{testimonials[1]}</h1>}
              {!(isEditMode) && <p className='font' style={{ margin: "15px" }}>{testimonials[2]}</p>}
              
              {isEditMode && <h2>Testimonial #1</h2>}<br></br>
              {isEditMode && <label>Edit Image (URL):</label>}<br></br>
              {isEditMode && <input type="text" className="font"
                    value={newTestimonials[0]}
                    onChange={(e) => { handleTestimonialChange(e,0); handleTestimonialImageChange(e,0) }} />}
              
              {isEditMode && <label>Edit Header:</label>}<br></br>
              {isEditMode && <input type='text' className='font'
                                  value={newTestimonials[1]}
                                  onChange={(e) =>{handleTestimonialChange(e, 1)}}/>}<br></br><br></br>
              {isEditMode && 
              <textarea type="text" className="font" rows="10" style={{ whiteSpace: "pre-wrap", width: "100%" }}
                        value={newTestimonials[2]}
                        onChange={(e) => handleTestimonialChange(e,2)} />}</div>
          </div>
        </div>

        <Spacer />

        <div className="container">
          <div className="row">

            {/* --------------TESTIMONIAL 2------------------------------------------------------------------------------------ */}
            <div className="col align-self-start">
              {!(isEditMode) && <h1 className="title_font" style={{ paddingTop: "20px" }}>{testimonials[4]}</h1>}
              {!(isEditMode) && <div className="font" style={{ paddingTop: "20px" }}>{testimonials[5]}</div>}
              
              {isEditMode && <h2>Testimonial #2</h2>}<br></br>
              {isEditMode && <label>Edit Image (URL):</label>}<br></br>
              {isEditMode && <input type="text" className="font"
                    value={newTestimonials[3]}
                    onChange={(e) => { handleTestimonialChange(e,3); handleTestimonialImageChange(e,3) }} />}
              
              {isEditMode && <label>Edit Header:</label>}<br></br>
              {isEditMode && <input type='text' className='font'
                                  value={newTestimonials[4]}
                                  onChange={(e) =>{handleTestimonialChange(e, 4)}}/>}<br></br><br></br>
              {isEditMode && 
              <textarea type="text" className="font" rows="10" style={{ whiteSpace: "pre-wrap", width: "100%" }}
                        value={newTestimonials[5]}
                        onChange={(e) => handleTestimonialChange(e,5)} />}</div>
            
            <div className="col align-self-end">
              {!(isEditMode) && <img className="img-fluid" src={testimonials[3]} />}
              {isEditMode && <img className="img-fluid" src={newTestimonials[3]} />} </div>

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
