import { Briefcase, ArrowRight, Users, TrendingUp, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Jobs() {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Team Members'
    },
    {
      icon: TrendingUp,
      value: '15+',
      label: 'Open Positions'
    },
    {
      icon: Clock,
      value: '48h',
      label: 'Avg Response Time'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl mb-8 shadow-lg shadow-blue-500/25">
              <Briefcase className="w-10 h-10 text-white" />
            </div>

            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-6">
              Career Opportunities
            </span>
            
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
              Featured
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Jobs Post
              </span>
            </h2>

            <p className="text-xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto">
              We are currently expanding our global teams across tech stacks. Discover opportunities for experienced professionals and fresh talent ready to make an impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/50 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-slate-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-200/50 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300"></div>
            
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mb-6">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Exciting Opportunities
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Coming Soon!
                </span>
              </h3>
              
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto font-light">
                Check back soon for exciting career opportunities. Follow us on LinkedIn for the latest updates and openings as we continue to grow our global team.
              </p>

              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-medium shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105"
              >
                Browse Applicants
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
