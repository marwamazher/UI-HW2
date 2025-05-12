import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Index from './pages/Index'
import UniqueFoods from './pages/UniqueFoods';
import Contact from './pages/Contact';
import DansLeNoir from './pages/restaurants/DansLeNoir';
import MurderExpress from './pages/restaurants/MurderExpress'
import BargeEast from './pages/restaurants/BargeEast'
import ArtAndCulture from './pages/ArtAndCulture';
import Quiz from './pages/Quiz'
import Sarastro from './pages/restaurants/Sarastro';
import Bustrome from './pages/restaurants/Bustronome';
import PickNCheese from './pages/restaurants/PickNCheese';
import VanGogh from './pages/artandculturepages/VanGogh';
import Shakespeare from './pages/artandculturepages/Shakespeare';
import BritishMuseum from './pages/artandculturepages/BritishMuseum';
import NationalGallery from './pages/artandculturepages/NationalGallery';
import RoyalOpera from './pages/artandculturepages/RoyalOpera';

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="app-container">
      <Header /> 
      {/* routing for all links */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/unique-food" element={<UniqueFoods />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dans-le-noir" element={<DansLeNoir />} />
          <Route path="/murder-express" element={<MurderExpress />} />
          <Route path="/barge-east" element={<BargeEast />} />
          <Route path="/sarastro" element={<Sarastro />} />
          <Route path="/pick-n-cheese" element={<PickNCheese />} />
          <Route path="/bustronome" element={<Bustrome />} />
          <Route path="/art-and-culture" element={<ArtAndCulture />} />
          <Route path="/van-gogh-exhibition" element={<VanGogh />} />
          <Route path="/shakespeares-globe" element={<Shakespeare />} />
          <Route path="/british-museum" element={<BritishMuseum />} />
          <Route path="/national-gallery" element={<NationalGallery />} />
          <Route path="/royal-opera" element={<RoyalOpera />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
        <footer className="footer">
          <p>© 2025 London Break</p>
        </footer>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
