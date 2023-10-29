import cricket from '../Assets/Cricket.avif';
import MoviePoster from '../Assets/tejas.png'
import Footer from '../Components/Footer/Footer';
import HomeBanner from '../Components/HomeBanner/HomeBanner';
import HomeCarousel from "../Components/HomeCarousel/HomeCarousel";
import HomeMoviesCard from "../Components/HomeMoviesCard/HomeMoviesCard";
import Navbar from "../Components/Navbar" 

function Home() {
  return (
    <>
     <Navbar />
     <HomeCarousel />
     <div className='min-h-[66rem] w-[80vw] mx-auto flex flex-col'>
           <HomeBanner image={cricket}/>
           <div className='text-2xl font-semibold text-black mt-3'>
             Recommended Movies
           </div>
        <div className='flex items-center gap-6 justify-center mb-20'>
          <HomeMoviesCard  movieImage={MoviePoster} />
          <HomeMoviesCard  movieImage={MoviePoster} />
          <HomeMoviesCard  movieImage={MoviePoster} />
          <HomeMoviesCard  movieImage={MoviePoster} />
          <HomeMoviesCard  movieImage={MoviePoster} />
       </div>
          <HomeBanner image={cricket}/>
     </div>
      <div className='mt-20'>
        <Footer />
      </div>
  
    </>
  )
}

export default Home