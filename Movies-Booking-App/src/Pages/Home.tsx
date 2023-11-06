import { useEffect, useState } from 'react';

import cricket from '../Assets/Cricket.avif';
import Footer from '../Components/Footer/Footer';
import HomeBanner from '../Components/HomeBanner/HomeBanner';
import HomeCarousel from "../Components/HomeCarousel/HomeCarousel";
import HomeMoviesCard from "../Components/HomeMoviesCard/HomeMoviesCard";
import axiosInstance from '../Config/AxiosInstance';
import HomeLayout from "../Layouts/HomeLayout";
import Movie from '../Types/Movie';

type MoviePoster = [{
  id: string,
  poster: string
  name: string
}]


function Home() {

  const [moviePoster, setMoviePoster] = useState<MoviePoster>([{id: "", poster: "", name: ""}]);

  async function fetchMovies() {
    try {
      const response = await axiosInstance.get("/mba/api/v1/movies");
     const movieData = response.data.data.map((movie: Movie) => {
      return {
        id: movie._id,
        poster: movie.poster,
        name: movie.name
      }
     });
     console.log(movieData);
     setMoviePoster(movieData);
    } catch(error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchMovies()
  }, []);
 
  return (
   
    <HomeLayout>
   
     <HomeCarousel />
     <div className='min-h-[66rem] w-[80vw] mx-auto flex flex-col'>
           <HomeBanner image={cricket}/>
           <div className='text-2xl font-semibold text-black mt-3'>
             Recommended Movies
           </div>
          
        <div className="flex flex-col lg:flex-row justify-center items-center ">
            {
              moviePoster && moviePoster.map((moviePoster) => {
                return <HomeMoviesCard  key={moviePoster.id} movieImage={moviePoster.poster} movieId={moviePoster.id} movieName={moviePoster.name}/>
              })
            }
       </div> 
     
          <HomeBanner image={cricket}/>
     </div>
      <div className='mt-20'>
        <Footer />
      </div>
  
    </HomeLayout>
  )
}

export default Home