'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/approach/', label: 'Approach' },
    { href: '/agentic/', label: 'Intent/Agents Map' },
    { href: '/agents/', label: 'Agent Catalog' },
    { href: '/roadmap/', label: 'Roadmap' },
    { href: '/metrics/', label: 'Metrics' },
    { href: '/about/', label: 'About' },
    { href: '/contact/', label: 'Contact' },
  ];

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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-acc-gray-400 hover:text-white transition-colors ring-acc focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acc-purple rounded px-2 py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              className="btn-primary ring-acc focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acc-purple"
            >
              Request Assessment
            </Link>
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-base text-acc-gray-400 hover:text-white hover:bg-acc-gray-700 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              className="block btn-primary mt-2 text-center"
              onClick={() => setIsOpen(false)}
            >
              Request Assessment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}


