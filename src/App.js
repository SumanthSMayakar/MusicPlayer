import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./components/Menu";
import About from "./components/About";
import Music from "./components/Music";
import Pnf from "./components/Pnf";
import Track from "./components/Track";


function App(props){
  return(
    <BrowserRouter>
          <Menu/>

          <Routes>
            <Route path={`/`} element={<Music/>}/>
            <Route path={`/about`} element={<About/>}/>
            <Route path={`/tracks/artist/:id`} element={<Track/>}/>
            <Route path={`/*`} element={<Pnf/>}/>
          </Routes>
    </BrowserRouter>
  )
}

export default App;
