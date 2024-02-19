import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RegistrationModal from '../../components/RegistrationModal/RegistrationModal';

const Header = ({ onContactClick, registeredUserName, onLogout }) => {
    const [isAtTop, setIsAtTop] = useState(true);
    const [showRegistrationModal, setShowRegistrationModal] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to control mobile menu visibility

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsAtTop(scrollPosition === 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleUpdateHeader = (newUserName) => {
        setRegisteredUserName(newUserName);
    };

    const toggleRegistrationModal = () => {
        setShowRegistrationModal(!showRegistrationModal);
    };

    const handleRegistrationSuccess = (newUserName) => {
        handleUpdateHeader(newUserName);
        setShowRegistrationModal(false);
    };
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    // Получение всех элементов бургер меню
    const burgerMenuItems = document.querySelectorAll('.burger-menu-item');
    
    // Перебор элементов и добавление обработчика клика
    burgerMenuItems.forEach(item => {
        item.addEventListener('click', () => {
            handleScrollToTop(); // Вызов функции для скролла до верха страницы
        });
    });

    const handleRegistrationClose = (newUserName) => {
        if (newUserName) {
            handleUpdateHeader(newUserName);
        }
        setShowRegistrationModal(false);
    };
    const [isNavOpen, setIsNavOpen] = useState(false);
    const handleBurgerMenuItemClick = () => {
        setIsNavOpen(false); // Закрываем бургер меню
        handleScrollToTop(); // Вызываем функцию для скролла до верха страницы
    };

    return (
        <header className={`header ${isAtTop ? 'transparent' : 'opaque'} ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <style>
                {`
                .header {
                    position: fixed;
                    width: 100%;
                    transition: 1s all;
                    z-index: 100;
                    // padding-top:10px; 
                    // padding-bottom:10px; 
                }
                .transparent {
                    background-color: rgba(0, 0, 0, 0.6);
                    transition: background-color 1s ease; /* Плавное изменение цвета фона */
                    color: #fff; /* Цвет текста для прозрачного фона */
                }
                
                .opaque {
                    background-color: rgba(0, 0, 0, 0.6); /* Черный цвет с 80% непрозрачности */
                    transition: background-color 1s ease; /* Плавное изменение цвета фона */
                    color: white; /* Цвет текста для непрозрачного фона */
                }

                @media (max-width: 768px) {
                    .burger-menu {
                        display: block; /* Display the burger menu on screens with width <= 768px */
                    }

                    .desktop-menu {
                        display: none; /* Hide desktop menu on screens with width <= 768px */
                    }

                    .header-content {
                        display: none; /* Hide header content on screens with width <= 768px */
                    }
                }

                @media (min-width: 769px) {
                    .burger-menu {
                        display: none; /* Hide the burger menu on screens with width > 768px */
                    }
                }
                `}
            </style>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className="container mx-auto header-content">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-white text-xl">ImperiaFood</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center desktop-menu"> {/* Add a class for desktop menu */}
                    <Link to="/">
                        <p className="mr-5 hover:text-gray-400">Home</p>
                    </Link>
                    <Link to="/admin">
                        <p className="mr-5 hover:text-gray-400">Admin</p>
                    </Link>
                    <Link to="/contact" onClick={onContactClick}>
                        <p className="mr-5 hover:text-gray-400">Contact</p>
                    </Link>
                    <Link to="/category">
                        <p className="mr-5 hover:text-gray-400">Catalog</p>
                    </Link>
                    <Link to="/productspage">
                        <p className="mr-5 hover:text-gray-400">Products</p>
                    </Link>
                    <Link to="/ingredients">
                        <p className="mr-5 hover:text-gray-400">Ingredients</p>
                    </Link>
                </nav>
                <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                {registeredUserName && (
                    <div className="text-white text-lg">{`${registeredUserName}`}</div>
                )}
                {registeredUserName ? (
                    <button style={{
                        border: "none",
                        backgroundColor: "#DC780B",
                        color: "white",
                        borderRadius: "3px"
                    }}
                        className="text-white border-0 py-2 px-4 focus:outline-none  text-lg ml-4"
                        onClick={onLogout}
                    >
                        Logout
                    </button>
                ) : (
                    <button style={{
                        border: "none",
                        backgroundColor: "#DC780B",
                        color: "white",
                        borderRadius: "3px"
                    }}
                        className="text-white border-0 py-2 px-4 focus:outline-none text-lg ml-4"
                        onClick={toggleRegistrationModal}
                    >
                        Login
                    </button>
                )}
                <div style={{paddingRight: "20px"}} className="burger-menu"> {/* Add class for burger menu */}
                    <div className="flex items-center justify-between border-b border-gray-400 py-8">
                        <nav>
                            <section className="MOBILE-MENU flex lg:hidden">
                                <div
                                    className="HAMBURGER-ICON space-y-2"
                                    onClick={() => setIsNavOpen((prev) => !prev)}
                                >
                                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                </div>

                                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                                    <div
                                        className="absolute top-0 right-0 px-8 py-8"
                                        onClick={() => setIsNavOpen(false)}
                                    >
                                        <svg
                                            className="h-8 w-8 text-gray-600"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </div>
                                    <ul className="flex flex-col items-center justify-between min-h-[250px]">
                                        <li onClick={handleBurgerMenuItemClick} className="border-b border-gray-400 text-black my-8 uppercase">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li onClick={handleBurgerMenuItemClick} className="border-b border-gray-400  text-black my-8 uppercase">
                                            <Link to="/admin">Admin</Link>
                                        </li>
                                        <li onClick={handleBurgerMenuItemClick} className="border-b border-gray-400 text-black my-8 uppercase">
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                        <li onClick={handleBurgerMenuItemClick} className="border-b border-gray-400 text-black my-8 uppercase">
                                            <Link to="/category">Catalog</Link>
                                        </li>
                                        <li onClick={handleBurgerMenuItemClick} className="border-b border-gray-400 text-black my-8 uppercase">
                                            <Link to="/productspage">Products</Link>
                                        </li>
                                        <li onClick={handleBurgerMenuItemClick} className="border-b border-gray-400 text-black my-8 uppercase">
                                            <Link to="/ingredients">Ingredients</Link>
                                        </li>

                                    </ul>
                                </div>
                            </section>

                            <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                                <li>
                                    <a href="/about">About</a>
                                </li>
                                <li>
                                    <a href="/portfolio">Portfolio</a>
                                </li>
                                <li>
                                    <a href="/contact">Contact</a>
                                </li>
                            </ul>
                        </nav>
                        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
                    </div>
                </div>
                </div>
            </div>
            {showRegistrationModal && <RegistrationModal onClose={handleRegistrationClose} onRegistrationSuccess={handleRegistrationSuccess} />}
        </header>
    );
};

export default Header;
