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
          <main className="flex-1">{children}</main>
          <Footer />
        </PasswordProtection>
      </body>
    </html>
  );
}


