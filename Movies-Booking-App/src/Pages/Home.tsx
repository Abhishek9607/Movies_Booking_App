import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from 'react';

// import Slider from "react-slick";
import cricket from '../Assets/Cricket.avif';
import Footer from '../Components/Footer/Footer';
import HomeBanner from '../Components/HomeBanner/HomeBanner';
import HomeCarousel from "../Components/HomeCarousel/HomeCarousel";
import HomeMoviesCard from "../Components/HomeMoviesCard/HomeMoviesCard";
import Navbar from "../Components/Navbar" 
import axiosInstance from '../Config/AxiosInstance';
import Movie from '../Types/Movie';

// type MoviePoster = [{
//   id: string,
//   poster: string
// }]


function Home() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1
  // };
 
  const [moviePoster, setMoviePoster] = useState([{id: "", poster: ""}]);

  async function fetchMovies() {
    try {
      const response = await axiosInstance.get("/mba/api/v1/movies");
     const movieData = response.data.data.map((movie: Movie) => {
      return {
        id: movie._id,
        poster:movie.poster,
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
   
    <>
     <Navbar />
     <HomeCarousel />
     <div className='min-h-[66rem] w-[80vw] mx-auto flex flex-col'>
           <HomeBanner image={cricket}/>
           <div className='text-2xl font-semibold text-black mt-3'>
             Recommended Movies
           </div>
           {/* <Slider {...settings}> */}
        <div className="flex flex-col justify-center items-center ">
            {
              moviePoster && moviePoster.map((moviePoster) => {
                return <HomeMoviesCard  key={moviePoster.id} movieImage={moviePoster.poster} />
              })
            }
       </div>
       {/* </Slider> */}
          <HomeBanner image={cricket}/>
     </div>
      <div className='mt-20'>
        <Footer />
      </div>
  
    </>
  )
}

export default Home