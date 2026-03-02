import { Users, Award, Globe, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Engage with international issues and represent diverse nations in diplomatic simulations.'
    },
    {
      icon: Users,
      title: 'Leadership Development',
      description: 'Develop critical thinking, public speaking, and negotiation skills essential for future leaders.'
    },
    {
      icon: Award,
      title: 'Excellence Recognition',
      description: 'Outstanding delegates receive awards and recognition for their diplomatic contributions.'
    },
    {
      icon: Target,
      title: 'Real-World Impact',
      description: 'Address pressing global challenges through collaborative problem-solving and debate.'
    }
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-gradient">About Agnira MUN</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Agnira MUN 2026 presents an exceptional platform
            for students to experience the art of diplomacy, debate, and global cooperation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-transparent rounded-2xl border border-white/10 hover:border-[#FFD700]/30 transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-transparent" />

                <div className="relative">
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-transparent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                      <Icon className="w-8 h-8 text-[#FFD700]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#FFD700] mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-transparent rounded-3xl p-12 border border-white/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gradient mb-6">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Agnira MUN aims to empower the next generation of leaders by providing a platform for
                meaningful discourse on global issues. We believe in fostering diplomatic excellence,
                critical thinking, and collaborative problem-solving.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Through engaging debates and negotiations, delegates develop skills that extend far beyond
                the conference hall, preparing them to become confident, responsible, and compassionate global citizens.
              </p>
            </div>

            <div className="space-y-6">
              {[
                'Holistic education and all-round development',
                'Academic excellence and creative thinking',
                'Leadership and diplomatic skills',
                'Global citizenship and responsibility'
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#FFD700] group-hover:scale-150 transition-transform" />
                  <p className="text-gray-300 group-hover:text-[#FFD700] transition-colors">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
