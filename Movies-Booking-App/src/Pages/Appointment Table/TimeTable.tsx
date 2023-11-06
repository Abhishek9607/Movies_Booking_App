import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import TheatreShowcard from "../../Components/TheatreShowcard"




function TimeTable() {
  const {state} = useLocation()
  const navigate = useNavigate();

  useEffect(() => {
    if(!state || !state.movieName) navigate("/")
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
            <TheatreShowcard num={10}/>
            <TheatreShowcard num={1}/>
            <TheatreShowcard num={8}/>
            <TheatreShowcard num={36}/>
          </div>
        </div>
    </div>
  )
}

export default TimeTable