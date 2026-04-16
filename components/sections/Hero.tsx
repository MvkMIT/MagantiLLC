import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-2xl">
          <div className="inline-block">
            <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded">
              INFORMATION TECHNOLOGY SOLUTIONS
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-6 leading-tight">
            Welcome to
            <br />
            <span className="text-orange-500">Maganti Group</span>
          </h1>

          <p className="text-slate-300 text-lg mt-6 leading-relaxed max-w-xl">
            Empowering global enterprises through strategic IT solutions, specialized talent acquisition, and innovative technology partnerships that drive digital transformation.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8"
            >
              Explore More
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
