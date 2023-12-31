import { AiFillStar } from 'react-icons/Ai';
import { useNavigate } from 'react-router-dom';

type HomeMoviesCardProps = {
  movieImage: string,
  movieId: string,
  movieName: string
}

function HomeMoviesCard({movieImage, movieId, movieName} : HomeMoviesCardProps) {
  const navigate = useNavigate()
  function navigateToMovieListing() {
    navigate("/movie/listing", {state: {movieId, movieName}})
  }
  return (
    
    <div onClick={navigateToMovieListing} className="flex flex-col items-center justify-center h-[450px] w-[265px] lg:h-[416px] lg:w-[222px] p-5">
        <img 
           src={movieImage} 
           className="h-[95%] w-full rounded-tr-lg rounded-tl-lg"
        />
        <div className="bg-black w-full text-white text-center rounded-br-lg rounded-bl-lg ">
        <AiFillStar className='inline text-lg text-red-500  '/>
           <span>9/10</span>  {}
           <span>52.5k Votes</span>
        </div>
    </div>

  )
}

export default HomeMoviesCard