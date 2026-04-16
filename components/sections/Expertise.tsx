import { Building2, Shield, Heart, Store, Truck, Zap } from 'lucide-react';

export default function Expertise() {
  const domains = [
    {
      icon: Building2,
      title: 'Banking',
      description: 'Secure and scalable financial solutions designed to modernize banking operations and enhance customer experiences.'
    },
    {
      icon: Shield,
      title: 'Insurance',
      description: 'Streamlining digital platforms and data analytics solutions that transform policy management and claims processing.'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Empowering practitioners and patients through innovative healthcare technologies that improve outcomes and accessibility.'
    },
    {
      icon: Store,
      title: 'Retail',
      description: 'End-to-end retail technology solutions that elevate customer engagement and optimize supply chain efficiency.'
    },
    {
      icon: Truck,
      title: 'Transportation',
      description: 'Smart logistics and fleet management systems that enhance operational efficiency and reduce costs across the supply chain.'
    },
    {
      icon: Zap,
      title: 'Energy',
      description: 'Sustainable energy management solutions leveraging IoT and analytics to optimize consumption and grid performance.'
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
            What We Do Best
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 leading-tight">
            Domain expertise that drives measurable impact.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-orange-200 transition-all duration-300 group"
              >
                <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-5 group-hover:bg-orange-500 transition-colors">
                  <Icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {domain.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {domain.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
