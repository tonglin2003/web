import React, { useState, useEffect } from 'react';


function UploadImage({image}){
    
    const [newImage, setNewImage] = useState(image);

    function handleChange(e) {
        setNewImage(URL.createObjectURL(e.target.files[0]));
   
    }

    return(
        <>
            <p><img src={newImage} height={300} className="profile center"/></p> 
            <label>Edit Image</label><br></br>
            <input 
                type="file"
                onChange={handleChange}
                accept="image/*"/>
        </>
    )

}

export default UploadImage