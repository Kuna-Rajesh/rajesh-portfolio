import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rajesh Kuna — Java Backend & PL/SQL Developer | Spring Boot Architect',
  description:
    'Portfolio of Rajesh Kuna — Java Backend & PL/SQL Developer with 3+ years at TCS. Expert in Spring Boot microservices, Oracle PL/SQL, stored procedures, database performance tuning, Kafka, and GenAI. Open to senior backend and PL/SQL developer roles.',
  keywords: [
    'Rajesh Kuna',
    'Java Developer',
    'PL/SQL Developer',
    'Oracle PL/SQL',
    'Stored Procedures',
    'Database Developer',
    'Spring Boot',
    'Microservices',
    'Backend Engineer',
    'TCS',
    'Spring Security',
    'Kafka',
    'gRPC',
    'Portfolio',
  ],
  authors: [{ name: 'Rajesh Kuna', url: 'https://linkedin.com/in/kuna-rajesh' }],
  openGraph: {
    title: 'Rajesh Kuna — Java Backend & PL/SQL Developer',
    description: 'Scalable microservices, Spring Boot, Oracle PL/SQL development & AI integrations — explore my work.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased" suppressHydrationWarning>
        <Providers>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
