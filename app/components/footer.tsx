import React from 'react';
import { Facebook, Linkedin, Youtube, ArrowRight } from 'lucide-react';

// Interface for link sections
interface LinkSection {
  title: string;
  links: { name: string; href: string }[];
}

// Useful Links data
const usefulLinks: LinkSection = {
  title: 'Useful Links',
  links: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'From Farm to Plate', href: '/farm-to-plate' },
    { name: 'Quality', href: '/quality' },
    { name: 'Contact', href: '/contact' },
    { name: 'News/Events', href: '/news-events' },
  ],
};

// Groups data
const groups: LinkSection = {
  title: 'Groups',
  links: [
    { name: 'Naubahar', href: '/groups/naubahar' },
    { name: 'Tabaar', href: '/groups/tabaar' },
    { name: 'Meskay & Femtee Gums', href: '/groups/gums' },
    { name: 'Meskay & Femtee Agro Technologies', href: '/groups/agro-tech' },
    { name: 'Mechanized Agricultural Operations (MAO)', href: '/groups/mao' },
  ],
};

// Social Media links
const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">

          {/* 1. Company Info */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-green-600 flex items-center justify-center rounded-full" />
              <div>
                <p className="text-xl font-bold tracking-wide leading-none">Mirical Traders</p>
                <p className="text-xs leading-none">Trading Company (Pvt) Ltd.</p>
              </div>
            </div>

            {/* Address */}
            <address className="not-italic text-sm text-gray-300 space-y-1">
              <p>malir karachi</p>
            </address>

            {/* Get In Touch Button */}
            <a 
              href="/contact" 
              className="mt-6 inline-flex items-center justify-center h-10 bg-green-600 text-white font-medium pl-4 pr-3 transition-all duration-300 group hover:bg-green-700"
              style={{ clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)' }}
            >
              <span className="mr-2">Get In Touch</span>
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* 2. Useful Links */}
          <LinkColumn section={usefulLinks} />

          {/* 3. Groups */}
          <LinkColumn section={groups} />

          {/* 4. Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Social</h4>
            <div className="flex flex-col space-y-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition duration-150"
                  >
                    <Icon size={20} />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center pt-4 text-sm text-gray-400">
          <p>© 2025 Mirical Traders (Pvt) Ltd.</p>
        </div>

      </div>
    </footer>
  );
};

// Helper component to render link columns
const LinkColumn: React.FC<{ section: LinkSection }> = ({ section }) => (
  <div className="space-y-4">
    <h4 className="text-lg font-bold mb-4">{section.title}</h4>
    <div className="flex flex-col space-y-2 text-sm">
      {section.links.map((link) => (
        <a 
          key={link.name} 
          href={link.href} 
          className="text-gray-300 hover:text-white transition duration-150"
        >
          {link.name}
        </a>
      ))}
    </div>
  </div>
);

export default Footer;
