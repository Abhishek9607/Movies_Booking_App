import {MdFastfood} from "react-icons/md";
import {PiDeviceMobileBold} from "react-icons/pi";

function Chart({name} : {name: string}) {
  return (
    <div >
        <div className="flex flex-col font-semibold justify-center items-start px-4 py-2">
            <div >
            {name}
            </div>
           <div className="flex items-center justify-around gap-8 mt-2">
            <div className="text-green-400 font-light">
               <PiDeviceMobileBold className="inline text-2xl "/>M-Ticket
            </div>
            <div className="text-amber-500 font-light">
               <MdFastfood className="inline text-2xl"/>   Food & Boverages
            </div>
           </div>
        </div>
    </div>
  )
}

export default Chart