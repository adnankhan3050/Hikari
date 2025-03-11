import Link from 'next/link';
import Image from 'next/image';
import { FacebookIcon, LinkedinIcon, XIcon } from '@/components/svg';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FFFFFF] py-16 px-8 md:px-24">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Logo */}
        <div className="flex-shrink-0 mr-48">
          {' '}
          {/* Increased margin-right here */}
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Linkamber Logo"
              width={200}
              height={70}
              priority
            />
          </Link>
        </div>

        {/* Columns */}
        <div className="flex flex-col md:flex-row gap-20">
          {' '}
          {/* Keep gap between columns the same */}
          {/* Column 1 - Company Info */}
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Company</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Case Study
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 2 - Quick Links */}
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Quick Link</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3 - Contact Info */}
        <div className="flex-1 text-gray-700">
          <p className="leading-7">
            30 N Gould St Suite R<br />
            Sheridan, WY 82801
            <br />
            United States
          </p>
          <p className="mt-4 font-medium">Phone: (214) 487-2900</p>
          <p className="mt-2 font-medium">Email: info@linkamber.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t mt-16 pt-8 flex flex-col items-center">
        <span className="text-gray-600 text-sm">
          © 2024 Linkamber LLC. All rights reserved.
        </span>
        <div className="flex space-x-6 mt-6">
          <Link
            href="#"
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <XIcon className="w-6 h-6 text-gray-600" />
          </Link>
          <Link
            href="#"
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <FacebookIcon className="w-6 h-6 text-gray-600" />
          </Link>
          <Link
            href="#"
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <LinkedinIcon className="w-6 h-6 text-gray-600" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
