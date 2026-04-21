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
      name: 'Pavan Kumar GN',
      role: 'Sr. Account Manager',
      image: '/leadership/pavan.jpg'
    },
    {
      name: 'Venkata Sainath',
      role: 'Director of Operations',
      image: '/leadership/sai.jpg'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Simple Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Meet Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              {' '}Leadership
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            The visionaries behind Maganti Group&apos;s success and innovation
          </p>
        </div>

        {/* Leadership Team Grid */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div
                  className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-cover bg-center transition-all duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${member.image})`,
                  }}
                />
                <h4 className="text-slate-900 font-semibold text-base mb-1">
                  {member.name}
                </h4>
                <p className="text-blue-600 text-sm font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Story */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h3>
          </div>
          
          <div className="bg-gradient-to-br from-slate-50 to-blue-50/20 rounded-2xl p-12">
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p className="text-lg">
                Maganti Group, LLC is a technology consulting service provider, specialized in providing 
                talent acquisition and staff augmentation services to businesses across the globe.
              </p>
              <p className="text-lg">
                We have our presence in Connecticut, USA and India. We believe in providing the best 
                services to our clients and employees.
              </p>
              <p className="text-lg">
                We are committed to our values and we strive to achieve excellence in everything we do.
              </p>
              <p className="text-lg">
                We are a team of dedicated professionals who are passionate about technology and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
