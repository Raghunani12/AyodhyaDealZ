import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'Youtube' },
  ];

  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Ayodhya Deals
              </h2>
              <p className="mt-2 text-gray-400">Your one-stop destination for amazing deals</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <p className="text-gray-300">123 Ayodhya Complex</p>
                  <p className="text-gray-300">Madhapur, Hyderabad</p>
                  <p className="text-gray-300">Telangana, 500081</p>
                </div>
              </div>

              <a 
                href="mailto:contact@ayodhyadeals.com"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <Mail className="w-5 h-5 text-blue-500 group-hover:text-blue-400" />
                contact@ayodhyadeals.com
              </a>

              <a 
                href="tel:+919014769239"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <Phone className="w-5 h-5 text-blue-500 group-hover:text-blue-400" />
                +91 90147 69239
              </a>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="aspect-video w-full rounded-lg overflow-hidden border border-gray-800 bg-gray-800">
              <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.25176871577!2d78.40804554999998!3d17.412348700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1736371468278!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ayodhya Deals Location"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
            <a
              href="https://goo.gl/maps/QZnxGxKQgJ9MLJW96"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 p-2 bg-gray-900/80 backdrop-blur-sm rounded-lg text-gray-300 hover:text-white transition-colors group"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Ayodhya Deals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;