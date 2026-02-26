
import Image from 'next/image';
import Banner from './Banner';

const SalesforceIntegration = () => {
  const integrations = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
        </svg>
      ),
      title: "Whatsapp",
      description: "Integrate WhatsApp to enable real-time communication and enhance customer engagement.",
      bgColor: 'bg-white', // White background
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path d="M4 6h16M4 10h16M4 14h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
        </svg>
      ),
      title: "Data Cloud Benefits",
      description: "Leverage Data Cloud for secure, scalable, and efficient data storage and analytics.",
      bgColor: 'bg-gray-100', // Gray background
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
        </svg>
      ),
      title: "Zapier",
      description: "Automate workflows by connecting apps through Zapier for improved productivity.",
      bgColor: 'bg-white', // White background
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
        </svg>
      ),
      title: "Social Channel",
      description: "Integrate social channels to boost your online presence and streamline social media management.",
      bgColor: 'bg-gray-100', // Gray background
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
        </svg>
      ),
      title: "Marketing Cloud Benefits",
      description: "Utilize Marketing Cloud for personalized campaigns and data-driven marketing strategies.",
      bgColor: 'bg-white', // White background
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Companies Section with Diamond */}
      <div className="relative w-full py-20 mt-20 bg-white">
        {/* Diamond Image - Top Right */}
        <div className="absolute top-0 right-0 w-32 h-32">
          <Image
            src="/Assets/diamond.png"
            alt="Diamond"
            width={128}
            height={128}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Dotted Pattern - Bottom Right */}
        <div className="absolute bottom-0 right-0">
          <div className="grid grid-cols-10 gap-2 opacity-20">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-purple-400 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-sm md:text-sm font-bold text-gray-800">
            World-class 30,000+ companies are already working with us.
          </h2>
        </div>
      </div>

      {/* Integration Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 bg-[#F5F5F7]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block bg-[#1A7DB4] text-white px-4 py-1 rounded-full text-sm font-medium">
                INTEGRATION
              </span>
              <h2 className="text-2xl font-bold mt-4 mb-2">
                Pentacloud: Seamlessly Connecting Your Business With Salesforce Integration
              </h2>
              <p className="text-gray-600 text-xs">
                Pentacloud offers seamless Salesforce integration solutions that enhance your business processes and drive growth
              </p>
            </div>

            <div className="space-y-4">
              {integrations.map((item, index) => (
                <div key={index} className={`rounded-lg p-4 shadow-sm border border-gray-100 ${item.bgColor}`}>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1A7DB4] p-2 rounded-lg text-white">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative">
            <Image
              src="/Assets/Four.png"
              alt="Salesforce Consulting"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default SalesforceIntegration;
