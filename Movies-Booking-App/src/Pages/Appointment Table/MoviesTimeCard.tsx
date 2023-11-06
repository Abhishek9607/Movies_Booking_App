
function MoviesTimeCard() {
  return (
 
    <div className="relative mx-2 my-2  group text-sm flex flex-col  text-green-400 items-center justify-center border-black rounded-lg w-32 p-1  border">
        <div >
            10:45 PM
        </div>
        <div>
        double Atmos
        </div>
        <div className="absolute top-[100%] left-[10%]  hidden text-black group-hover:block shadow-lg py-2 px-4">
        <div className="flex flex-col justify-center items-center  ">
        <div>
          Rs. 100
         </div>
         <div className="text-green-400">
          Available
         </div>
        </div>
        </div>
  </div>
  )
}

export default MoviesTimeCard