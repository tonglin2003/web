import React, { useEffect, useState } from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import axios from "axios"
import { Link } from 'react-router-dom'
import Header from './components/WebHeaderAndFooter/Header'
import Footer from './components/WebHeaderAndFooter/Footer'
import Spacer from './components/Spacer'
import Cards from './components/Cards'
import UpdateUserData from './components/UserData/UpdateUserData'
import css from './css/styles.css'

function Profile() {
    //-----------------------------------------------------------------------
    //           VERIFY LOGIN
    //-----------------------------------------------------------------------
    //Init user data
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    // Get the user id from the page---------------------------------------------------
    const {userID} = useParams()
    const id = Number(userID)

    // Redirect back to LOGIN Page
    const navigate = useNavigate()
    const navigateToLogin = () => {
        navigate('/login')
    }

    //Redirect to Logged in user's profile
    const navigateToProfile = () => {
       return navigate('/profile/user/' + currentUser.id);
    }

    // Redirect back to LOGIN if not logged in
    useEffect(() => {
        if(!(id) || id < 0){
            if(!(currentUser) || currentUser === -1){
                navigateToLogin();}
            else {
                navigateToProfile();}
        }
    }, [])

    //-----------------------------------------------------------------------
    //           RETURN
    //-----------------------------------------------------------------------
    return (
        <>
            <Header />
                <div className='profile background'>
                    <Spacer />
                    
                        <NewProfile />
                    <Spacer />
                </div>
            <Footer />
        </>
    )
}


const NewProfile = () => {
    //-----------------------------------------------------------------------
    //           VARIABLES
    //-----------------------------------------------------------------------
    //Initialize user data
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const [userData, setUserData] = useState(-1);
    const [profileUser, setProfileUser] = useState(-1)

    //states of the profile page
    const [isCurrentUser, setIsCurrentUser] = useState(false)
    const [isEditMode, setIsEditMode] = useState(false)
    const [loading, setLoading] = useState(true)

    // Get the user id from the page---------------------------------------------------
    const {userID} = useParams()
    const id = Number(userID)

    //saved variables --------------------------------------------------
    const [name, setName] = useState(" ")
    const [image, setImage] = useState(" ")
    const [bio, setBio] = useState(" ")
    const [phone, setPhone] = useState(" ")
    const [email, setEmail] = useState(" ")
    const [website, setWebsite] = useState(" ")
    const [location, setLocation] = useState(" ")

    //variables during Edit Mode --------------------------------------------------
    const [newName, setNewName] = useState(name)
    const [newImage, setNewImage] = useState(image)
    const [newBio, setNewBio] = useState(bio)
    const [newPhone, setNewPhone] = useState(phone)
    const [newEmail, setNewEmail] = useState(email)
    const [newWebsite, setNewWebsite] = useState(website)
    const [newLocation, setNewLocation] = useState(location)

    //-----------------------------------------------------------------------
    //           FUNCTIONS
    //-----------------------------------------------------------------------
    // loads product card info --------------------------------------------------
    const [products, setProduct] = useState([])
    const fetchProductInfo = () => {
        return axios.get("https://fakestoreapi.com/products")
            .then((response) => setProduct(
                response.data
            ));
    }
    
    //Find the current user by the id number of the page
    function findUserByID(array, id){
        return array.find((e) => {
            return e.id === id
        })
    }

    //uploads image to website --------------------------------------------------
    function handleImageChange(e) {
        setNewImage(URL.createObjectURL(e.target.files[0]))
    }


    const updatedInfo = ()=>{
        UpdateUserData.UpdateProfile({id, newName, newImage, newBio, newPhone, newEmail, newWebsite, newLocation})
        .then((response) => updatedInfo(response))
        .catch(error => console.log('error',error))
      }

    const handleUserUpdate=(e)=>{
        e.preventDefault()
        updatedInfo()

    }

    //-----------------------------------------------------------------------
    //           EXECUTE
    //-----------------------------------------------------------------------
    //Retrieve product data
    useEffect(() =>{
        fetchProductInfo()
    }, [])

    //Retrieve user data from the backend ------------------------------------
    useEffect(() => {
        fetch("/api/userdata")
        .then((res) => res.json())
        .then((userData) => {
            if(userData && id > -1){
                setUserData(userData)
                setProfileUser(findUserByID(userData, id))
            }
        })
    }, [id])

    useEffect(() =>{
        setName(profileUser.name)
        setImage(profileUser.image)
        setBio(profileUser.bio)
        setPhone(profileUser.phone)
        setEmail(profileUser.email)
        setWebsite(profileUser.website)
        setLocation(profileUser.location)
        //variables during edit mode
        setNewName(profileUser.name)
        setNewImage(profileUser.image)
        setNewBio(profileUser.bio)
        setNewPhone(profileUser.phone)
        setNewEmail(profileUser.email)
        setNewWebsite(profileUser.website)
        setNewLocation(profileUser.location)
    }, [profileUser])

    //Retrieve product data
    useEffect(() =>{
        if(currentUser.id > -1 && currentUser.id === id){
            setIsCurrentUser(true)
        }
    }, [currentUser, id])

   
    
    //DEBUG USER DATA (START)-----------------

    if(loading && profileUser ===-1 && !profileUser){
        return <p>Loading...</p>
    }
    if(!loading && profileUser ===-1 && !profileUser){
        return <p>Opps. Something went wrong</p>
    }
    //DEBUG USER DATA (END)-----------------

    //-----------------------------------------------------------------------
    //           RETURN
    //-----------------------------------------------------------------------
    return(
        <>
            <form method='post' className="profile center" style={{ width: "100%" }}
                    onSubmit={(e)=>{ 
                        setIsEditMode(!isEditMode);
                        setName(newName);
                        setImage(newImage);
                        setBio(newBio);
                        setPhone(newPhone);
                        setEmail(newEmail);
                        setWebsite(newWebsite);
                        setLocation(newLocation);
                        handleUserUpdate(e);
                        }}>
                <fieldset style={{ maxWidth: "800px", width: "800px", paddingTop: "30px" }} className=" profile contain">

                    {/* EDIT MODE button --------------------------------------------------*/}
                    { isCurrentUser ? !(isEditMode) && <p onClick={() => setIsEditMode(!isEditMode)}
                        type="button"
                        style={{ color: "#3295e5" }}>
                        Edit Profile</p>: <p></p>}<p></p>

                    {/* NAME field --------------------------------------------------*/}
                    {!(isEditMode) && <h1>{name}</h1>}
                    {isEditMode && <label for="name">Company Name</label>}
                    {isEditMode && <input
                        type="text"
                        name="name"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)} />}<br></br><br></br>

                    {/* IMAGE field -------------------------------------------------- */}
                    {!(isEditMode) && <p><img src={image} style={{ maxHeight: "300px", maxWidth: "100%" }} className="profile center" /></p>}
                    {isEditMode && <><p><img src={newImage} style={{ maxHeight: "300px", maxWidth: "100%" }} className="profile center" /></p>
                        <label>Edit Image</label>
                        <br></br>
                        <input
                            type="file"
                            onChange={handleImageChange}
                            accept="image/*" />  </>}<br></br><br></br>


                    {/* BIO field --------------------------------------------------*/}
                    {!(isEditMode) && <p style={{ whiteSpace: "pre-wrap" }}>{bio}</p>}
                    {isEditMode && <label>Bio</label>}<br></br>
                    {isEditMode && <textarea
                        type="text"
                        rows="15"
                        style={{ whiteSpace: "pre-wrap", width: "100%" }}
                        value={newBio}
                        onChange={(e) => setNewBio(e.target.value)} />}

                    {/* BROWSE PRODUCTS section --------------------------------------------------*/}
                    {!(isEditMode) && <Spacer/>}
                    {!(isEditMode) && <><h4 style={{display: "inline"}}>Latest Products</h4> <Link to="#" style={{textDecoration: "none", display: "inline"}}>Browse all</Link></>}
                    {!(isEditMode) && <div className="row"> 
                    <div className="col-sm-3"> 
                        {
                            products.slice(0,1).map(product => (
                                <Cards size={4} image={product['image']} title={product['title']} price={product['price']} />
                            ))
                        }
                        </div>
                    <div className="row col-sm-3" >     
                        {
                            products.slice(1,2).map(product => (
                                <Cards size={4} image={product['image']} title={product['title']} price={product['price']} />
                            ))
                        }
                            </div>
                            <div className="row col-sm-3" >     
                        {
                            products.slice(2,3).map(product => (
                                <Cards size={4} image={product['image']} title={product['title']} price={product['price']} />
                            ))
                        }
                            </div>
                    </div>}

                    <Spacer />

                    {/* CONTACT section --------------------------------------------------*/}
                    <h2>Contact</h2>
                    <hr></hr>

                    <label>Phone: </label>
                    {!(isEditMode) && " " + phone}
                    {isEditMode && " "}
                    {isEditMode && <input
                        type="text"
                        value={newPhone}
                        onChange={(e) => setNewPhone(e.target.value)} />}<br></br><br></br>

                    <label>Email: </label>
                    {!(isEditMode) && " " + email}
                    {isEditMode && <input
                        type="text"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)} />}<br></br><br></br>

                    {!(isEditMode) && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#3295e5" className="bi bi-globe2" viewBox="0 0 16 16"> <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" /> </svg>}
                    {!(isEditMode) && " "}
                    <Link to="#">{!(isEditMode) && website}</Link>
                    {isEditMode && <label>Website or Linkedin: </label>}
                    {isEditMode && <input
                        type="text"
                        value={newWebsite}
                        onChange={(e) => setNewWebsite(e.target.value)} />}<br></br><br></br>

                    {!(isEditMode) && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D4492B" className="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /></svg>}
                    {!(isEditMode) && " "}
                    {!(isEditMode) && location}
                    {isEditMode && <label>Location:</label>}
                    {isEditMode && <input
                        type="text"
                        value={newLocation}
                        onChange={(e) => setNewLocation(e.target.value)} />}

                    <Spacer />

                    {/* EXIT EDIT MODE buttons --------------------------------------------------*/}
                    <div className='row'>
                        <div className='col-sm' style={{ paddingTop: "15px" }}>
                            {(isEditMode) && <p onClick={() => setIsEditMode(!isEditMode)}
                                type="button"
                                style={{ color: "#3295e5", textAlign: "center" }}>
                                Cancel Edit</p>}
                        </div>
                        <div className='col-sm'>
                            {isEditMode && <input type='submit'
                                value="Save"
                                // onClick={() => {
                                    
                                // }} 
                                />}
                        </div>
                    </div>
                </fieldset>
            </form>
        </>
    )
}
export default Profile;