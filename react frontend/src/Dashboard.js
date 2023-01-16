import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import Header from './components/WebHeaderAndFooter/Header'
import Footer from './components/WebHeaderAndFooter/Footer'
import { NavLink } from 'react-router-dom';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import Analytics from './components/UserData/Analytics'
import Spacer from './components/Spacer'
import css from './css/styles.css'

//-----------------------------------------------------------------------
//           SIDEBAR COMPONENT
//-----------------------------------------------------------------------

const Sidebar = ({ setIsDashboard, setIsAnalytics}) => {

    function LoadAnalytics(){
            setIsDashboard(false);
            setIsAnalytics(true);
    }
    function LoadDashboard(){
            setIsAnalytics(false);
            setIsDashboard(true);
    }

    return (
        <div style={{ display: 'flex', overflow: 'scroll initial' }}>
            
            <CDBSidebar textColor="#fff" backgroundColor="#333">

                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <div style={{marginLeft: "5px", marginTop: "23px"}}>Menu</div>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                    <NavLink exact to="" activeClassName="activeClicked">
                        <div onClick={()=> LoadDashboard()}><CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem></div>
                    </NavLink>
                    <NavLink exact to="/myproducts" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="shop" style={{marginLeft: "9px"}}>
                            <span style={{marginLeft: "8px"}}>My Products</span></CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="/profile" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="" activeClassName="activeClicked">
                        <div onClick={()=> LoadAnalytics()}><CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem></div>
                    </NavLink>
                    <br></br>
                    <NavLink exact to="/post" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="cloud-upload"> &nbsp; <strong>Upload Product</strong></CDBSidebarMenuItem>
                    </NavLink>

                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
        </div>
    )
}


const DashHome = () => {
    //Initialize user
    const user = JSON.parse(localStorage.getItem('currentUser'));

    return(
        <div>
            <h1>Welcome back, {user.name}!</h1>
            
        </div>
    )
}
function Dashboard(){

    //-----------------------------------------------------------------------
    //           VARIABLES
    //-----------------------------------------------------------------------

    //Initialize user data
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const [name, setName] = useState();

    // Load Different tabs
    const [isDashboard, setIsDashboard] = useState(true);
    const [isAnalytics, setIsAnalytics] = useState(false);

    // Redirect back to LOGIN Page
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login');
    };

    //-----------------------------------------------------------------------
    //           EXECUTIONS
    //-----------------------------------------------------------------------
    
    // Redirect back to LOGIN if not logged in
    useEffect(() => {
        if(!(user) || user === -1){
            navigateToLogin();}    
    }, []);

      //Retrieve info from userdata
      useEffect(() => {
        setName(user.name);
    }, []);
    
    //-----------------------------------------------------------------------
    //           RETURN
    //-----------------------------------------------------------------------
    
    return(
        <>
            <Header />
            <div className="container-default" >
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <Sidebar setIsDashboard={setIsDashboard} setIsAnalytics={setIsAnalytics} />
                    <div style={{width: "100%", paddingLeft: "50px", paddingRight: "50px"}}>
                        <Spacer />
                        {isDashboard && <DashHome/>}
                        {isAnalytics && <Analytics/>}
                        <Spacer />
                        <Spacer />
                    </div>
            </div>
            </div>
            
            <Footer />
        </>
    )
    
}
export default Dashboard