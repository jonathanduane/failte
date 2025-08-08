import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <nav className="bg-teal-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:justify-between">
          {/* Mobile: Empty space for centering */}
          <div className="md:hidden w-10"></div>
          
          {/* Desktop: Logo on left */}
          <div className="hidden md:flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="https://failtedab.ie/wp-content/uploads/2024/11/White-logo-no-background-1-1024x230.png"
                alt="FáilteDAB Logo" 
                className="h-16 w-auto"
              />
            </Link>
          </div>
          
          {/* Mobile: Centered logo */}
          <div className="md:hidden flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="https://failtedab.ie/wp-content/uploads/2024/11/White-logo-no-background-1-1024x230.png"
                alt="FáilteDAB Logo" 
                className="h-14 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              <div className="relative group">
                <Link 
                  href="/"
                  className={`px-3 py-3 rounded-md text-lg font-semibold transition-colors ${
                    isActive('/') || isActive('/home1') ? 'text-white font-bold' : 'text-white hover:text-gray-200'
                  }`}
                >
                  Home
                </Link>
                <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[140px]">
                  <Link 
                    href="/home1" 
                    className={`block px-4 py-2 text-sm font-medium transition-colors ${
                      isActive('/home1') ? 'text-primary bg-teal-50' : 'text-neutral-800 hover:bg-teal-50 hover:text-primary'
                    }`}
                  >
                    Home1
                  </Link>
                  <Link 
                    href="/home2" 
                    className={`block px-4 py-2 text-sm font-medium transition-colors ${
                      isActive('/home2') ? 'text-primary bg-teal-50' : 'text-neutral-800 hover:bg-teal-50 hover:text-primary'
                    }`}
                  >
                    Home2
                  </Link>
                  <Link 
                    href="/home" 
                    className={`block px-4 py-2 text-sm font-medium transition-colors ${
                      isActive('/home') ? 'text-primary bg-teal-50' : 'text-neutral-800 hover:bg-teal-50 hover:text-primary'
                    }`}
                  >
                    Original
                  </Link>
                </div>
              </div>
              <Link 
                href="/dab-plus"
                className={`px-3 py-3 rounded-md text-lg font-semibold transition-colors ${
                  isActive('/dab-plus') ? 'text-white font-bold' : 'text-white hover:text-gray-200'
                }`}
              >
                DAB+
              </Link>
              <Link 
                href="/dab-stations"
                className={`px-3 py-3 rounded-md text-lg font-semibold transition-colors ${
                  isActive('/dab-stations') ? 'text-white font-bold' : 'text-white hover:text-gray-200'
                }`}
              >
                Stations
              </Link>
              <Link 
                href="/coverage"
                className={`px-3 py-3 rounded-md text-lg font-semibold transition-colors ${
                  isActive('/coverage') ? 'text-white font-bold' : 'text-white hover:text-gray-200'
                }`}
              >
                Coverage
              </Link>
              <Link 
                href="/news"
                className={`px-3 py-3 rounded-md text-lg font-semibold transition-colors ${
                  isActive('/news') ? 'text-white font-bold' : 'text-white hover:text-gray-200'
                }`}
              >
                News
              </Link>
              <Link 
                href="/broadcasters"
                className={`px-3 py-3 rounded-md text-lg font-semibold transition-colors ${
                  isActive('/broadcasters') ? 'text-white font-bold' : 'text-white hover:text-gray-200'
                }`}
              >
                Broadcasters
              </Link>
              <Link 
                href="/feedback"
                className={`px-3 py-3 rounded-md text-lg font-semibold transition-colors ${
                  isActive('/feedback') ? 'text-white font-bold' : 'text-white hover:text-gray-200'
                }`}
              >
                Feedback
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-muted">
            <Link 
              href="/"
              className={`block px-3 py-2 text-base font-medium ${
                isActive('/') ? 'text-primary font-semibold' : 'text-neutral-800 hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/home1"
              className={`block px-3 py-2 pl-6 text-base font-medium ${
                isActive('/home1') ? 'text-primary font-semibold' : 'text-neutral-800 hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home1
            </Link>
            <Link 
              href="/home2"
              className={`block px-3 py-2 pl-6 text-base font-medium ${
                isActive('/home2') ? 'text-primary font-semibold' : 'text-neutral-800 hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home2
            </Link>
            <Link 
              href="/home"
              className={`block px-3 py-2 pl-6 text-base font-medium ${
                isActive('/home') ? 'text-primary font-semibold' : 'text-neutral-800 hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Original
            </Link>
            <Link 
              href="/dab-plus"
              className={`block px-3 py-2 text-base font-medium ${
                isActive('/dab-plus') ? 'text-primary font-semibold' : 'text-neutral-800 hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              DAB+
            </Link>
            <Link 
              href="/dab-stations"
              className={`block px-3 py-2 text-base font-medium ${
                isActive('/dab-stations') ? 'text-primary font-semibold' : 'text-neutral-800 hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Stations
            </Link>
            <Link 
              href="/coverage"
              className={`block px-3 py-2 text-base font-medium ${
                isActive('/coverage') ? 'text-primary font-semibold' : 'text-neutral-800 hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Coverage
            </Link>
            <Link 
              href="/news"
              className={`block px-3 py-2 text-base font-medium ${
                isActive('/news') ? 'text-primary font-semibold' : 'text-neutral-800 hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              News
            </Link>
            <Link 
              href="/broadcasters"
              className={`block px-3 py-2 text-base font-medium ${
                isActive('/broadcasters') ? 'text-primary font-semibold' : 'text-neutral-800 hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Broadcasters
            </Link>
            <Link 
              href="/feedback"
              className={`block px-3 py-2 text-base font-medium ${
                isActive('/feedback') ? 'text-primary font-semibold' : 'text-neutral-800 hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Feedback
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
