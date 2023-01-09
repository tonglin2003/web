import Home from './Home'
import CompanyBio from './CompanyBio'
import PostPage from './PostPage'
import SingleProduct from './SingleProduct'
import BrowseProducts from './BrowseProducts'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/bio" element={<CompanyBio />} />
      <Route exact path="/post" element={<PostPage />} />
      <Route exact path="/product" element={<SingleProduct />} />
      <Route exact path="/browse" element={<BrowseProducts />} />

    </Routes>
  );
}

export default App;
