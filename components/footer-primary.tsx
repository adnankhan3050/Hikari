'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaFacebookF, FaTwitter } from 'react-icons/fa';

const AnimatedUnderline = ({
  children,
  href
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link href={href} className="relative group text-gray-600 font-medium">
    {children}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
  </Link>
);

export default function FooterPrimary() {
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
              alt="LinkAmber Logo"
              width={200}
              height={70}
              priority
            />
          </Link>
        </div>

        {/* Columns */}
        <div className="flex flex-col md:flex-row gap-35">
          {' '}
          {/* Keep gap between columns the same */}
          {/* Column 1 - Company Info */}
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Company</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <AnimatedUnderline href="#">Tech Stack</AnimatedUnderline>
              </li>
              <li>
                <AnimatedUnderline href="#">Case Study</AnimatedUnderline>
              </li>
              <li>
                <AnimatedUnderline href="#">Contact Us</AnimatedUnderline>
              </li>
            </ul>
          </div>
          {/* Column 2 - Quick Links */}
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Quick Link</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <AnimatedUnderline href="#">
                  Terms and Conditions
                </AnimatedUnderline>
              </li>
              <li>
                <AnimatedUnderline href="#">Privacy</AnimatedUnderline>
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
            <FaLinkedin className="text-gray-600" size={20} />
          </Link>
          <Link
            href="#"
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <FaFacebookF className="text-gray-600" size={20} />
          </Link>
          <Link
            href="#"
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <FaTwitter className="text-gray-600" size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
