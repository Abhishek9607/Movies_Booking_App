import { AiFillStar } from 'react-icons/Ai';

type HomeMoviesCardProps = {
  movieImage: string
}

function HomeMoviesCard({movieImage} : HomeMoviesCardProps) {
 
  return (
    
    <div className="flex flex-col items-center justify-center h-[450px] w-[265px] lg:h-[416px] lg:w-[222px] p-5">
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