'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com',
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Tentang', href: '#about' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-t from-black via-black/95 to-black border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Branding Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg">Anwar Faiz</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer & Creative Problem Solver. Passionate about building amazing digital experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold">Menu</h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold">Kontak</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                <FaEnvelope size={16} />
                <a href="mailto:anwarfaizfauzi@gmail.com" className="text-sm">
                  anwarfaizfauzi@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaPhone size={16} />
                <span className="text-sm">+62 856 9576 2859</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Anwar Faiz. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
