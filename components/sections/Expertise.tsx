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
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-6">
            Our Expertise
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
            Domain expertise that drives
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              measurable impact.
            </span>
          </h2>
          <p className="text-xl text-slate-600 mt-6 font-light max-w-2xl mx-auto">
            Specialized solutions across industries that deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300 rounded-2xl"></div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4 transition-colors duration-300 group-hover:text-blue-600">
                    {domain.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed font-light">
                    {domain.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
