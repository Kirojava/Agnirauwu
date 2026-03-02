import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B0000]/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8 animate-fade-in">
          <div className="inline-block">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-4">
              <span className="block text-gradient drop-shadow-2xl">AGNIRA</span>
              <span className="block text-gradient drop-shadow-2xl">MUN</span>
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent" />
          </div>
        </div>

        <div className="mb-8 text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-gray-300">
          AGNIRA MUN 2026
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-lg">
          <div className="flex items-center gap-3 bg-transparent px-6 py-3 rounded-full border border-white/20">
            <Calendar className="w-5 h-5 text-[#FFD700]" />
            <span className="font-medium text-white drop-shadow-md">November 6-7, 2026</span>
          </div>
          <div className="flex items-center gap-3 bg-transparent px-6 py-3 rounded-full border border-white/20">
            <MapPin className="w-5 h-5 text-[#FFD700]" />
            <span className="font-medium text-white drop-shadow-md">New Delhi</span>
          </div>
        </div>

        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
          Join us for a premier Model United Nations conference where future leaders engage in
          diplomatic excellence, debate global issues, and forge lasting connections.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToRegistration}
            className="group relative px-10 py-5 bg-transparent text-[#FFD700] text-xl font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 border border-white/30 hover:border-[#FFD700]/60"
          >
            <span className="relative z-10 flex items-center gap-2 tracking-wide">
              REGISTER NOW!
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border border-white/20 bg-transparent text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 drop-shadow-md"
          >
            Learn More
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '4', label: 'Committees' },
            { number: '2', label: 'Days' },
            { number: '200+', label: 'Delegates' },
            { number: '1', label: 'Experience' }
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 bg-transparent rounded-xl border border-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-sm text-white/90 uppercase tracking-wider font-semibold drop-shadow-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
