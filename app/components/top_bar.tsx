import React from 'react';
import { Mail, Phone, Facebook, Youtube, Linkedin, ArrowRight } from 'lucide-react';

interface SocialLink {
  icon: React.ElementType;
  href: string;
}

const SocialLinks: SocialLink[] = [
  { icon: Facebook, href: 'https://facebook.com' },
  { icon: Linkedin, href: 'https://linkedin.com' },
  { icon: Youtube, href: 'https://youtube.com' },
];

const TopBar: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-100 w-full py-2 fixed top-0 left-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Flex Container */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 md:gap-0">

          {/* Left: Contact Info */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-700">

            <a 
              href="tel:+923321234344" 
              className="flex items-center space-x-1 hover:text-green-600 transition"
            >
              <Phone size={16} className="text-green-600" />
              <span>+92 (332) 1234344</span>
            </a>

            <a 
              href="mailto:info@MiracalTrader.com.pk"
              className="flex items-center space-x-1 hover:text-green-600 transition"
            >
              <Mail size={16} className="text-green-600" />
              <span>info@MiracalTrader.com.pk</span>
            </a>

            <a 
              href="tel:+923203434343" 
              className="flex items-center space-x-1 hover:text-green-600 transition"
            >
              <Phone size={16} className="text-green-600" />
              <span>+92 (320) 3434343</span>
            </a>
          </div>

          {/* Right: Social Icons + Button */}
          <div className="flex items-center justify-center md:justify-end gap-0">

            {/* Social Icons */}
            <div className="flex space-x-4 pr-6 border-r border-gray-200">
              {SocialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a 
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-800 transition"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <a 
              href="/contact"
              className="group flex items-center justify-center h-12 bg-gray-800 text-white font-medium pl-6 pr-4 transition-all duration-300 relative overflow-hidden"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 12% 50%)' }}
            >
              <span className="mr-2">Get In Touch</span>
              <ArrowRight 
                size={18} 
                className="transition-transform duration-300 group-hover:translate-x-1" 
              />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
