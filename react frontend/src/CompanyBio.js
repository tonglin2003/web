import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Spacer from './components/Spacer'
import UploadImage from './components/UploadImage';
import css from './css/styles.css'

function CompanyBio({}) {

    const [isEditMode, setIsEditMode] = useState(false);

    const [name, setName] =useState("Jane Doe");
    const [image, setImage] =useState(require('./img/default-avatar.jpg'));
    const [bio, setBio] =useState("Marketing specialist from the Big Apple. Helping businesses thrive since 2002.");
    const [phone, setPhone] =useState("212-123-4567");
    const [email, setEmail] =useState("support@jdoe.com");
    const [website, setWebsite] =useState("jdoe.com");
    const [location, setLocation] =useState("New York");

    
    return (
        <>
            <Header />
            <Spacer />

            <div>
                <form className="profile center" style={{width: "100%"}}>
                <fieldset>
                    {/* EDIT MODE button */}
                    {!(isEditMode) &&<p onClick={() => setIsEditMode(!isEditMode)} 
                                            type="button"
                                            style={{color: "#3295e5"}}>
                                            Edit Profile</p>}<p></p>
                        {/* NAME field */}
                        {!(isEditMode) && <h1>{name}</h1> }
                        {isEditMode && <label>Company Name</label>}
                        {isEditMode && <input 
                                            type="text" 
                                            value={name} 
                                            onChange={(e) => setName(e.target.value) }/>}
                    
                        {/* IMAGE field */}
                        {!(isEditMode) && <p><img src={image} height={300} className="profile center"/></p> }
                        {isEditMode && <UploadImage image={image} />}<br></br><br></br>

    
                        {/* BIO field */}
                        {!(isEditMode) && <p>{bio}</p>}
                        {isEditMode && <label>Bio</label>}<br></br>
                        {isEditMode && <textarea 
                                            type="text"
                                            cols="50" rows="10"
                                            value={bio} 
                                            onChange={(e) => setBio(e.target.value) }/>}

                        <Spacer/>

                        {/* CONTACT section */}
                        <h2>Contact</h2>
                        <hr></hr>

                        <label>Phone: </label>
                        {!(isEditMode) && " " + phone}
                        {isEditMode && " "}
                        {isEditMode &&  <input 
                                            type="text"
                                            value={phone} 
                                            onChange={(e) => setPhone(e.target.value) }/>}<br></br><br></br>

                        <label>Email: </label>
                        {!(isEditMode) && " " + email}
                        {isEditMode && <input 
                                            type="text"
                                            value={email} 
                                            onChange={(e) => setEmail(e.target.value) }/>}<br></br><br></br>

                        <label>{!(isEditMode) && " " + website}</label>
                        {isEditMode && "Website or Linkedin: "}
                        {isEditMode && <input 
                                            type="text"
                                            value={website} 
                                            onChange={(e) => setWebsite(e.target.value) }/>}<br></br><br></br>


                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg> 
                            <Link to="https://www.google.com/maps/place/New+York,+NY/data=!4m2!3m1!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62?sa=X&ved=2ahUKEwj3yOq79LP8AhWqEVkFHZjvCI0Q8gF6BAgIEAE">
                            {location}</Link></p> 


                    <Spacer/>

                    {/* EXIT EDIT MODE buttons */}
                    <div className='row'>
                        <div className='col-sm' style={{paddingTop: "15px"}}>
                        {(isEditMode) &&<p onClick={() => setIsEditMode(!isEditMode)} 
                                                type="button"
                                                style={{color: "#3295e5", textAlign:"center"}}>
                                                Cancel Edit</p>}
                        </div>
                        <div className='col-sm'>
                        {isEditMode && <input type='submit' 
                                                value="Save"
                                                onClick={() => setIsEditMode(!isEditMode)}/>}
                        </div>

                    </div>
                    </fieldset>

                </form>
            </div> 

            <Spacer />
            <Footer />

        </>
    )
}

// //load profile image upon upload
// function loadImage(image){
//     image = image.match(/[^\\/]*$/)[0];
//     image = "./img/"+image;
//     return image;
// }


export default CompanyBio;