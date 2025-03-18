import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const links = [
  { link: "/aboutus", text: "Nosotros", id: 2 },
  { link: "/ourproducts", text: "Nuestros Productos", id: 3 },
  { link: "/contact", text: "Contacto", id: 4 },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Función para actualizar el tamaño de la ventana
  const detectSize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => window.removeEventListener("resize", detectSize);
  }, []);

  return (
    <nav className="bg-[#9caf88] p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="w-44 ml-2">
          <img src="/img/logo.png" alt="Logo" className="w-44" />
        </Link>

        {/* Menú en pantallas grandes */}
        <ul className="hidden md:flex space-x-20 mr-5 text-white miFuenteBold text-[18px]">
          {links.map((l) => (
            <li key={l.id}>
              <Link to={l.link} className="hover:underline">
                {l.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icono de menú hamburguesa en pantallas pequeñas */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Menú desplegable en pantallas pequeñas */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-[#9caf88] text-white py-4 space-y-4">
          {links.map((l) => (
            <li key={l.id}>
              <Link to={l.link} onClick={() => setIsMenuOpen(false)}>
                {l.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;


/*import React from 'react';
import './App.css';  // Asegúrate de que tu archivo CSS esté importado.

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src="ruta-a-tu-logo.png" alt="Logo" className="logo" />
        <h1>Bienvenido a mi aplicación</h1>
      </header>
    </div>
  );
};

export default App;
*/

/*.App {
  text-align: center;
}
.App-header {
  position: relative;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

.logo {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100px; 
  height: auto;} 
  






  flex p-2 flex-col items-center w-full h-full px-4 bg-[#9caf88]
  
  
  
  import React, { useEffect, useState } from 'react';
import {
    AiOutlineMenu,
    AiOutlineClose
} from 'react-icons/ai';
import { Link } from 'react-router-dom';


const links = [
 
     {
        link: '/aboutus',
        text: 'Nosotros',
        id: 2,
    },
    {
        link: '/ourproducts',
        text: 'Nuestros Productos',
        id: 3,
    },
    {
        link: '/contact',
        text: 'Contacto',
        id: 4,
    },
]

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [windowDimension, setWindowDimension] = useState({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth
    });


    const detectSize = () => {
        setWindowDimension({
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth
        });
    }

    useEffect(() => {
        window.addEventListener("resize", detectSize);
        return () => window.removeEventListener("resize", detectSize);
      }, []);


    return (
        <div className='flex p-4 bg-[#9caf88]'>
            <Link to={'/'} className='p-2 items-center w-48'>
                <img src='/logo.png' alt='Logo' className='logo' />
            </Link>
            <div className={
                !isMenuOpen ? 'flex ml-auto space-x-6 p-4 items-center bg-[#9caf88]'
                    : 'flex p-2 flex-col items-center w-full h-full px-4 bg-[#9caf88]'
            }>


                {
                    windowDimension.innerWidth > 768 ?
                        links.map(l => (
                            <Link className='text-xl text-white font-semibold' to={l.link} key={l.id}>{l.text}</Link>
                        )) :
                        isMenuOpen && links.map(l => (
                            <Link className='text-xl text-white font-semibold' to={l.link} key={l.id}>{l.text}</Link>
                        ))

                }

                {

                    !isMenuOpen && windowDimension.innerWidth < 768 ? (
                        <AiOutlineMenu
                            cursor={'pointer'}
                            size={24} color='#f2f2f2'
                            onClick={() => { setIsMenuOpen(true) }} />
                    ) : windowDimension.innerWidth < 768 && (
                        <AiOutlineClose
                            cursor={'pointer'}
                            size={24} color='#f2f2f2'
                            onClick={() => { setIsMenuOpen(false) }} />
                    )
                }
            </div>
        </div>

    )
}

export default NavBar;

/*import React from 'react';
import './App.css';  // Asegúrate de que tu archivo CSS esté importado.

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src="ruta-a-tu-logo.png" alt="Logo" className="logo" />
        <h1>Bienvenido a mi aplicación</h1>
      </header>
    </div>
  );
};

export default App;
*/

/*.App {
  text-align: center;
}

.App-header {
  position: relative;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

.logo {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100px; 
  height: auto;} 
  






  flex p-2 flex-col items-center w-full h-full px-4 bg-[#9caf88]
  

  
  */