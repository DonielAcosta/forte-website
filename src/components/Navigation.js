import { Menu, X } from 'lucide-react';
import { navigationItems } from '../constants';

const Navigation = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }) => {
  return (
    <nav className="bg-slate-900 text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
              F
            </div>
            <div>
              <div className="text-xl font-bold text-blue-400">FORTE</div>
              <div className="text-xs text-neutral-300">Ingeniería Manufactura</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize hover:text-blue-400 transition-colors ${
                  activeSection === item ? 'text-blue-400 font-semibold' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          {navigationItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block w-full text-left px-4 py-3 hover:bg-slate-700 capitalize"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
