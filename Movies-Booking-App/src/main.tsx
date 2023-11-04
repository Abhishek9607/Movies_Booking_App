import './index.css'

import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

import App from './App.tsx'
// import TimeTable from '../src/Pages/Appointment Table/TimeTable.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
       <App /> 
       
      
  </BrowserRouter>
   
  
)
