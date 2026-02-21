import { SiFacebook, SiLinkedin, SiX } from 'react-icons/si';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img
                src="/assets/logo ne png.png"
                alt="Fons Vita Logo"
                className="h-16 w-auto mb-3"
              />
              <h3 className="text-2xl font-bold text-white">
                Fons Vita
              </h3>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Your trusted partner in B2B trading and international sourcing, 
              connecting businesses across Albania and the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-steel-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#business" className="hover:text-steel-400 transition-colors">
                  Business Areas
                </a>
              </li>
              <li>
                <a href="#values" className="hover:text-steel-400 transition-colors">
                  Our Values
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-steel-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
            <div className="space-y-3 mb-4">
              <p className="text-slate-400">
                <span className="font-medium text-white">Address:</span> Kavaja, Albania
              </p>
              <p className="text-slate-400">
                <span className="font-medium text-white">Email:</span>{' '}
                <a 
                  href="mailto:info@fonsvita.com"
                  className="hover:text-steel-400 transition-colors"
                >
                  info@fonsvita.com
                </a>
              </p>
              <p className="text-slate-400">
                <span className="font-medium text-white">Website:</span>{' '}
                <a 
                  href="https://www.fonsvita.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-steel-400 transition-colors"
                >
                  www.fonsvita.com
                </a>
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-steel-500 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-steel-500 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-steel-500 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="X (Twitter)"
              >
                <SiX className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400 flex items-center justify-center flex-wrap gap-1">
            © 2025. Built with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500 inline-block" />{' '}
            using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-steel-400 hover:text-steel-300 font-medium transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
