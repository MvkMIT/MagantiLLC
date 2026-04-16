import { CircleCheck as CheckCircle2, Mail, Users, Building, MapPin, Phone, ArrowRight } from 'lucide-react';

export default function CTA() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Corporate Headquarters',
      description: 'New Jersey, United States',
      detail: 'Strategic East Coast Location'
    },
    {
      icon: Mail,
      title: 'Email Inquiries',
      description: 'info@magantigroup.com',
      detail: '24/7 Response Guaranteed'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: '+1 (555) 123-4567',
      detail: 'Business Hours: Mon-Fri 9AM-6PM EST'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-6">
              Get In Touch
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
              Let&apos;s build the
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                future together.
              </span>
            </h2>
            <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto">
              Ready to transform your business? Connect with our team today and discover how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="flex items-start space-x-6 p-6 rounded-2xl bg-white shadow-sm border border-slate-200/50 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300">
                      <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <Icon className="w-7 h-7 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {info.title}
                        </h3>
                        <p className="text-slate-700 font-medium mb-1">
                          {info.description}
                        </p>
                        <p className="text-slate-500 text-sm">
                          {info.detail}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-300 group-hover:scale-[1.02]"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '600px'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
                    <h3 className="text-white font-bold text-2xl mb-4">
                      Start Your Journey
                    </h3>
                    <p className="text-blue-100 text-lg mb-6 font-light">
                      Send us a message today and let&apos;s discuss how we can help transform your business.
                    </p>
                    <button className="group inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300 hover:scale-105">
                      Contact Us Now
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
