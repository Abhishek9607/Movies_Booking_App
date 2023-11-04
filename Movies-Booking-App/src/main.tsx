import './index.css'

import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

// import TimeTable from '../src/Pages/Appointment Table/TimeTable.tsx'
import Chart from './Pages/Appointment Table/Chart'
// import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
       {/* <App /> */} 
       <Chart/>
      
  </BrowserRouter>
   
  
)
