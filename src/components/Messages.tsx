import { Quote } from 'lucide-react';

const Messages = () => {
  const messages = [
    {
      name: 'Conference Secretariat',
      title: 'Secretary General',
      message:
        "We're thrilled to welcome you to Agnira MUN 2026. This conference offers a unique opportunity for growth, learning, and leadership development. As you engage in debates, negotiations, and discussions, we hope you'll not only develop your skills but also forge lasting bonds with fellow delegates. We're confident that this conference will be a resounding success."
    },
    {
      name: 'Organizing Committee',
      title: 'Director General',
      message:
        "I'm excited to share our upcoming MUN event—an opportunity to engage in debates, advocate for important issues, and develop leadership skills. By representing assigned countries, you'll gain a deeper understanding of global challenges and contribute to meaningful change. I encourage you to participate wholeheartedly and let your passion shine!"
    }
  ];

  return (
    <section id="messages" className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-gradient">Leadership Messages</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Words of encouragement and vision from our esteemed leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {messages.map((message, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 hover:border-[#FFD700]/30 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-transparent" />

              <div className="relative p-8">
                <Quote className="w-12 h-12 text-[#FFD700] opacity-20 mb-6" />

                <p className="text-gray-300 leading-relaxed mb-8 text-lg">{message.message}</p>

                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-[#FFD700] to-transparent" />
                </div>

                <div className="mt-4">
                  <h4 className="text-xl font-bold text-[#FFD700]">{message.name}</h4>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">{message.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Messages;
