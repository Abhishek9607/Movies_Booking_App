import MoviePoster from '../Assets/tejas.png'
import HomeCarousel from "../Components/HomeCarousel/HomeCarousel";
import HomeMoviesCard from "../Components/HomeMoviesCard/HomeMoviesCard";
import Navbar from "../Components/Navbar" 

function Home() {
  return (
    <>
     <Navbar />
     <HomeCarousel />
   <div className='flex items-center gap-6 justify-center'>
   <HomeMoviesCard  movieImage={MoviePoster} />
   <HomeMoviesCard  movieImage={MoviePoster} />
   <HomeMoviesCard  movieImage={MoviePoster} />
   <HomeMoviesCard  movieImage={MoviePoster} />
   </div>
    </>
  )
}

export default Home