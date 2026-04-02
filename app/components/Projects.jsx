'use client';

import { useState, useRef } from 'react';
import CardSwap, { Card } from './CardSwap';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const cardSwapRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce modern dengan fitur katalog produk, keranjang belanja, dan sistem pembayaran.',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4b655bda1?w=500&h=300&fit=crop',
      mockupImage: 'https://images.unsplash.com/photo-1460925895917-adf4b655bda1?w=800&h=600&fit=crop',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      fullDescription: 'Platform e-commerce lengkap dengan sistem katalog produk yang dinamis, keranjang belanja interaktif, dan integrasi sistem pembayaran. Dirancang dengan performa tinggi dan user experience yang optimal.',
      link: '#'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Dashboard interaktif untuk monitoring data real-time dengan visualisasi grafik yang menarik.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      mockupImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      technologies: ['React', 'JavaScript', 'Tailwind CSS'],
      fullDescription: 'Dashboard analytics yang canggih untuk visualisasi data real-time dengan berbagai jenis grafik. Fitur filtering dan export data untuk analisis mendalam.',
      link: '#'
    },
    {
      id: 3,
      title: 'Social Media App',
      description: 'Aplikasi media sosial dengan fitur posting, komentar, dan sistem notifikasi real-time.',
      image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=300&fit=crop',
      mockupImage: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop',
      technologies: ['Next.js', 'Laravel', 'JavaScript'],
      fullDescription: 'Aplikasi media sosial dengan fitur lengkap termasuk posting, komentar, like, dan sistem notifikasi real-time. Dilengkapi dengan messaging dan user profile.',
      link: '#'
    },
  ];

  return (
    <div className="w-full bg-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Projects Section with Text and CardSwap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16 mb-8">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ini Adalah Project Saya
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Saya telah mengembangkan berbagai proyek menarik yang menunjukkan keahlian saya dalam web development, UI/UX design, dan problem solving. Setiap proyek dirancang dengan perhatian terhadap detail dan best practices modern.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400 font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">E-Commerce Platform</h4>
                  <p className="text-gray-400 text-sm">Platform e-commerce modern dengan fitur lengkap untuk bisnis online</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400 font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Dashboard Analytics</h4>
                  <p className="text-gray-400 text-sm">Dashboard interaktif untuk monitoring data real-time dengan visualisasi grafik</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400 font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Social Media App</h4>
                  <p className="text-gray-400 text-sm">Aplikasi media sosial dengan fitur posting, komentar, dan notifikasi real-time</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button 
                onClick={() => cardSwapRef.current?.swap()}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
              >
                <span>Swap Kartu</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - CardSwap */}
          <div className="flex flex-col items-center gap-8">
            <div className="relative h-[600px] w-full max-w-[500px]">
              <CardSwap
              ref={cardSwapRef}
              width={500}
              height={500}
              cardDistance={80}
              verticalDistance={100}
              delay={100000}
              pauseOnHover={true}
              skewAmount={4}
              easing="elastic"
            >
              {projects.map((project) => (
                <Card
                  key={project.id}
                  customClass="w-[500px] h-[500px] p-6 bg-gradient-to-br from-gray-900 to-black cursor-pointer overflow-hidden"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  </div>

                  {/* Project Info */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-purple-500/30 text-purple-300 rounded border border-purple-500/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors text-sm"
                    >
                      Lihat Detail →
                    </button>
                  </div>
                </Card>
              ))}
            </CardSwap>
            </div>
          </div>
        </div>

        {/* Modal Backdrop */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/70 z-40 transition-opacity duration-300"
            onClick={() => setSelectedProject(null)}
          />
        )}

        {/* Modal Panel - 1/2 Layar */}
        <div
          className={`fixed right-0 top-0 h-full w-full md:w-1/2 bg-gradient-to-b from-neutral-900 to-black border-l border-gray-700 z-50 overflow-y-auto transition-transform duration-300 ${
            selectedProject ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {selectedProject && (
            <div className="p-8 md:p-12">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Mockup Image */}
              <div className="mb-8 rounded-lg overflow-hidden border border-gray-700">
                <img
                  src={selectedProject.mockupImage}
                  alt={selectedProject.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Project Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {selectedProject.title}
              </h2>

              {/* Full Description */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {selectedProject.fullDescription}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Teknologi</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-purple-500/30 text-purple-300 rounded-full border border-purple-500/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6">
                <button className="flex-1 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                  Lihat Live Demo
                </button>
                <button className="flex-1 px-6 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500/10 font-semibold rounded-lg transition-colors">
                  GitHub Repository
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
