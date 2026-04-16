import { CircleCheck as CheckCircle2 } from 'lucide-react';

export default function Technology() {
  const innovations = [
    {
      title: 'Custom Workforce Solutions',
      description: 'Expert talent deployment and workforce optimization strategies aligned with your business goals.'
    },
    {
      title: 'Rapid Deployment',
      description: 'Accelerated project timelines with agile methodologies and experienced technical teams ready to deliver.'
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Transforming Business with Technology Innovations
            </h2>

            <p className="text-slate-300 mt-6 leading-relaxed">
              We don't just deliver technology solutions—we transform businesses. Our approach combines cutting-edge tools with proven methodologies to create sustainable competitive advantages for our clients.
            </p>

            <div className="mt-8 space-y-6">
              {innovations.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-orange-500/20 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {item.description}
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
                backgroundImage: 'url(https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-orange-500 p-6 rounded-lg shadow-xl">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-white font-bold text-xl">
                      Certification Rate
                    </h3>
                    <span className="text-white text-3xl font-bold">98%</span>
                  </div>
                  <p className="text-white/90 text-sm">
                    Our consultants maintain industry-leading certification rates
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
