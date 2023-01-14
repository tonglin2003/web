import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import PostPage from './PostPage'
import SingleProduct from './SingleProduct'
import BriefBio from './BriefBio'
import BrowseProducts from './BrowseProducts'
import Login from './Login'
import Dashboard from './Dashboard'
import CategorizeProductPage from "./CategorizeProductPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/post" element={<PostPage />} />
      {/*  ":product_id" can be captured in a variable (more details in "SingleProducts.js") */}
      <Route exact path="/product/:category/:product_id" element={<SingleProduct />} />
      <Route exact path="/briefbio" element={<BriefBio />} />
      <Route exact path="/browse" element={<BrowseProducts />} />
      <Route exact path="/browse/categories/:category" element={<CategorizeProductPage />} />

    </Routes>    
  );
}

export default App;
