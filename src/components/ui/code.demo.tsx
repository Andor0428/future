"use client";

import React from "react";
import { Vortex } from "@/components/ui/vortex";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";

function Section() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          The hell is this?
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
          burned and you&apos;ll have a scar.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Order now
          </button>
          <button className="px-4 py-2  text-white ">Watch trailer</button>
        </div>
      </Vortex>
    </div>
  );
}

function FullPage() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          The hell is this?
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
          burned and you&apos;ll have a scar.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Order now
          </button>
          <button className="px-4 py-2  text-white ">Watch trailer</button>
        </div>
      </Vortex>
    </div>
  );
}

function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full relative flex flex-col items-center justify-center antialiased">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300">
          Join the Future
        </h1>
        <p className="text-purple-200/70 max-w-lg mx-auto my-4 text-center text-lg">
          Be among the first to experience our revolutionary smart infrastructure technology. Sign up for exclusive early access and updates.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-grow bg-black/50 border-purple-500/20 text-purple-100 placeholder:text-purple-200/50 focus-visible:ring-purple-500/50 focus-visible:border-purple-500/50"
          />
          <button className="px-8 py-2 rounded-md bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white font-semibold hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg shadow-purple-500/25">
            Join Waitlist
          </button>
        </div>
        <p className="text-purple-200/50 text-sm text-center mt-4">
          Join 2,000+ forward-thinking construction professionals
        </p>
      </div>
      <BackgroundBeams className="opacity-50" />
    </div>
  );
}

export { Section, FullPage, BackgroundBeamsDemo }; 