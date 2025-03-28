import  Home  from './Screens/Home';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import AboutUs  from './Screens/AboutUs.JSX';
import OurProducts from './Screens/OurProducts';
import Contact from './Screens/Contact';
import NavBar from './Components/NavBar';
import './styles/index.css'; 
import { TeamForm } from './Screens/TeamForm';

function App() {
    return <div className='flex flex-col '>
       <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/aboutus' element={ <AboutUs/> } />
            <Route path='/ourproducts' element= {<OurProducts/>}/>
            <Route path='/contact' element= {<Contact/>}/>
            <Route path='/teamForm' element= {<TeamForm/>}/>
            <Route/>
        </Routes>
       </BrowserRouter>
    </div>
}
export default App;


