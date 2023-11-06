import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import TheatreShowcard from "../../Components/TheatreShowcard"
import axiosInstance from "../../Config/AxiosInstance";

 type MovieShows = {
  id: string,
  timing: string,
  format: string,
  price: number,
  noOfSeats: number
 }

type TheatreData = {
  id: string,  //theatreId
  theatreName: string,
  shows: [MovieShows] 
}

type theatre = {
  city: string,
  createdAt: string,
  updatedAt: string,
  name: string,
  movies: [string],
  owner: string,
  pincode: number,
  _v: number,
  _id: string,
}

type show = {
  createdAt: string,
  format: string,
  movieId: string,
  noOfSeats: number,
  price: number,
  timing: string,
  updatedAt: string,
  _v: number,
  _id: string,
  theatreId: theatre
}

type TheatreState = {
  [key: string] : TheatreData
} ;  

function TimeTable() {

  const {state} = useLocation()
  const navigate = useNavigate();
  const [theatreData, setTheatreData] = useState<TheatreState>({});
  
 async function fetchShowDetails() {
    try{
      const response = await axiosInstance.get(`mba/api/v1/shows?movieId=${state.movieId}`);
      const shows = response.data.data;
      const showState : TheatreState = {}
      shows.map((show : show) => {
        if(show.theatreId._id in showState) {
            showState[show.theatreId._id ].shows.push({
              id: show._id,
              timing: show.timing,
              format: show.format,
              price: show.price,
              noOfSeats: show.noOfSeats
            })
        } else {
         showState[show.theatreId._id] = {
          id: show.theatreId._id,
          theatreName: show.theatreId.name,
          shows: [{
           id: show._id,
           timing: show.timing,
           format: show.format,
           price: show.price,
           noOfSeats: show.noOfSeats
           
          }]  
         }
        }
      });
      console.log(showState)
      setTheatreData(showState)
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(!state || !state.movieName) navigate("/");
    fetchShowDetails();
  }, []);
  return (
    <div>
    <div className="min-h-[80-vh] bg-slate-300 ">
        <div className=' text-white bg-[#333545]'>
          <div className=' font-light text-7xl pt-8 pb-6 w-[80vw] mx-auto'>
              {state && state.movieName &&state.movieName}
              <div className="flex gap-3 mt-6">
                 <button className="btn btn-xs text-sm border-2 border-[#91929b] bg-transparent text-[#91929b]">BIOGRAPHY</button>
                 <button  className="btn btn-xs text-sm border-2 border-[#91929b] bg-transparent text-[#91929b]">DRAMA</button>
              </div>
           </div>
         </div>
        </div>
        <div className="bg-slate-300 mt-4 w-[100vw]">
          <div className=" w-[80vw] mx-auto rounded-xl bg-[#FFFFFf]">
          {theatreData && Object.keys(theatreData).map((theatreId : string) => {
            return <TheatreShowcard shows={theatreData[theatreId].shows} key={theatreId} name={theatreData[theatreId].theatreName}/>
          })}

            
          </div>
        </div>
    </div>
  )
}

export default TimeTable