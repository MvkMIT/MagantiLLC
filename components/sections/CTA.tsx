import { CircleCheck as CheckCircle2, Mail, Users, Building } from 'lucide-react';

export default function CTA() {
  const steps = [
    {
      icon: Users,
      title: 'Corporate Headquarters',
      description: 'Located in New Jersey'
    },
    {
      icon: Mail,
      title: 'Email Inquiries',
      description: 'info@magantigroup.com'
    },
    {
      icon: Building,
      title: 'Office',
      description: 'Visit our office locations'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 leading-tight">
              Let's build the future together.
            </h2>

            <div className="mt-8 space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                    <step.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=800)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px'
              }}
            >
              <div className="absolute inset-0 bg-slate-900/20" />

              <div className="absolute top-8 right-8">
                <div className="bg-orange-500 p-6 rounded-lg shadow-xl max-w-xs">
                  <h3 className="text-white font-bold text-lg mb-2">
                    Reaching Out
                  </h3>
                  <p className="text-white/90 text-sm">
                    Send us a message today and let's discuss how we can help transform your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
