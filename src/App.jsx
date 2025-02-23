import "./css/App.css";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";

function App(){

  return (
    <div>
      <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favourites" element={<Favourites/>}/>
        </Routes>
      </main>
      </MovieProvider>
    </div>
  );
}

export default App
