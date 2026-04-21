import { Banknote, MonitorPlay, Users, ShoppingBag, Truck, Fuel } from 'lucide-react';

export default function Expertise() {
  const domains = [
    {
      icon: Banknote,
      title: 'Banking & Financial Services',
      description: 'Secure and scalable financial solutions designed to modernize banking operations and enhance customer experiences.'
    },
    {
      icon: MonitorPlay,
      title: 'Media & Technology',
      description: 'Advanced digital platforms and streaming services that transform content delivery and user engagement.'
    },
    {
      icon: Users,
      title: 'Public Services',
      description: 'Comprehensive government and public sector solutions that improve citizen services and operational efficiency.'
    },
    {
      icon: ShoppingBag,
      title: 'Retail',
      description: 'Innovative e-commerce platforms and customer experience solutions that drive sales and loyalty.'
    },
    {
      icon: Truck,
      title: 'Transportation & Hospitality',
      description: 'Smart logistics and hospitality management systems that optimize operations and enhance guest experiences.'
    },
    {
      icon: Fuel,
      title: 'Energy & Utilities',
      description: 'Sustainable energy management and utility optimization solutions for a greener future.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Our Expertise</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We deliver innovative solutions across multiple industries with proven expertise and cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/50 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300 group text-center"
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <domain.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {domain.title}
              </div>
              <p className="text-slate-600 font-medium">
                {domain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
