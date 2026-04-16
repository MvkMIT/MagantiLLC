'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Home', 'Industries', 'Our Solutions', 'Jobs'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Maganti Group Logo" 
              className="h-12 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-slate-700 hover:text-blue-600 transition-colors text-sm font-medium tracking-wide hover:scale-105 transform duration-200"
              >
                {item}
              </a>
            ))}
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg font-medium shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30"
            >
              Contact
            </Button>
          </div>

          <button
            className="md:hidden text-slate-700 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-slate-100/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-slate-700 hover:text-blue-600 transition-colors text-sm font-medium py-2 px-4 rounded-lg hover:bg-slate-100/50"
                >
                  {item}
                </a>
              ))}
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white w-full py-3 rounded-lg font-medium shadow-lg shadow-blue-500/25"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
