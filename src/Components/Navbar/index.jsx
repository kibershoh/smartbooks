import { useContext, useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo.png'
import clsx from 'clsx';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { IoCaretUpSharp } from "react-icons/io5";
import { ImSearch } from "react-icons/im";
import navLinks from '../../Constants/navbar';
import { LanguageContext } from '../Context/LanguageContext';
const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const [profile, setProfile] = useState(false);
    const showSidebar = () => {
        setSidebar(!sidebar);
        console.log(sidebar);
    };
    const activeInput = () => {
        setInput(!input);
    };
    const Profile = () => {
        setProfile(!profile);
    };
    // Outside sidebar close
    const sidebarRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                setSidebar(false);
                setInput(false);
                setProfile(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    // Navbar scrool height
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [input, setInput] = useState(false);
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const { tr, language, setLanguage } = useContext(LanguageContext);

    // Change languages
    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };
    return (
        <div className="w-full fixed z-30" ref={sidebarRef}>
            <div
                className={clsx(
                    "flex justify-between py-2 items-center pr-5 p-1 bg-slate-200 max-w-full w-full fixed top-0 left-0",
                    scrolled ? "bg-slate-300 shadow-md" : "bg-slate-200"
                )}
            >
                <Link to={"/"} className="block max-lg:hidden">
                    <h1 className="lg:text-center text-xl font-bold logotip pl-3">
                        SMARTBOOKS
                    </h1>
                </Link>
                <Link to="#" className="block lg:hidden">
                    <button onClick={showSidebar}>
                        <HiMenuAlt1 className="HiMenuAlt1" size={22} />
                    </button>
                </Link>
                <div className="w-6/12 text-left relative pl-10 max-[1000px]:w-full max-[1000px]:pl-2 ">
                    <button
                        onClick={activeInput}
                        className={clsx(
                            "absolute font-bold left-16 top-2 max-[1000px]:left-8",
                            !input
                                ? "max-md:bg-white max-md:p-2 max-md:rounded-full max-md:-top-5"
                                : " "
                        )}
                    >
                        <ImSearch size={19} />
                    </button>
                    <input
                        type="search"
                        placeholder="search"
                        className={clsx(
                            "outline-none mx-3  p-1 pl-10 w-11/12 rounded-lg border-2 shadow-lg focus:border-2 focus:border-blue-600",
                            input ? "" : " max-md:hidden "
                        )}
                    />
                </div>
                <div className="hidden lg:block flex items-center">
                    <ul className="flex">
                        {tr('navLinks').map((nav) => (
                            <li key={nav.id} className="text-base mx-5 links">
                                <NavLink
                                    to={nav.path}
                                    className={
                                        active === nav.title
                                            ? "flex text-blue-800 border-b-2 border-blue-800"
                                            : "flex items-center"
                                    }
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                        document.title = nav.title;
                                    }}
                                    exact activeClassName="text-red-600"
                                >
                                    {nav.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center">
                    <div>
                        <select className="outline-none p-1 font-semibold text-xs border-2 border-blue-600  rounded-lg  bg-transparent	" value={language} onChange={handleLanguageChange}>
                            <option value="en" className="text-md bg-transparent  font-semibold mb-10 outline-none" style={{ height: '30px' }}>English</option>
                            <option value="uz" className="text-md bg-transparent  font-semibold mb-10 outline-none">Uzbek</option>
                        </select>
                    </div>

                    <div
                        className={
                            profile
                                ? "absolute top-20 bg-white border shadow-lg w-auto p-3 right-3 max-md:w-1/2 max-lg:w-1/2 max-sm:w-11/12"
                                : "absolute top-20 bg-white border shadow-lg w-auto p-3 hidden flex right-3"
                        }
                    >
                        <div className="w-full relative">
                            <IoCaretUpSharp size={25} className="absolute -top-8 right-0" />
                            {/* <div className="flex flex-col items-start ">
                <button onClick={() => setLanguage('en')}>English</button>
                <button onClick={() => setLanguage('es')}>Spanish</button>
               </div> */}

                        </div>
                    </div>
                </div>
                {/* <div className="flex items-center">
                    <div className="w-6 h-6 mr-7 relative flex justify-center items-center">
                        <Link to="/orders" className=" text-blue-900 m-auto rounded-md">
                            <FaBell className="" size={23}
                                onClick={() => {
                                    document.title = 'Orders';
                                }}
                            />
                            <span className="absolute right-0 -top-2 left-5  rounded-full border-3 border-amber-300  font-semibold text-red-600 w-6 h-6 flex justify-center items-center text-md">
                                12
                            </span>
                        </Link>
                    </div>
                    <div className="flex justify-between relative items-center">


                        <button onClick={Profile}>
                            <FaUserAlt size={23} className="text-blue-900" />
                        </button>
                    </div>
                    <div
                        className={
                            profile
                                ? "absolute top-20 bg-white border shadow-lg w-1/5 p-3 right-3 max-md:w-1/2 max-lg:w-1/2 max-sm:w-11/12"
                                : "absolute top-20 bg-white border shadow-lg w-1/5 p-3 hidden flex right-3"
                        }
                    >
                        <div className="w-full relative">
                            <IoCaretUpSharp size={25} className="absolute -top-8 right-0" />
                            <h2 className="font-bold">Oybek Saminov</h2>
                            <p>saminovo150947@gmail.com</p>
                            <div className="w-full border border-b-1 border-slate-400"></div>
                            <ul className="py-3">
                                <li>Edit profile</li>
                                <li>Preferences</li>
                                <li>Set status</li>
                            </ul>
                            <div className="w-full border border-b border-slate-400"></div>
                            <button className="bg-blue-600 p-1 rounded text-white mt-3">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
            <nav
                className={clsx(
                    "h-screen fixed top-0 bg-slate-200 transition-all duration-700",
                    !sidebar ? "-left-full" : " "
                )}
            >
                <div className="flex justify-between items-center pr-4 pl-2">
                    <Link to="/">
                        <span>
                            <img src={logo} width={50} className="rounded-full" alt="" />
                        </span>
                    </Link>
                    <CgClose
                        size={23}
                        className="ml-auto hidden max-lg:block"
                        onClick={showSidebar}
                    />
                </div>
                <ul className="pl-10 w-100 my-6 mt-8 ">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={clsx(
                                "text-lg mb-3 mr-7 pr-3 links",
                                active === nav.title ? " border-r-4 border-blue-400" : " "
                            )}
                        >
                            <NavLink
                                to={nav.path}
                                className={clsx(
                                    "flex p-1 px-2 rounded rounded-lg",
                                    active === nav.title
                                        ? "w-auto text-blue-800 bg-blue-200 "
                                        : "items-center"
                                )}
                                onClick={() => {
                                    setToggle(!toggle);
                                    setActive(nav.title);
                                    setSidebar(!sidebar);
                                }}
                            >
                                {nav.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="px-3 pt-56">
                    <div className="flex justify-between relative my-4 items-center">
                        <h1 className="mr-3 ml-1">
                            | Hello, <span className="font-semibold">John</span>
                        </h1>
                        <button className="flex items-center" onClick={Profile}>
                            <img
                                src={logo}
                                alt="person"
                                className="w-10 h-10 rounded-full bg-white border-2"
                            />
                        </button>
                    </div>
                    <h3 className="text-sm">Books Admin Dashboard</h3>
                    <p className="pt-3 text-xs">Made wuth by Peterdraw</p>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
