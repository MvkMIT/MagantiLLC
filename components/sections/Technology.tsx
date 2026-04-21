import { CircleCheck as CheckCircle2, ArrowRight } from 'lucide-react';

export default function Technology() {
  const innovations = [
    {
      title: 'Custom Workforce Solutions',
      description: 'Expert talent deployment and workforce optimization strategies aligned with your business goals.',
      icon: '🎯'
    },
    {
      title: 'Rapid Deployment',
      description: 'Accelerated project timelines with agile methodologies and experienced technical teams ready to deliver.',
      icon: '🚀'
    },
    {
      title: 'Innovation-Driven',
      description: 'Cutting-edge technology solutions that keep you ahead of the competition.',
      icon: '💡'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900/95 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-400/30 text-blue-400 text-sm font-semibold rounded-full mb-6 backdrop-blur-sm">
                Technology Innovation
              </span>
              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Technology Solutions
                </span>
              </h2>
            </div>

            <p className="text-xl text-slate-300 leading-relaxed font-light">
              We don&apos;t just deliver technology solutions—we transform businesses. Our approach combines cutting-edge tools with proven methodologies to create sustainable competitive advantages for our clients.
            </p>

            <div className="space-y-8">
              {innovations.map((item, index) => (
                <div key={index} className="group flex items-start space-x-6 p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800/70 hover:border-blue-500/30 transition-all duration-300">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl shadow-lg shadow-blue-600/25 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-300 group-hover:scale-[1.02]"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '600px'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-white font-bold text-2xl mb-2">
                        Certification Rate
                      </h3>
                      <p className="text-cyan-100 text-sm">
                        Industry-leading excellence
                      </p>
                    </div>
                    <span className="text-white text-4xl font-bold bg-white/20 px-4 py-2 rounded-xl backdrop-blur-sm">
                      98%
                    </span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 backdrop-blur-sm">
                    <div className="bg-white rounded-full h-2 w-[98%] transition-all duration-1000"></div>
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
