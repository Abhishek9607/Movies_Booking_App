import './index.css'

import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

// import TimeTable from '../src/Pages/Appointment Table/TimeTable.tsx'
import MoviesTimeCard from './Pages/Appointment Table/MoviesTimeCard'
// import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
       {/* <App /> */} <h1>hell</h1>
       {/* <TimeTable/> */}
       <MoviesTimeCard/>
  </BrowserRouter>
   
  
)
