import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import CompanyBio from './CompanyBio'
import PostPage from './PostPage'
import SingleProduct from './SingleProduct'
import BriefBio from './BriefBio'
import BrowseProducts from './BrowseProducts'
import Login from './Login'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route exact path="/bio" element={<CompanyBio />} />
      <Route exact path="/post" element={<PostPage />} />
      <Route exact path="/product" element={<SingleProduct />} />
      <Route exact path="/briefbio" element={<BriefBio />} />
      <Route exact path="/browse" element={<BrowseProducts />} />

    </Routes>    
  );
}

export default App;
