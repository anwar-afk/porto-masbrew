'use client';

import { useState, useRef } from 'react';
import Carousel from './Carousel';
import TextType from './TextType';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const carouselRef = useRef(null);
  const githubButtonClass =
    'px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors text-center border-0';

  const projects = [
    {
      id: 1,
      title: 'PERKASA',
      description: 'Ekosistem digital komprehensif untuk industri peternakan ikan dengan marketplace, panduan, chat real-time, dan komunitas.',
      image: '/assets/images/Perkasa.png',
      mockupImage: '/assets/images/Perkasa.png',
      technologies: ['Nuxt', 'Laravel', 'Tailwind CSS', 'Android Studio', 'Java'],
      fullDescription: 'PERKASA adalah platform digital yang mengintegrasikan seluruh ekosistem industri peternakan ikan modern. Menghubungkan peternak, pembeli, dan komunitas melalui marketplace yang aman, panduan lengkap untuk calon peternak, sistem chat real-time untuk konsultasi langsung, forum komunitas aktif untuk berbagi pengalaman, dan perpustakaan artikel edukatif berkualitas tinggi. Solusi komprehensif yang memberdayakan petani ikan Indonesia untuk berkembang lebih cepat dan berkelanjutan.',
      github: 'https://github.com/muzalri/perkasa-1',
      githubLaravel: 'https://github.com/muzalri/PERKASA_Laravel',
      githubMobile: 'https://github.com/muzalri/PERKASA_MOBILE',
      link: 'https://github.com/muzalri/perkasa-1'
    },
    {
      id: 2,
      title: 'GMERA',
      description: 'Company profile perusahaan distribusi peralatan kompor dengan fitur homepage dan katalog produk lengkap.',
      image: '/assets/images/gmeraflayer.png',
      mockupImage: '/assets/images/gmeraflayer.png',
      technologies: ['Laravel', 'Tailwind CSS', 'Figma'],
      fullDescription: 'GMERA adalah website company profile untuk perusahaan distribusi peralatan kompor terpercaya. Platform ini menampilkan informasi perusahaan lengkap, katalog produk berkualitas tinggi dengan kategori lengkap, dan memudahkan pelanggan untuk mengetahui lebih jauh tentang produk dan layanan distribusi kami. Dilengkapi dengan sistem navigasi yang intuitif dan desain responsif untuk pengalaman pengguna terbaik di semua perangkat.',
      link: 'https://github.com/anwar-afk/gmera-web'
    },
    {
      id: 3,
      title: 'Web Donasi Syakira Mutiara',
      description: 'Web yayasan Syakira Mutiara dengan fitur donasi yang sudah menggunakan payment gateway terintegrasi.',
      image: '/assets/images/FlayerSyakira.png',
      mockupImage: '/assets/images/FlayerSyakira.png',
      technologies: ['Express', 'React', 'Tailwind CSS', 'Figma'],
      fullDescription: 'Web Donasi Syakira Mutiara adalah platform untuk yayasan Syakira Mutiara yang memudahkan donatur untuk berkontribusi langsung melalui sistem donasi online yang aman. Platform ini dilengkapi dengan payment gateway terintegrasi untuk berbagai metode pembayaran, dashboard donasi real-time, dan fitur transparansi untuk menunjukkan perkembangan program sosial. Dirancang dengan antarmuka yang ramah pengguna dan responsif untuk mendukung maksimalisasi donasi demi kebaikan bersama.',
      link: 'https://github.com/anwar-afk/syakira-web'
    },
    {
      id: 4,
      title: 'Aqsal Electric Company Profile',
      description: 'Company profile toko elektrik dengan fitur admin untuk memantau performa toko dan sistem pemesanan online.',
      image: '/assets/images/FlayerAqsal.png',
      mockupImage: '/assets/images/FlayerAqsal.png',
      technologies: ['Laravel', 'JavaScript', 'Figma', 'CSS'],
      fullDescription: 'Aqsal Electric Company Profile adalah website company profile untuk toko elektrik dengan fitur admin dashboard yang komprehensif. Admin dapat memantau performa toko secara real-time, mengelola inventori produk, dan melacak pesanan pelanggan. Platform ini dilengkapi dengan sistem pemesanan online yang mudah digunakan, katalog produk lengkap dengan kategori terorganisir, dan sistem notifikasi untuk update pesanan. Dirancang untuk meningkatkan efisiensi operasional toko dan pengalaman berbelanja pelanggan.',
      github: 'https://github.com/azhura-bot/aqsal-electric',
      link: 'https://github.com/azhura-bot/aqsal-electric'
    },
    {
      id: 5,
      title: 'Website Hitung Cekih',
      description: 'Website untuk bermain cekih.',
      image: '/assets/images/FlayerAqsal.png',
      mockupImage: '/assets/images/FlayerAqsal.png',
      technologies: ['React', 'JavaScript', 'CSS'],
      fullDescription: 'Website Hitung Cekih adalah website interaktif untuk bermain cekih dengan antarmuka sederhana, responsif, dan mudah digunakan.',
      github: 'https://github.com/anwar-afk/hitung-cekih',
      link: 'https://hitung-cekih.vercel.app/'
    },
  ];

  const carouselItems = projects.map((project) => ({
    id: project.id,
    content: (
      <div
        className="w-[500px] h-[500px] p-6 rounded-xl border border-white bg-gradient-to-br from-gray-900 to-black cursor-pointer overflow-hidden"
        onClick={() => setSelectedProject(project)}
      >
        <div className="relative h-56 overflow-hidden rounded-lg mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>

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
      </div>
    )
  }));

  return (
    <div className="w-full bg-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Projects Section with Text and Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-16 mb-8">
          {/* Left Side - Text Content */}
          <div className="space-y-4">
            <div>
              <TextType
                key={`project-title-${currentProjectIndex}`}
                text={projects[currentProjectIndex].title}
                as="h3"
                typingSpeed={18}
                deletingSpeed={12}
                pauseDuration={200}
                initialDelay={0}
                loop={false}
                showCursor={true}
                cursorClassName="text-purple-400"
                className="text-2xl md:text-3xl font-bold text-white mb-3"
              />
              <TextType
                key={`project-description-${currentProjectIndex}`}
                text={projects[currentProjectIndex].fullDescription}
                as="p"
                typingSpeed={1}
                deletingSpeed={1}
                pauseDuration={200}
                initialDelay={20}
                loop={false}
                showCursor={false}
                className="text-gray-300 text-lg leading-relaxed mb-4"
              />
            </div>
          </div>

          {/* Right Side - Carousel */}
          <div className="flex flex-col items-center gap-8">
            <div className="relative h-[560px] w-full max-w-[540px]">
              <Carousel
                ref={carouselRef}
                items={carouselItems}
                baseWidth={540}
                loop={true}
                autoplay={false}
                pauseOnHover={true}
                onIndexChange={(index) => setCurrentProjectIndex(index)}
              />
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
              <div className="grid grid-cols-1 gap-3 pt-6">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={githubButtonClass}
                  >
                    GitHub Frontend (Nuxt)
                  </a>
                )}
                {selectedProject.githubLaravel && (
                  <a
                    href={selectedProject.githubLaravel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={githubButtonClass}
                  >
                    GitHub Backend (Laravel)
                  </a>
                )}
                {selectedProject.githubMobile && (
                  <a
                    href={selectedProject.githubMobile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={githubButtonClass}
                  >
                    GitHub Mobile
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
