import React from 'react';
import { Car, Users, Shield, Gamepad2, ArrowRight, Download, MessageSquare } from 'lucide-react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import StaffSection from './components/StaffSection';
import ServerInfo from './components/ServerInfo';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Loader />
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-[url('https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-no-repeat">
        <div className="min-h-screen bg-black/70 flex items-center justify-center">
          <div className="text-center px-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-glow">
              MYTHATIC <span className="text-purple-500">ROLEPLAY</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Sri Lanka's Premier MTA:SA Roleplay Experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#join" className="bg-purple-500 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-600 transition-colors flex items-center justify-center gap-2 animate-float">
                Join Now <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="https://discord.gg/MSacea6Zyz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#5865F2] text-white px-8 py-3 rounded-full font-medium hover:bg-[#4752C4] transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> Join Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900" id="about">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12 animate-glow">
            Why Choose <span className="text-purple-500">Mythatic RP</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Gamepad2 className="w-8 h-8" />,
                title: "Immersive Gameplay",
                description: "Custom scripts, unique features, and engaging storylines"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Active Staff Team",
                description: "24/7 support and moderation for the best experience"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Friendly Community",
                description: "Join our growing family of passionate roleplayers"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-500 rounded-full flex items-center justify-center text-white animate-float">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StaffSection />

      {/* Join Section */}
      <section className="py-20 bg-gray-900" id="join">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-8 animate-glow">
              Ready to <span className="text-purple-500">Join?</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Follow these simple steps to start your journey in Mythatic Roleplay
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="bg-gray-800 p-6 rounded-lg animate-fade-in">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-white font-bold mb-2">Download MTA:SA</h3>
                  <p className="text-gray-400 text-sm">Install Multi Theft Auto: San Andreas</p>
                  <a 
                    href="https://multitheftauto.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-purple-400 mt-4 hover:text-purple-300"
                  >
                    <Download className="w-4 h-4 mr-2" /> Download Now
                  </a>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-white font-bold mb-2">Join Discord</h3>
                  <p className="text-gray-400 text-sm">Connect with our community</p>
                  <a 
                    href="https://discord.gg/MSacea6Zyz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 mt-4 hover:text-purple-300"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" /> Join Server
                  </a>
                </div>
              </div>
              <ServerInfo />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;