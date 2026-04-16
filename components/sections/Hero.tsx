import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/70 to-slate-900/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm font-medium rounded-full backdrop-blur-sm">
              Innovation Meets Excellence
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight tracking-tight">
            Welcome to
            <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Maganti Group
            </span>
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-12 font-light">
            Transforming businesses through cutting-edge technology solutions and strategic talent partnerships
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-medium shadow-xl shadow-blue-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-600 hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-medium backdrop-blur-sm transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
