
import React, {useState, useEffect} from 'react'
import Spacer from '../Spacer';

const Connect = () => {
    //Initialize user data
    const user = JSON.parse(localStorage.getItem('currentUser'));

    //Init user data from Backend
    const [userData, setUserData] = useState("");

    //Retrieve user data from the backend ------------------------------------
    useEffect(() => {
        fetch("/api/userdata")
        .then((res) => res.json())
        .then((userData) => {
            setUserData(findUserByUsername(userData, user.username))
            setLoading(false);
        });
    }, []); 

    //DEBUG USER DATA (START)-----------------
    const [loading, setLoading] = useState(true);
    if(loading && userData.length < 1){
        return <p>Loading...</p>
    }
    if(!loading && userData.length < 1){
        return <p>Opps. Something went wrong</p>
    }
    //DEBUG USER DATA (END)-----------------

    return(
        <>
        <h1>My Account</h1><br></br>
        <h4>Update your account information here.</h4><br></br>

            <form onSubmit={handleUserUpdate}>

                <label>USERNAME</label><br></br>
                <input type="text" value={accountUser.username} disabled/><br></br><br></br>

                <label>OLD PASSWORD</label><br></br>
                <input type="password" /><br></br><br></br>

                <label>NEW PASSWORD</label><br></br>
                <input type="password" onChange={(e) => setNewPassword(e.target.value)} /><br></br><br></br>

                <label>CONFIRM NEW PASSWORD</label><br></br>
                <input type="password" onChange={(e) => setNewConfirmPassword(e.target.value)} /><br></br><br></br>

                <hr></hr>

                <label>COMPANY NAME</label><br></br>
                <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)}/><br></br><br></br>

                <label>PHONE NUMBER</label><br></br>
                <input type="text" value={newPhone} onChange={(e) => setNewPhone(e.target.value)}/><br></br><br></br>

                <label>EMAIL ADDRESS</label><br></br>
                <input type="text" value={newEmail} onChange={(e) => setNewEmail(e.target.value)}/><br></br><br></br>
                
                {invalidUpdateMessage && <p style={{color: "red"}}>{invalidUpdateMessage}</p>}
                {validUpdateMessage && <p style={{color: "green"}}>{validUpdateMessage}</p>}
                <input type="submit" value="Update" />


            </form>
                
        </>
    )
}

export default Connect