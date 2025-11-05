import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav className="bg-gray-900 border-b border-white py-4 px-6 flex flex-wrap justify-center gap-6 text-lg">
        <NavLink
            to="/"
            className={({ isActive }) =>
                isActive
                    ? 'text-yellow-400 font-bold underline underline-offset-4'
                    : 'text-white hover:text-yellow-300 transition duration-200'
            }
        >
            🧮 Simple
        </NavLink>
        <NavLink
            to="/scientific"
            className={({ isActive }) =>
                isActive
                    ? 'text-yellow-400 font-bold underline underline-offset-4'
                    : 'text-white hover:text-yellow-300 transition duration-200'
            }
        >
            📐 Scientifique
        </NavLink>
    </nav>
);

export default Navbar;
