import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './Login.css'
import './Home.css'
import './ControlPanelComponent.css';
import FooterComponent from './components/FooterComponent'
//import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListCustomerComponent from './components/ListCustomerComponents'
import HomeComponent from './components/HomeComponent'
import LoginComponent from './components/LoginComponent'
import TicketDisplayComponent from './components/TicketDisplayComponent'
import ControlPanalComponent from './components/ControlPanalComponent'
import VendorListComponent from './components/VendorListComponent';
import EventListComponent from './components/EventListComponent';
import VenueListComponent from './components/VenueListComponent';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        
          <Routes>
            //http://localhost:4000
            <Route path='/' element={<HomeComponent/>}></Route>

            //http://localhost:4000/customerlist
            <Route path='/customerlist' element={<ListCustomerComponent/>}></Route>

            //http://localhost:4000/vendorlist
            <Route path='/vendorlist' element={<VendorListComponent/>}></Route>

            {/* //http://localhost:4000/about
            <Route path='/about' element={<AboutComponent/>}></Route> */}

            //http://localhost:4000/login
            <Route path='/login' element={<LoginComponent/>}></Route>

            //http://localhost:4000/ticketdisplay
            <Route path='/ticketdisplay' element={<TicketDisplayComponent/>}></Route>

            //http://localhost:4000/controlpanel
            <Route path='/controlpanel' element={<ControlPanalComponent/>}></Route>
            
            //http://localhost:4000/events
            <Route path='/events' element={<EventListComponent/>}></Route>

            //http://localhost:4000/controlpanel
            <Route path='/venues' element={<VenueListComponent/>}></Route>


        

          </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
