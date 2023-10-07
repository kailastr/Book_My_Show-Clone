import './App.css';
//Routing
import { Routes, Route } from "react-router-dom"
//react-slick and carousal. By importing it here we could get it in all our pages because of the parent -> child inhertance 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//pages importing
import HomePage from './Pages/HomePage';
import MoviePage from './Pages/MoviePage';
import PlayPage from './Pages/PlayPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='movie/:id' element={< MoviePage />} />
      <Route path='/plays' element={<PlayPage />} />
    </Routes>
  );
}

export default App;
