import { useState } from 'react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-persian-800 bg-grid">
      {/* Desktop layout - preserved exactly */}
      <div className="hidden md:flex mx-auto h-[120px] w-full max-w-[1198px]   items-end justify-between pt-[35px] pb-[47px]">
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

      {/* Mobile top bar */}
      <div className="md:hidden flex h-16 items-center justify-between px-4">
        <NavLink to="/" aria-label="ByteSpace Home">
          <img src={logo} alt="ByteSpace Logo" className="h-8 w-auto" />
        </NavLink>
        <button
          className="p-2 text-shuttle-gray-50"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-persian-800 border-t border-persian-700 animate-slide-down">
          <nav className="mx-auto px-4 py-6 max-w-[1198px]" aria-label="Mobile navigation">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className='text-shuttle-gray-50 block py-2 hover:text-white transition-colors'
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              {authItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className='text-shuttle-gray-50 block py-2 hover:text-white transition-colors'
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink
                  to="/cart"
                  aria-label="Cart"
                  className='text-shuttle-gray-50 flex py-2 hover:text-white transition-colors items-center gap-2'
                  onClick={closeMobileMenu}
                >
                  <img src={ShoppingBag} alt="Cart" className="w-5 h-5" />
                  <span>Cart</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;