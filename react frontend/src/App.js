import Home from './Home'
import CompanyBio from './CompanyBio'
import PostPage from './PostPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/bio" element={<CompanyBio />} />
      <Route exact path="/post" element={<PostPage />} />
    </Routes>
  );
}

export default App;
