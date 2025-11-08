'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/approach/', label: 'Approach' },
    { href: '/impact/', label: 'Business Impact' },
    { href: '/architecture/', label: 'Architecture' },
    { href: '/agents/', label: 'Agent Catalog' },
    { href: '/agentic/', label: 'How it Will Work' },
    { href: '/roadmap/', label: 'Roadmap' },
    { href: '/about/', label: 'About' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-acc-gray-800/95 backdrop-blur-sm border-b border-acc-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/brand/accenture-logo.svg"
                alt="Accenture"
                width={120}
                height={24}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ring-acc focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acc-purple rounded px-2 py-1 ${
                    active
                      ? 'text-acc-purple font-semibold border-b-2 border-acc-purple'
                      : 'text-acc-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-acc-gray-400 hover:text-white ring-acc focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acc-purple p-2 rounded"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-acc-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 text-base rounded-md transition-colors ${
                    active
                      ? 'text-acc-purple font-semibold bg-acc-purple/10 border-l-4 border-acc-purple'
                      : 'text-acc-gray-400 hover:text-white hover:bg-acc-gray-700'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}


