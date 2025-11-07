import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import PasswordProtection from '@/components/PasswordProtection';

export const metadata: Metadata = {
  title: 'Accenture CES Next Modernization',
  description: 'Reimagining Telecom CX with Google CES Next and Agentic AI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <PasswordProtection>
          <NavBar />
          {/* Global Disclaimer */}
          <div className="bg-yellow-900/20 border-b border-yellow-600/50 py-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-xs md:text-sm text-yellow-200 text-center">
                <strong>Disclaimer:</strong> All content presented is indicative and subject to revision upon further discovery and detailed design phases.
              </p>
            </div>
          </div>
          <main className="flex-1">{children}</main>
          <Footer />
        </PasswordProtection>
      </body>
    </html>
  );
}


