import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/LogoVBC_Black.png'; // Assicurati di avere il logo in questa directory

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    const toggleDropdown = () => {
        if (isMobile) {
            setDropdownOpen(!dropdownOpen);
        }
    };

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (!isMobile) {
            setDropdownOpen(false); // Close dropdown on desktop resize
        }
    }, [isMobile]);

    return (
        <>
            <nav
                className={`fixed w-full top-0 z-20 transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-90 backdrop-blur-md shadow-md' : 'bg-transparent backdrop-blur-sm bg-white/60'}`}>
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-10"/>
                    </div>
                    <div className="flex items-center md:hidden">
                        <button onClick={handleMenuToggle} className="text-gray-800 focus:outline-none">
                            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                    <ul className={`flex-col md:flex-row md:flex md:space-x-6 items-center absolute md:relative top-full left-0 md:top-auto md:left-auto bg-white md:bg-transparent w-full md:w-auto transition-all duration-300 ${menuOpen ? 'block' : 'hidden'} md:block`}>
                        <li><Link to="/" className="block px-4 py-2 md:p-0 text-gray-800 hover:text-gray-600">Home</Link></li>
                        <li
                            className="relative"
                            onMouseEnter={() => !isMobile && setDropdownOpen(true)}
                            onMouseLeave={() => !isMobile && setDropdownOpen(false)}
                        >
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center w-full px-4 py-2 md:p-0 text-gray-800 hover:text-gray-600"
                            >
                                Società <FaChevronDown className="ml-1"/>
                            </button>
                            {dropdownOpen && (
                                <ul className="absolute top-full left-0 w-full md:w-48 bg-white shadow-md rounded-md z-10">
                                    <li>
                                        <Link to="/storia"
                                              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:rounded-md">Storia</Link>
                                    </li>
                                    <li>
                                        <Link to="/direttivo"
                                              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:rounded-md">Direttivo</Link>
                                    </li>
                                    <li>
                                        <Link to="/staff"
                                              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:rounded-md">Staff</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li><Link to="/stravalesturo" className="block px-4 py-2 md:p-0 text-gray-800 hover:text-gray-600">Stra Val Esturo</Link></li>
                        <li><Link to="/squadre" className="block px-4 py-2 md:p-0 text-gray-800 hover:text-gray-600">Squadre</Link></li>
                        <li><Link to="/news" className="block px-4 py-2 md:p-0 text-gray-800 hover:text-gray-600">News</Link></li>
                        <li><Link to="/contatti" className="block text-white bg-black px-4 py-2 rounded-full hover:bg-gray-800">Contatti</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;







