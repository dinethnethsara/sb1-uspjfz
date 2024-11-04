import React from 'react';
import StaffCard from './StaffCard';

const staffMembers = [
  {
    name: "CHENUTH DEVTHISA",
    role: "Founder and Owner",
    image: "https://i.ibb.co/J5Dxn9J/6107b3-e88ece34f27c4d91bd68bd0ff348e91d-mv2.webp",
    isFounder: true
  },
  {
    name: "SITHIJAYA NIMSARA",
    role: "Founder and Owner",
    image: "https://i.ibb.co/RTbvYm8/6107b3-d88acc7ad3bb45d1a9c7083d60fb5667-mv2.webp",
    isFounder: true
  },
  {
    name: "DEVON 69",
    role: "Head Administrator",
    image: "https://i.ibb.co/NKTPBfR/6107b3-7bd49970850c43e5bdf43f7ae3b5b9b2-mv2.webp"
  },
  {
    name: "JONNY",
    role: "Administrator",
    image: "https://i.ibb.co/7zym3fQ/6107b3-15565066671f443c9fb0b3cb6980ec47-mv2.webp"
  }
];

export default function StaffSection() {
  return (
    <section className="py-20 bg-gray-800" id="staff">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Our <span className="text-purple-500">Staff Team</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {staffMembers.map((staff, index) => (
            <StaffCard key={index} {...staff} />
          ))}
        </div>
      </div>
    </section>
  );
}