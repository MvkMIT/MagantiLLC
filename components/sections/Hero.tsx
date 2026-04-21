import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import { ArrowRight, Sparkles, Users, Briefcase, Globe } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <Header />
      <section className="relative min-h-screen flex items-center bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-100/20 to-transparent" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 rounded-full mb-8">
              <span className="text-sm font-medium text-blue-700">
                Trusted by Industry Leaders
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-6 leading-[1.15] tracking-tight">
              Information Technology
              <span className="block text-blue-600 mt-1">
                Consulting.
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-10">
              Our team brings experience, intelligence and innovation with leading 
              technologies to help navigate and reinvest in your business and transform in a smart manner.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg font-medium transition-all duration-200 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-6 rounded-lg font-medium transition-all duration-200"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-[560px]">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-3xl blur-2xl" />
            <Image
              src="/Team.jpg"
              alt="Maganti Team"
              width={560}
              height={480}
              className="relative rounded-2xl shadow-2xl object-cover"
              priority
            />

            <div className="absolute -left-16 top-8 bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">500+</p>
                  <p className="text-xs text-slate-500">Talents Placed</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-8 top-20 bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">50+</p>
                  <p className="text-xs text-slate-500">Projects Done</p>
                </div>
              </div>
            </div>

            <div className="absolute -left-12 bottom-12 bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">Global</p>
                  <p className="text-xs text-slate-500">Presence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
