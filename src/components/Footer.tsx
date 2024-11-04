import React from 'react';
import { MessageSquare, Heart } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Logo />
            </div>
            <p className="text-sm">
              Experience the ultimate MTA:SA roleplay server in Sri Lanka
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-purple-500 transition-colors">About</a></li>
              <li><a href="#staff" className="hover:text-purple-500 transition-colors">Staff</a></li>
              <li><a href="#rules" className="hover:text-purple-500 transition-colors">Rules</a></li>
              <li><a href="#join" className="hover:text-purple-500 transition-colors">Join Now</a></li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-white font-bold mb-4">Connect With Us</h3>
            <a 
              href="https://discord.gg/MSacea6Zyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#5865F2] text-white px-6 py-2 rounded-full hover:bg-[#4752C4] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Join our Discord
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> by Mythatic Team
          </p>
          <p className="text-xs mt-2">
            © {new Date().getFullYear()} Mythatic Roleplay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}