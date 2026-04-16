import { Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Jobs() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-6">
            <Briefcase className="w-8 h-8 text-orange-500" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Featured Jobs Post
          </h2>

          <p className="text-slate-600 leading-relaxed mb-8">
            We are currently expanding our global teams across tech stacks. Discover opportunities for experienced professionals and fresh talent ready to make an impact.
          </p>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Now job posts coming soon!
            </h3>
            <p className="text-slate-600">
              Check back soon for exciting career opportunities. Follow us on LinkedIn for the latest updates and openings.
            </p>
          </div>

          <Button
            variant="ghost"
            className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 group"
          >
            Browse Applicants
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
