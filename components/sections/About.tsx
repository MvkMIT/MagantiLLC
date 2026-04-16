export default function About() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 group-hover:scale-[1.02]"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '600px'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-6">
                Our Story
              </span>
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                Surpassing expectations.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  across borders.
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                We are a global IT solutions provider that delivers innovative technology services and talent acquisition solutions to help businesses thrive in the digital age.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Our expertise spans across multiple industries and technologies, enabling us to provide comprehensive solutions that drive growth and transformation.
              </p>
            </div>

            <div className="pt-4">
              <button className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-medium shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105">
                Learn More About Us
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
