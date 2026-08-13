import { Link } from "react-router";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">
                  IB
                </span>
              </div>
              <div>
                <h3 className="text-white">IBISs</h3>
                <p className="text-sm text-gray-400">
                  Islamic Banking Integrity Solutions
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sharia-compliant consulting and training for human
              capital development in the Islamic banking sector.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Services
              </Link>
              <Link
                to="/values"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Values
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">
              Contact Information
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Based in USA</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>IBISintegrity@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} IBISs. All rights
            reserved. Sharia-compliant services.
          </p>
        </div>
      </div>
    </footer>
  );
}