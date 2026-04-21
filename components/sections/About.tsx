export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            <span className="block mb-2">Transforming Businesses</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Through Technology
            </span>
          </h2>
          
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p className="text-lg">
              We are a premier technology consulting service provider, specialized in talent acquisition and staff augmentation 
              services to businesses across the globe.
            </p>
            <p className="text-lg">
              With presence in Connecticut, USA and India, we deliver excellence that drives digital transformation.
            </p>
            <p className="text-lg">
              Our commitment to innovation and quality has made us a trusted partner for businesses worldwide.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">500+</div>
              <div className="text-sm text-slate-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
              <div className="text-sm text-slate-600">Expert Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">15+</div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">98%</div>
              <div className="text-sm text-slate-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
