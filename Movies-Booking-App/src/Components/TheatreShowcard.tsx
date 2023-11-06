import { AiOutlineHeart, AiOutlineInfoCircle } from "react-icons/Ai"

import Chart from "../Pages/Appointment Table/Chart"
import MoviesTimeCard from "../Pages/Appointment Table/MoviesTimeCard"

type MovieShows = {
  id: string,
  timing: string,
  format: string,
  price: number,
  noOfSeats: number
 }

function TheatreShowcard({ name, shows, price} : { name:string, price: number, shows:[MovieShows]}) {
  return (
    <div>
          <div className="w-full px-4 pt-4 pb-2 border-md ">
            <div className="flex justify-start items-start">
              <div className="max-w-[3%] text-xl mt-2">
                <AiOutlineHeart/>
              </div>
               <div className="min-w-[30%] max-w-[45%]">
                  <Chart name={name}/>
               </div>
               <div className="min-w-[6%] max-w-[10%] font-thin">
                 <AiOutlineInfoCircle  className="inline"/> <span className="text-sm"> {" "}INFO</span>
               </div>
                <div className=" ml-4 w-auto flex items-center justify-start  flex-wrap">
                  {shows.map((show: MovieShows) => {
                    return <MoviesTimeCard format={show.format} key={show.id} timing={(new Date(show.timing).toLocaleTimeString())} price={show.price}/>
                  })}
                  
                
                
                </div>
            </div>
            
            <div className="divider"></div> 
       </div>
       </div>
  )
}

export default TheatreShowcard