"use client";

import { Home, Box, Headset, FileText } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";

export function NavWrapper() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'Products', url: '#products', icon: Box },
    { name: 'Support', url: '#support', icon: Headset },
    { name: 'Documentation', url: '#docs', icon: FileText }
  ];

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8">
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
        SmartTrace™
      </span>
      <NavBar items={navItems} />
    </div>
  );
} 