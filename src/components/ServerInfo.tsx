import React from 'react';
import { Server, Lock } from 'lucide-react';

export default function ServerInfo() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white">Server Information</h3>
        <Server className="text-purple-500 w-6 h-6" />
      </div>
      <div className="space-y-4">
        <div className="bg-gray-900 p-4 rounded-lg">
          <p className="text-gray-400 text-sm mb-2">Direct Connect:</p>
          <code className="text-purple-400 block">mtasa://46.250.224.244:6104</code>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Lock className="w-4 h-4 text-purple-500" />
            <p className="text-gray-400 text-sm">Server Password:</p>
          </div>
          <code className="text-purple-400 block">httpballa</code>
        </div>
        <a 
          href="mtasa://46.250.224.244:6104" 
          className="block w-full bg-purple-500 text-white text-center py-3 rounded-lg hover:bg-purple-600 transition-colors"
        >
          Connect to Server
        </a>
      </div>
    </div>
  );
}