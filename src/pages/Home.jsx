import React from 'react'
import { Menu, ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "../components/ui/button"

export default function Home() {
  return (
    <main className="bg-[#000000] text-white min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-6 max-w-[1400px] mx-auto">
        <div className="flex items-center">
          <img 
            src="/Videora.png" 
            alt="Videora Logo" 
            className="h-8"
          />
        </div>
        <Button variant="ghost" className="bg-[#1c1c1c] text-white px-5 py-2 rounded-full flex items-center gap-2">
          <Menu className="h-5 w-5" />
          <span className="text-sm">Menu</span>
        </Button>
      </header>

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0 py-16 md:py-28 border-b border-neutral-900 relative max-w-[1400px] mx-auto">
        <div className="flex flex-col justify-center px-6 md:px-12">
          <h1 className="text-8xl font-bold hero-title">Videora</h1>
          <p className="hero-subtitle text-xl">Where AI Meets Creativity</p>
          
          <p className="hero-description">
            Our AI-driven video creation and personalization engine will revolutionize content consumption
          </p>
        </div>

        <div className="relative px-6 md:px-12 flex items-center justify-center">
          <div className="relative w-full max-w-[340px]">
            <div className="bg-zinc-800 rounded-lg overflow-hidden">
              <img
                src="/hero-image.png"
                alt="Making the story truly yours - Anime character collage"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="text-xs mt-1 text-[#878787]">Goku - The Dragon-ball</div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="flex flex-col items-center text-[#878787] text-sm">
            <span>Scroll Down</span>
            <ChevronDown className="h-4 w-4 mt-1 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-black overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="relative">
            <h2 className="text-8xl font-bold mb-32">
              what we <br />
              have for you
            </h2>
            
            {/* Phone Mockup - Positioned to allow arrows to show */}
            <div className="phone-container">
              <img
                src="/phone_14_01 1.png"
                alt="Videora App Mockup"
                className="phone-mockup"
              />
            </div>

            <div className="features-container">
              <div className="features-list w-full">
                {/* Feature 1 */}
                <div className="relative border-b border-[#343434] py-12 group hover:border-white transition-colors">
                  <div className="flex items-center gap-12">
                    <span className="text-lg font-mono group-hover:text-white transition-colors text-[#878787]">[01]</span>
                    <h3 className="text-5xl font-normal text-white">Video Creation Playground</h3>
                  </div>
                  <div className="absolute border-b border-[#343434] group-hover:border-white w-[200vw] left-0 h-0 bottom-0 -z-10 transition-colors"></div>
                  <div className="absolute right-[-340px] top-1/2 -translate-y-1/2 z-30">
                    <ArrowRight className="h-12 w-12 transform rotate-45 text-white" />
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="relative border-b border-[#343434] py-12 group hover:border-[#fe3d00] transition-colors">
                  <div className="flex items-center gap-12">
                    <span className="text-lg font-mono text-[#fe3d00]">[02]</span>
                    <h3 className="text-5xl font-normal text-[#fe3d00]">AI Character Studio</h3>
                  </div>
                  <div className="absolute border-b border-[#343434] group-hover:border-[#fe3d00] w-[200vw] left-0 h-0 bottom-0 -z-10 transition-colors"></div>
                  <div className="absolute right-[-340px] top-1/2 -translate-y-1/2 z-30">
                    <ArrowRight className="h-12 w-12 text-[#fe3d00] transform rotate-45" />
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="relative border-b border-[#343434] py-12 group hover:border-white transition-colors">
                  <div className="flex items-center gap-12">
                    <span className="text-lg font-mono group-hover:text-white transition-colors text-[#878787]">[03]</span>
                    <h3 className="text-5xl font-normal text-white">Community for Sharing</h3>
                  </div>
                  <div className="absolute border-b border-[#343434] group-hover:border-white w-[200vw] left-0 h-0 bottom-0 -z-10 transition-colors"></div>
                  <div className="absolute right-[-340px] top-1/2 -translate-y-1/2 z-30">
                    <ArrowRight className="h-12 w-12 transform rotate-45 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Character Section */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center bg-[#141415] px-3 py-1 rounded-full mb-8">
                <div className="w-4 h-4 bg-[#fe3d00] rounded-sm mr-2"></div>
                <span className="text-sm">AI Avatar</span>
              </div>

              <h2 className="text-7xl font-bold mb-8">
                Easy way to use AI
                <br />
                for creating your
                <br />
                own character
              </h2>

              <p className="text-[#878787] mb-12">Easy way to use AI for creating your own character</p>

              <Button className="bg-[#fe3d00] hover:bg-[#fe3d00]/90 text-white rounded-none px-6 py-3 text-sm uppercase font-medium">
                Explore Character Studio
              </Button>
            </div>

            <div className="flex items-center justify-center">
              <div className="character-images-container">
                <div className="character-image-large">
                  <img
                    src="/image 7.png"
                    alt="AI generated character portrait - large"
                    className="portrait-image"
                  />
                </div>
                
                <div className="character-image-small">
                  <img
                    src="/Group 188.png"
                    alt="AI generated character portrait - small"
                    className="portrait-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 