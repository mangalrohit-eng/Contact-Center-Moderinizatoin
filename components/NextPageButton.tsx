import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface NextPageButtonProps {
  href: string;
  label: string;
}

export default function NextPageButton({ href, label }: NextPageButtonProps) {
  return (
    <div className="mt-16 mb-8 flex justify-center">
      <Link
        href={href}
        className="group inline-flex items-center gap-3 bg-acc-purple hover:bg-acc-purple/90 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-acc-purple/50 transform hover:scale-105 whitespace-nowrap"
      >
        <span className="text-lg">Next: {label}</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}

