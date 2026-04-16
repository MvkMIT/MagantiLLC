'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Home', 'Industries', 'Our Solutions', 'Jobs'];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-white font-semibold text-xl">Maganti Group</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-white hover:text-orange-500 transition-colors text-sm font-medium"
              >
                {item}
              </a>
            ))}
            <Button
              size="sm"
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Contact
            </Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-6 bg-slate-900/95 backdrop-blur-sm rounded-lg p-6">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white hover:text-orange-500 transition-colors text-sm font-medium"
                >
                  {item}
                </a>
              ))}
              <Button
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 text-white w-full"
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
