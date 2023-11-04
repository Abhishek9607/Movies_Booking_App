import dummy from '../Assets/dummyprofile.png'
import logo from '../Assets/logo.png'

function Navbar() {
  return (
    <div className=' bg-[#333545] '>
        <div className="navbar bg-[#333545] w-[80vw] mx-auto ">
        <div className="flex-1">
           <div className='h-12   mx-10'>
            <img className='h-[100%] w-36 ' src={logo}  />
           </div>
            <div className="form-control w-3/5 lg:block hidden">
                <input type="text" placeholder="Search" className="input input-bordered w-91 md:w-auto" />
            </div>
        </div>
        
        <div className="flex-none gap-2">
            
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img src={dummy} />
                </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content text-white bg- [#333545] rounded-box w-52">
                <li>
                <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
    </div>
    <div className='text-white bg-[#22232d]'>
      <div className='flex gap-4 w-[80vw] mx-auto py-2 font-thin'>
        <div>
           Movies
        </div>
        <div>
           Stream
        </div>
        <div>
          Events
        </div>
        <div>
           Plays
        </div>
        <div>Sports</div>
        <div>Activities</div>
        <div>Buzz</div>
        <div>ICC MEN'S CRICKET WORLD CUP INDIA 2023</div>

      </div>
       
    </div>

    </div>
  )
}

export default Navbar