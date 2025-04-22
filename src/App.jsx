import  Home  from './Screens/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OurProducts from './Screens/OurProducts';
import Contact from './Screens/Contact';
import AboutUs from './Screens/AboutUs';
import NavBar from './Components/NavBar';
import './styles/index.css'; 
import { TeamForm } from './Screens/TeamForm';
import ScrollToTop from './Components/ScrollToTop';
import Formulario from './Components/Formulario';

function App() {
    return <div className='flex flex-col '>
       <Router>
       <ScrollToTop/>
        <NavBar/>
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/aboutus' element={ <AboutUs/> } />
            <Route path='/ourproducts' element= {<OurProducts/>}/>
            <Route path='/contact' element= {<Contact/>}/>
            <Route path='/teamForm' element= {<TeamForm/>}/>
            <Route path="/formulario/:tipo" element={<Formulario/>} /> 
        </Routes>
       </Router>
    </div>
}
export default App;


