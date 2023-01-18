import React, {Fragment} from 'react'
import {Routes, Route, BrowserRouter as Router, useLocation} from 'react-router-dom';
import Home from './Home'
import Profile from './Profile'
import PostPage from './PostPage'
import SingleProduct from './SingleProduct'
import BriefBio from './BriefBio'
import BrowseProducts from './BrowseProducts'
import Login from './Login'
import SignUp from './SignUp'
import Dashboard from './Dashboard'
import CategorizeProductPage from "./CategorizeProductPage";
import Policy from "./Policy";
import {useLayoutEffect} from 'react';


function App() {

  const ScrollToTop = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
  }

  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/get-started" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile/user/:userID" element={<Profile />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route exact path="/post" element={<PostPage />} />
        {/*  ":product_id" can be captured in a variable (more details in "SingleProducts.js") */}
        <Route exact path="/product/:category/:product_id" element={<SingleProduct />} />
        <Route exact path="/briefbio" element={<BriefBio />} />
        <Route exact path="/browse" element={<BrowseProducts />} />
        <Route exact path="/browse/categories/:category" element={<CategorizeProductPage />} />
        <Route exact path="/policy" element={<Policy/> } />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
