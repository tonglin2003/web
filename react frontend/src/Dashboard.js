import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Spacer from './components/Spacer'
import css from './css/styles.css'

function Dashboard(){

    const user = JSON.parse(localStorage.getItem('currentUser'));
    const [name, setName] = useState();

    //Retrieve info from userdata
    useEffect(() => {
        setName(user.name);
    }, []);

    // Redirect back to LOGIN URL
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login');
    };

    // console.log("hi hi");
    // console.log(user);
    
    // if(!user){
    //     navigateToLogin();
    //     console.log(user);
    // }
    
    return(
        <>
            <Header />
            <Spacer />
            <h1>Welcome, {name}</h1>
            <Spacer />
            <Footer />
        </>
    )
    
}
export default Dashboard