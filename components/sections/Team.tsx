export default function Team() {
  const teamMembers = [
    {
      name: 'Prasad Maganti',
      role: 'Founder and CEO',
      image: '/leadership/prasad_ceo.png'
    },
    {
      name: 'Sushma Maganti',
      role: 'Co-Founder and CTO',
      image: '/leadership/Sushma.jpg'
    },
    {
      name: 'Gita Poudel',
      role: 'Director of Human Capital/Compliance',
      image: '/leadership/Gita.jpg'
    },
    {
      name: 'Venkata Sainath',
      role: 'Director of Operations',
      image: '/leadership/sai.jpg'
    },
    {
      name: 'Pavan Kumar GN',
      role: 'Sr. Account Manager',
      image: '/leadership/pavan.jpg'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-6">
            Leadership Team
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
            The Minds Behind
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Maganti
            </span>
          </h2>
          <p className="text-xl text-slate-600 mt-6 font-light max-w-2xl mx-auto">
            Meet the visionary leaders driving our commitment to excellence and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300 rounded-2xl"></div>
                
                <div className="relative">
                  <div
                    className="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden bg-cover bg-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
                    style={{
                      backgroundImage: `url(${member.image})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-slate-900 font-bold text-lg mb-2 transition-colors duration-300 group-hover:text-blue-600">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 text-sm font-medium bg-blue-50 px-3 py-1 rounded-full inline-block">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
