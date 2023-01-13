
import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const DashSidebar = () => {
    return (
    <div style={{ display: 'flex', height: '90vh', overflow: 'scroll initial' }}>
        
        <CDBSidebar textColor="#fff" backgroundColor="#333">

            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                <div style={{marginLeft: "5px", marginTop: "23px"}}>Menu</div>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
                <CDBSidebarMenu>
                <NavLink exact to="/dashboard" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/myproducts" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="shop" style={{marginLeft: "9px"}}>
                        <span style={{marginLeft: "8px"}}>My Products</span></CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/profile" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/analytics" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
                </NavLink>
                <br></br>
                <NavLink exact to="/post" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="cloud-upload"> &nbsp; <strong>Upload Product</strong></CDBSidebarMenuItem>
                </NavLink>

                </CDBSidebarMenu>
            </CDBSidebarContent>
        </CDBSidebar>
    </div>)
  }
  
  export default DashSidebar;