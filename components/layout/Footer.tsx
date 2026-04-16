import { Linkedin, Twitter, Facebook, Mail } from 'lucide-react';
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
    title: 'Newsletter',
    description: 'Subscribe to get updates on our latest solutions and insights.'
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-semibold text-xl">Maganti Group</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering businesses worldwide through innovative technology solutions and strategic IT services.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-slate-800 hover:bg-orange-500 p-2 rounded-lg transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-orange-500 p-2 rounded-lg transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-orange-500 p-2 rounded-lg transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-orange-500 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-orange-500 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">{newsletter.title}</h3>
            <p className="text-slate-400 text-sm mb-4">
              {newsletter.description}
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 bg-slate-800 border border-slate-700 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:border-orange-500"
              />
              <Button
                className="bg-orange-500 hover:bg-orange-600 rounded-l-none"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2024 Maganti Group. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm">
              Crafted with excellence in New Jersey
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
