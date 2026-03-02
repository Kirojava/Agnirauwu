import { MapPin, School, Calendar } from 'lucide-react';

const Venue = () => {
  return (
    <section id="venue" className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-gradient">Venue</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="group relative overflow-hidden rounded-3xl border border-white/20 hover:border-[#FFD700]/40 transition-all duration-500">
              <div className="absolute inset-0 bg-transparent" />

              <div className="relative p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-transparent rounded-2xl flex items-center justify-center border border-white/30">
                    <School className="w-8 h-8 text-[#FFD700]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#FFD700]">Conference Venue</h3>
                    <p className="text-sm text-white font-semibold">New Delhi</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-300 leading-relaxed">
                        Vasundhara Enclave, Delhi 110096
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-1" />
                    <p className="text-gray-300">November 6-7, 2026</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-transparent rounded-3xl p-8 border border-white/10">
              <h4 className="text-xl font-bold text-[#FFD700] mb-4">About the Venue</h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our conference is hosted in a premier educational facility in New Delhi, providing
                a professional environment for diplomatic simulations.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The venue offers modern amenities and spaces designed to foster academic
                excellence, creativity, and collaborative discussion among delegates.
              </p>
            </div>
          </div>

          <div className="relative h-[600px] rounded-3xl overflow-hidden border border-[#FFD700]/20 group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/40 to-[#1a0a0f]/60 backdrop-blur-sm" />

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0926917384823!2d77.30817931508!3d28.652841982418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb6e7f7f7f7f%3A0x7f7f7f7f7f7f7f7f!2sEast%20Point%20School!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-10"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a0f] via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#1a0a0f] to-transparent">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#FFD700]" />
                <div>
                  <p className="text-white font-semibold">Conference Venue</p>
                  <p className="text-sm text-gray-300">New Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
