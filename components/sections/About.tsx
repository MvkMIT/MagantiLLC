import { Award } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-slate-900/90 backdrop-blur-sm p-6 rounded-lg border border-slate-700">
                  <h3 className="text-white font-bold text-lg mb-2">
                    End-to-end IT solutions provider
                  </h3>
                  <p className="text-slate-300 text-sm">
                    We empower businesses with customized technology solutions that accelerate growth and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 leading-tight">
              Surpassing expectations, across borders.
            </h2>

            <p className="text-slate-600 mt-6 leading-relaxed">
              Since our inception in 2014, Maganti Group has evolved from a specialized European software development firm into a comprehensive global IT solutions provider. We combine deep technical expertise with strategic business acumen.
            </p>

            <p className="text-slate-600 mt-4 leading-relaxed">
              Our journey is built on trust, innovation, and an unwavering commitment to excellence. We partner with organizations across industries to navigate complex technological landscapes and achieve measurable business outcomes.
            </p>

            <div className="mt-8 flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Award className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Internationally Recognized</h4>
                <p className="text-slate-600 text-sm mt-1">
                  Rated 4.8/5 Stars
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
