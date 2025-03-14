'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MainNavItem } from 'types';
import { cn } from '@/lib/utils';
import { MobileNav } from '@/components/mobile-nav';
import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { ChevronDown } from 'lucide-react';

interface CircularNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  user?: boolean;
}

export default function CircularNavigation({
  items,
  children,
  user
}: CircularNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null);

  const handleMouseEnter = (title: string) => {
    setOpenSubmenu(title);
  };

  const handleMouseLeave = () => {
    setOpenSubmenu(null);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between w-full md:w-fit p-2 md:p-1 gap-4 md:gap-20 md:bg-zinc-50 md:dark:bg-zinc-900 md:rounded-full md:px-8 md:border-2 md:border-muted/30 md:dark:border-muted/80 md:shadow-md mx-auto mt-4 backdrop-blur-sm md:backdrop-blur-none">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/logo.svg" // Path to your logo in the public folder
            alt="Logo" // Alt text for accessibility
            width={150} // Adjust the width as needed
            height={50} // Adjust the height as needed
            className="h-10 w-auto" // Adjust the size using Tailwind classes
          />
        </Link>
      </div>
      {items?.length ? (
        <div className="hidden md:flex space-x-6">
          {items?.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}
            >
              {item.items ? (
                <div className="cursor-pointer text-primary transition-colors hover:text-foreground/80 flex items-center">
                  {item.title}
                  <ChevronDown className="ml-1 size-4" /> {/* Dropdown icon */}
                  {openSubmenu === item.title && (
                    <ul className="absolute top-full left-0 bg-white dark:bg-zinc-900 shadow-lg mt-2 p-2 rounded-lg border border-muted/30 dark:border-muted/80 min-w-[150px]">
                      {item.items.map((subItem, subIndex) => (
                        <li key={subIndex} className="whitespace-nowrap">
                          <Link
                            href={
                              subItem.disabled || !subItem.href
                                ? '#'
                                : subItem.href
                            }
                            className={cn(
                              'block text-primary transition-colors hover:text-foreground/80 p-2',
                              subItem.disabled &&
                                'cursor-not-allowed opacity-80'
                            )}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={item.disabled || !item.href ? '#' : item.href}
                  className={cn(
                    'text-primary transition-colors hover:text-foreground/80',
                    item.disabled && 'cursor-not-allowed opacity-80'
                  )}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      ) : null}
      <div className="flex items-center space-x-2">
        <div className="hidden md:block">
          <ModeToggle />
        </div>
        {/* Add the Sign Up button */}
        <Link
          href="/signup" // Update the href to your signup page
          className={cn(
            buttonVariants({ variant: 'outline', size: 'sm' }),
            'rounded-full p-2 md:p-5 text-xs md:text-sm hidden md:inline-flex'
          )}
        >
          Sign Up
        </Link>
        <Link
          href={user ? '/dashboard' : '/signin'}
          className={cn(
            buttonVariants({ variant: 'outline', size: 'sm' }),
            'rounded-full p-2 md:p-5 text-xs md:text-sm hidden md:inline-flex'
          )}
        >
          {user ? 'Dashboard' : 'Login'}
        </Link>
        {/* Add the Schedule A Call button */}
        <Link
          href="/schedule-a-call"
          className={cn(
            buttonVariants({ variant: 'outline', size: 'sm' }),
            'rounded-full p-2 md:p-5 text-xs md:text-sm hidden md:inline-flex hover:!bg-[#333333] hover:!text-white transition-colors duration-200'
          )}
          style={{ backgroundColor: '#FF6400', color: '#FFFFFF' }}
        >
          Schedule A Call
        </Link>
        <button
          className="md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <Icons.close /> : <Icons.Menu />}
          <span className="sr-only">Menu</span>
        </button>
      </div>
      {showMobileMenu && items && (
        <div className="absolute top-full left-0 right-0 w-full md:hidden mt-2">
          <MobileNav items={items}>{children}</MobileNav>
        </div>
      )}
    </nav>
  );
}
