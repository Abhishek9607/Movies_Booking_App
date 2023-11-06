
function MoviesTimeCard({timing, format, price}: {timing: string, format: string, price: number}) {
  return (
 
    <div className="relative mx-2 my-2  group text-sm flex flex-col  text-green-400 items-center justify-center border-black rounded-lg w-32 p-1  border">
        <div >
           {timing}
        </div>
        <div>
           {format}
        </div>
        <div className="absolute top-[100%] left-[10%]  hidden text-black group-hover:block shadow-lg py-2 px-4">
        <div className="flex flex-col justify-center items-center  ">
        <div>
         {price}
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