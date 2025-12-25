import type React from "react"
import { Facebook, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

interface LinkSection {
  title: string
  links: { name: string; href: string }[]
}

const usefulLinks: LinkSection = {
  title: "Useful Links",
  links: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "From Farm to Plate", href: "/farm-to-plate" },
    { name: "Quality", href: "/quality" },
    { name: "Contact", href: "/contact" },
    { name: "News/Events", href: "/news-events" },
  ],
}

const groups: LinkSection = {
  title: "Groups",
  links: [
    { name: "Naubahar", href: "/groups/naubahar" },
    { name: "Tabaar", href: "/groups/tabaar" },
    { name: "Meskay & Femtee Gums", href: "/groups/gums" },
    { name: "Meskay & Femtee Agro Technologies", href: "/groups/agro-tech" },
    { name: "Mechanized Agricultural Operations (MAO)", href: "/groups/mao" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com", color: "hover:bg-blue-600" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", color: "hover:bg-blue-700" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com", color: "hover:bg-red-600" },
]

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info Section */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center rounded-xl shadow-lg shadow-green-700/30">
                  <span className="text-2xl font-bold">M</span>
                </div>
                <div>
                  <p className="text-xl font-bold tracking-wide text-white">Miracle Traders</p>
                  <p className="text-xs text-gray-400">Trading Company (Pvt) Ltd.</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Premium quality food products for global markets. Your trusted partner in export excellence.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm text-gray-300">
                <MapPin size={18} className="text-green-600 mt-0.5 shrink-0" />
                <p>Malir, Karachi, Pakistan</p>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone size={18} className="text-green-600 shrink-0" />
                <p>+92 XXX XXXXXXX</p>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail size={18} className="text-green-600 shrink-0" />
                <p>info@miracletraders.com</p>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg shadow-green-700/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-700/40"
            >
              Get In Touch
            </Link>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white border-b-2 border-green-700 inline-block pb-2">
              {usefulLinks.title}
            </h4>
            <div className="flex flex-col space-y-2.5">
              {usefulLinks.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-green-500 hover:translate-x-1 transition-all duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Groups */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white border-b-2 border-green-700 inline-block pb-2">
              {groups.title}
            </h4>
            <div className="flex flex-col space-y-2.5">
              {groups.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-green-500 hover:translate-x-1 transition-all duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white border-b-2 border-green-700 inline-block pb-2">
                Connect With Us
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-11 h-11 bg-gray-700/50 ${link.color} rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      aria-label={link.name}
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h5 className="text-sm font-semibold text-white">Subscribe to Newsletter</h5>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2.5 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-200 text-sm"
                />
                <button className="bg-green-700 hover:bg-green-600 text-white font-medium px-4 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Quality Assured</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">50+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Countries Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">15+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">24/7</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Customer Support</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2025 Miracle Traders (Pvt) Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-green-500 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-green-500 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-green-500 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
