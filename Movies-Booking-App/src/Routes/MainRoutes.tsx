import { Route,Routes } from "react-router-dom"

import Home from "../Pages/Home"
import MoviesListing from "../Pages/MoviesListing"

function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home   />}/>
        <Route path="/movies/time" element={<MoviesListing/>}/>
    </Routes>
  )
}

export default MainRoutes