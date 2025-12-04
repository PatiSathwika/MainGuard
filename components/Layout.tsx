import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, BrainCircuit, Heart, Activity, Phone } from 'lucide-react';

export const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Screening Test', path: '/screening' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-700">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                <BrainCircuit className="h-8 w-8 text-teal-600" />
                <span className="font-bold text-xl text-slate-800 tracking-tight">MindGuard</span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/screening">
                <button className="ml-4 px-4 py-2 rounded-full bg-teal-600 text-white text-sm font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all shadow-md hover:shadow-lg">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-teal-600 hover:bg-slate-100 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <BrainCircuit className="h-8 w-8 text-teal-500" />
                <span className="font-bold text-xl text-white">MindGuard</span>
              </div>
              <p className="text-slate-400 max-w-sm">
                Empowering individuals through early detection and intelligent insights. 
                Your mental health matters, and we are here to help you track and improve it.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-100 tracking-wider uppercase mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Project</Link></li>
                <li><Link to="/features" className="hover:text-teal-400 transition-colors">System Features</Link></li>
                <li><Link to="/screening" className="hover:text-teal-400 transition-colors">Self-Screening</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-100 tracking-wider uppercase mb-4">Support</h3>
              <ul className="space-y-3">
                <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact Us</Link></li>
                <li><span className="text-slate-500 cursor-not-allowed">Crisis Hotline (Demo)</span></li>
                <li><span className="text-slate-500 cursor-not-allowed">Privacy Policy</span></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} MindGuard Intelligent System. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
               <Heart className="h-5 w-5 text-slate-600 hover:text-red-500 transition-colors cursor-pointer" />
               <Activity className="h-5 w-5 text-slate-600 hover:text-teal-500 transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
