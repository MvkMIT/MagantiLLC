import { Linkedin, Twitter, Facebook, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const company = [
    'About Us',
    'Careers',
    'Blog',
    'Contact'
  ];

  const legal = [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy'
  ];

  const newsletter = {
    title: 'Stay Connected',
    description: 'Get the latest insights and updates delivered to your inbox.'
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="font-semibold text-2xl tracking-tight">Maganti Group</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8 font-light">
              Empowering businesses worldwide through innovative technology solutions and strategic IT services that drive digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/maganti-group-llc-we-serve-you-grow-96ba561a2/" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 hover:bg-blue-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/Maganti-Group-LLC-1720121608231717/" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 hover:bg-blue-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-8 text-white">Company</h3>
            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-blue-400 text-sm font-medium transition-colors duration-300 hover:translate-x-1 inline-flex items-center group">
                    {item}
                    <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-8 text-white">Legal</h3>
            <ul className="space-y-4">
              {legal.map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-blue-400 text-sm font-medium transition-colors duration-300 hover:translate-x-1 inline-flex items-center group">
                    {item}
                    <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-8 text-white">{newsletter.title}</h3>
            <p className="text-slate-400 mb-6 font-light">
              {newsletter.description}
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500 focus:bg-slate-800/70 backdrop-blur-sm transition-all duration-300 pr-14"
              />
              <Button
                className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl px-4 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-slate-400 text-sm font-light">
              © 2024 Maganti Group. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <p className="text-slate-400 text-sm font-light">
                Crafted with excellence in New Jersey
              </p>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
