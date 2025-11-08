'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

type NavLink = {
  href: string;
  label: string;
};

type NavGroup = {
  label: string;
  items: NavLink[];
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navStructure: (NavLink | NavGroup)[] = [
    { href: '/', label: 'Home' },
    {
      label: 'Overview',
      items: [
        { href: '/approach/', label: 'Approach' },
        { href: '/impact/', label: 'Business Impact' },
      ]
    },
    {
      label: 'Solution',
      items: [
        { href: '/architecture/', label: 'Architecture' },
        { href: '/intents/', label: 'Telecom Intents' },
        { href: '/agents/', label: 'Agent Catalog' },
        { href: '/agentic/', label: 'How it Will Work' },
      ]
    },
    {
      label: 'Implementation',
      items: [
        { href: '/roadmap/', label: 'Roadmap' },
        { href: '/pilot/', label: 'Pilot' },
      ]
    },
    { href: '/about/', label: 'About' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const isGroupActive = (items: NavLink[]) => {
    return items.some(item => isActive(item.href));
  };

  const isNavGroup = (item: NavLink | NavGroup): item is NavGroup => {
    return 'items' in item;
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
            {navStructure.map((item, idx) => {
              if (isNavGroup(item)) {
                const groupActive = isGroupActive(item.items);
                return (
                  <div
                    key={idx}
                    className="relative group"
                  >
                    <button
                      className={`text-sm transition-colors ring-acc focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acc-purple rounded px-2 py-1 flex items-center gap-1 ${
                        groupActive
                          ? 'text-acc-purple font-semibold'
                          : 'text-acc-gray-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 mt-1 w-48 bg-acc-gray-900 border border-acc-gray-700 rounded-lg shadow-xl py-2 transition-all duration-200">
                      {item.items.map((subItem) => {
                        const active = isActive(subItem.href);
                        return (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              active
                                ? 'text-acc-purple font-semibold bg-acc-purple/10'
                                : 'text-acc-gray-400 hover:text-white hover:bg-acc-gray-800'
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              } else {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm transition-colors ring-acc focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acc-purple rounded px-2 py-1 ${
                      active
                        ? 'text-acc-purple font-semibold border-b-2 border-acc-purple'
                        : 'text-acc-gray-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }
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
            {navStructure.map((item, idx) => {
              if (isNavGroup(item)) {
                const groupActive = isGroupActive(item.items);
                const isExpanded = openDropdown === item.label;
                return (
                  <div key={idx}>
                    <button
                      onClick={() => setOpenDropdown(isExpanded ? null : item.label)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-base rounded-md transition-colors ${
                        groupActive
                          ? 'text-acc-purple font-semibold bg-acc-purple/10'
                          : 'text-acc-gray-400 hover:text-white hover:bg-acc-gray-700'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={20} className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    {isExpanded && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.items.map((subItem) => {
                          const active = isActive(subItem.href);
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                                active
                                  ? 'text-acc-purple font-semibold bg-acc-purple/10 border-l-4 border-acc-purple'
                                  : 'text-acc-gray-400 hover:text-white hover:bg-acc-gray-700'
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              } else {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 text-base rounded-md transition-colors ${
                      active
                        ? 'text-acc-purple font-semibold bg-acc-purple/10 border-l-4 border-acc-purple'
                        : 'text-acc-gray-400 hover:text-white hover:bg-acc-gray-700'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              }
            })}
          </div>
        </div>
      )}
    </nav>
  );
}


