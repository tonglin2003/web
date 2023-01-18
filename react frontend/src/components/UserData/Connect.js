
import React, {useState, useEffect} from 'react'
import Spacer from '../Spacer';
import '../../css/styles.css'
import LinesEllipsis from 'react-lines-ellipsis'
import { Link } from 'react-router-dom';


const Connect = () => {
    //Initialize user data
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    //Init user data from Backend
    const [userData, setUserData] = useState("");

    //Retrieve user data from the backend ------------------------------------
    useEffect(() => {
        fetch("/api/userdata")
        .then((res) => res.json())
        .then((userData) => {
            setUserData(userData)
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
        <h1>Connect</h1><br></br>
        <h4>Find your people. Browse businesses just like you.</h4><br></br>

        <div className='row' style={{maxWidth: "60rem"}}>
        {userData.map((user,i) => ( i === currentUser.id ? <></>:
            
            <div className="col connectcard">
            <Link to={"/profile/user/" + user.id}><div className="connectimagebox"><img className="connectimage" src={user.image} alt="Card image"/></div></Link>
            <div className="card-body" style={{position: "relative"}}>
                <h2 style={{marginTop: "10px"}}>{user.name}</h2>
                <LinesEllipsis
                    text={user.bio}
                    maxLine='4'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />  
                    <div id="spacer" style={{width: "200px", height: "50px", marginRight:"0px"}}></div>
                    <Link style={{width: "200px", position: "absolute", bottom: "0"}} to={"/profile/user/" + user.id}>View Profile</Link>
            </div>
            </div>
            ))}
        </div>    
        </>
    )
}

export default Connect