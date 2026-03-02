import { FileText, CreditCard, Send, CheckCircle, IndianRupee, Users, Newspaper } from 'lucide-react';

const Registration = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Fill Registration Form',
      description: 'Carefully complete all required fields with accurate and up-to-date information.'
    },
    {
      icon: CreditCard,
      title: 'Make Payment',
      description: 'Follow the payment link, complete the transaction, and attach a clear screenshot.'
    },
    {
      icon: Send,
      title: 'Submit Form',
      description: 'Once completed, submit the form ensuring all details and attachments are in place.'
    },
    {
      icon: CheckCircle,
      title: 'Confirmation',
      description: 'Receive confirmation email with your assigned country and committee details.'
    }
  ];

  const pricing = [
    {
      icon: Users,
      type: 'Individual Delegation',
      price: '2,199',
      description: 'For independent delegates'
    },
    {
      icon: Users,
      type: 'School Delegation',
      price: '1,999',
      description: 'For school groups'
    },
    {
      icon: Newspaper,
      type: 'International Press',
      price: '1,999',
      description: 'For press corps members'
    }
  ];

  return (
    <section id="registration" className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-gradient">Registration</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join Agnira MUN 2026 and be part of an exceptional diplomatic experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricing.map((price, index) => {
            const Icon = price.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 hover:border-[#FFD700]/30 transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-transparent" />
                
                <div className="relative p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-transparent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                      <Icon className="w-8 h-8 text-[#FFD700]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#FFD700] mb-2">{price.type}</h3>
                  <p className="text-sm text-gray-400 mb-6">{price.description}</p>

                  <div className="flex items-center justify-center gap-2 mb-4">
                    <IndianRupee className="w-6 h-6 text-[#FFD700]" />
                    <span className="text-4xl font-bold text-gradient">{price.price}</span>
                  </div>

                  <p className="text-xs text-gray-500">Per delegate</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-[#FFD700] mb-12">Registration Process</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-[#FFD700]/30 transition-all duration-500 h-full">
                    <div className="absolute inset-0 bg-transparent" />

                    <div className="relative p-6">
                      <div className="mb-4">
                        <div className="w-12 h-12 bg-transparent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                          <Icon className="w-6 h-6 text-[#FFD700]" />
                        </div>
                      </div>

                      <div className="mb-2 flex items-center gap-2">
                        <span className="text-2xl font-bold text-gradient">{index + 1}</span>
                        <h4 className="text-lg font-bold text-[#FFD700]">{step.title}</h4>
                      </div>

                      <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <div className="w-6 h-0.5 bg-gradient-to-r from-white/10 to-transparent" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-transparent rounded-3xl p-8 border border-white/10 mb-12">
          <h4 className="text-2xl font-bold text-[#FFD700] mb-4 text-center">Important Information</h4>
          <div className="space-y-3 text-gray-300">
            <p className="flex items-start gap-2">
              <span className="text-[#FFD700] mt-1">•</span>
              <span>Payments must be made as per the instructions given in the brochure</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-[#FFD700] mt-1">•</span>
              <span>Please note that payments once made are non-refundable</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-[#FFD700] mt-1">•</span>
              <span>Remember to take a screenshot once the payment is done and attach it in the form</span>
            </p>
          </div>
        </div>

        <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center gap-3 px-12 py-6 bg-transparent text-[#FFD700] text-2xl font-bold rounded-xl hover:scale-105 transition-all duration-300 group border border-white/30 hover:border-[#FFD700]/60"
            >
            <span className="tracking-wide">REGISTER NOW!</span>
            <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Registration;
