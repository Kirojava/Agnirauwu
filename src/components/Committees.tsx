import { UNGALogo, UNCSWLogo, LokSabhaLogo, IPCLogo } from './CommitteeLogos';

const Committees = () => {
  const committees = [
    {
      icon: UNGALogo,
      name: 'UNGA DISEC',
      fullName: 'United Nations General Assembly - Disarmament and International Security Committee',
      agenda: 'Regulating military use of AI to prevent conflict and uphold global security',
      color: 'from-[#8B0000] to-[#A52A2A]'
    },
    {
      icon: UNCSWLogo,
      name: 'UNCSW',
      fullName: 'United Nations Commission on the Status of Women',
      agenda: 'Combatting human trafficking and exploitation of women and girls',
      color: 'from-[#A52A2A] to-[#8B0000]'
    },
    {
      icon: LokSabhaLogo,
      name: 'LOK SABHA',
      fullName: 'Lok Sabha',
      agenda: 'Promoting jobs, vocational training, and entrepreneurship for inclusive economic growth',
      color: 'from-[#8B0000] to-[#6B0000]'
    },
    {
      icon: IPCLogo,
      name: 'IPC',
      fullName: 'International Press Corps',
      agenda: 'Photographer, Caricaturist & Journalist',
      color: 'from-[#6B0000] to-[#8B0000]'
    }
  ];

  return (
    <section id="committees" className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-gradient">Our Committees</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Four dynamic committees addressing critical global challenges through diplomatic discourse and collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {committees.map((committee, index) => {
            const Icon = committee.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 hover:border-[#FFD700]/30 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-transparent" />
                
                <div className="relative p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="relative flex-shrink-0">
                      <div className={`w-20 h-20 bg-transparent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20`}>
                        <Icon className="w-10 h-10 text-[#FFD700]" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-[#FFD700] mb-2">{committee.name}</h3>
                      <p className="text-sm text-gray-400 leading-snug">{committee.fullName}</p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="text-xs font-semibold text-[#FFD700] uppercase tracking-wider mb-2">
                      Agenda
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg">{committee.agenda}</p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm text-gray-500 group-hover:text-[#FFD700] transition-colors">
                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                    <span>Learn More</span>
                    <div className="h-px flex-1 bg-gradient-to-l from-white/10 to-transparent" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-transparent rounded-2xl p-8 border border-white/10 text-center">
          <p className="text-lg text-gray-300">
            Each committee offers unique opportunities for delegates to develop their diplomatic skills,
            engage with complex global issues, and contribute to meaningful solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Committees;
