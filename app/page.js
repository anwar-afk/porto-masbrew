'use client';

import ProfileCard from "./components/ProfileCard";
import TextType from "./components/TextType";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Particles from "./components/Particles";
import Footer from "./components/Footer";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="scroll-mt-24">
        <div className="relative min-h-screen flex items-center justify-center overflow-x-hidden px-4 md:px-8 pt-20">
        {/* Particles Background */}
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={["#17066a"]}
            particleCount={1000}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center pointer-events-none">
          {/* Kiri - Teks Perkenalan */}
          <div className="space-y-6 pointer-events-none">
            <div className="space-y-2">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  <TextType 
                    text={["Hallo! 👋", "Take a look at", "My portfolio"]}
                    typingSpeed={80}
                    pauseDuration={2300}
                    showCursor
                    cursorCharacter="_"
                    texts={["Welcome to React Bits! Good to see you!","Build some amazing experiences!"]}
                    deletingSpeed={50}
                    variableSpeedEnabled={false}
                    variableSpeedMin={60}
                    variableSpeedMax={120}
                    cursorBlinkDuration={1.1}
                  />
                </h1>
              </div>
            </div>
            
            <p className="text-lg text-white leading-relaxed">
              Portfolio saya berisi proyek-proyek yang telah saya kerjakan di pengembangan web dan aplikasi.
            </p>

            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 pointer-events-auto">
              Hubungi Saya
            </button>
          </div>

          {/* Kanan - Profile Card */}
          <div className="flex justify-center pointer-events-auto pointer-events-none">
            <ProfileCard
              name="Anwar Faiz"
              title="Student"
              handle="yourhandle"
              status="Online"
              avatarUrl="/assets/images/FotoFaiz.jpeg"
              contactText="Contact Me"
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </div>
        </div>
      </section>

      {/* Skills Component */}
      <section id="about" className="scroll-mt-24">
        <Skills />
      </section>

      {/* Projects Component */}
      <section id="portfolio" className="scroll-mt-24">
        <Projects />
      </section>

      {/* Footer Component */}
      <section id="contact" className="scroll-mt-24">
        <Footer />
      </section>
    </>
  );
}