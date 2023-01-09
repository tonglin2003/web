import React, { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Spacer from './components/Spacer'
import ProfileImage from './components/ProfileImage';

function CompanyBio() {

    const [isEditMode, setIsEditMode] = useState(false);
    
    return (
        <>
            <Header />
            <Spacer />

            <div className='wrapper'>
                <form>
                    <fieldset>
                        {!(isEditMode) && <h1>Name</h1> }
                        {isEditMode && <p>Company Name</p>}
                        {isEditMode && <input type="text" />}
            
                        <ProfileImage />
                        {isEditMode && <p>Profile Image</p>}
                        {isEditMode && <input id="upload_img" onChange="loadImage()" accept="image/jpeg, image/png" type="file" />}
        

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                            {!(isEditMode) && <p>hi dsjhcbdsjh cdscdc
                                sdcjdscjdscsdcndsjncjdsc
                                dscdsncdscdscdsncjdsncsndcjdsncjn</p>}
                            {isEditMode && <p>Bio</p>}
                            {isEditMode && <textarea type="text" />}

                            </li>
                            <li className="list-group-item">Phone:
                            {!(isEditMode) && ' 322-789-0093' }
                            {isEditMode && <input type="text" />}
                            </li>

                            <li className="list-group-item">Email:
                            {!(isEditMode) && ' test@gmail.com'}
                            {isEditMode && <input type="text" />}
                             </li>

                            <li className="list-group-item">
                            {!(isEditMode) && 'test.com'}
                            {isEditMode && 'Website or Linkedin: '}
                            {isEditMode && <input type="text" />}

                            </li>

                            <li className="list-group-item"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg> <a href="https://www.google.com/maps/place/New+York,+NY/data=!4m2!3m1!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62?sa=X&ved=2ahUKEwj3yOq79LP8AhWqEVkFHZjvCI0Q8gF6BAgIEAE"> New York </a> 
                            </li>
                        </ul>    
                    </fieldset>
                    {isEditMode && <button onClick={() => setIsEditMode(!isEditMode)} type='submit'>Save</button>}
                </form>
                {!(isEditMode) &&<button onClick={() => setIsEditMode(!isEditMode)} className="btn btn-primary" type="button">Edit Information</button>}
            </div> 

            <Spacer />
            <Footer />

        </>
    )
}

//load profile image upon upload
function loadImage(){
    var img = document.getElementById("upload_img").value;
    var filename = img.match(/[^\\/]*$/)[0];
    document.getElementById("image").src = "../img/"+filename;
}


export default CompanyBio;