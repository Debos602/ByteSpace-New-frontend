import { NavLink } from 'react-router-dom';
import logo from '../../src/assets/Header_Logo.png';
import ShoppingBag from '../../src/assets/Vector.png';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'Creators', to: '/creators' },
];

const authItems = [
  { label: 'Sign In', to: '/signin' },
  { label: 'Join Us', to: '/join' },
];



function Header() {
  return (
    <header className="w-full bg-persian-800">
      <div className="mx-auto flex h-[120px] w-full max-w-[1198px] items-end justify-between pt-[35px] pb-[47px] px-[120px]">
        <NavLink to="/">
          <img src={logo} alt="ByteSpace Logo" />
        </NavLink>

        <nav className="flex gap-6" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className='text-shuttle-gray-50'>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          {authItems.map((item) => (
            <NavLink key={item.to} to={item.to} className='text-shuttle-gray-50'>
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/cart" aria-label="Cart" className='text-shuttle-gray-50'>
            <img src={ShoppingBag} alt="Cart" />
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;