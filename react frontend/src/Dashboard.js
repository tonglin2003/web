import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/DashSidebar'
import Spacer from './components/Spacer'
import css from './css/styles.css'

function Dashboard(){

    //-----------------------------------------------------------------------
    //           VARIABLES
    //-----------------------------------------------------------------------

    //Initialize user data
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const [name, setName] = useState();

    // Redirect back to LOGIN Page
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login');
    };

    //-----------------------------------------------------------------------
    //           EXECUTIONS
    //-----------------------------------------------------------------------

     //Retrieve info from userdata
     useEffect(() => {
        setName(user.name);
    }, []);

    // Redirect back to LOGIN if not logged in
    useEffect(() => {
        console.log(user)
        if(!user || user === -1){
            navigateToLogin();}    
    }, []);
    
    //-----------------------------------------------------------------------
    //           RETURN
    //-----------------------------------------------------------------------

    return(
        <>
            <Header />
            <div className="row">
                <div className="col" style={{display: "contents"}}><Sidebar /></div> 
                <div className="col">
                    <Spacer />
                    <div style={{paddingLeft: "50px"}}>
                        <h1>Welcome back, {name}!</h1>
                    </div>
                    <Spacer />
                </div>           
            </div>
            <Footer />
        </>
    )
    
}
export default Dashboard