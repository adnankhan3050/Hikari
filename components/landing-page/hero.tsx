'use client';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Star } from 'lucide-react';
import Particles from '@/components/magicui/particles';
import Ripple from '@/components/magicui/ripple';
import AvatarCircles from '@/components/magicui/avatar-circles';
import { useTheme } from 'next-themes';

export default function HeroSection() {
  const { theme } = useTheme();
  const avatarUrls = [
    'https://avatars.githubusercontent.com/u/16860528',
    'https://avatars.githubusercontent.com/u/20110627',
    'https://avatars.githubusercontent.com/u/106103625',
    'https://avatars.githubusercontent.com/u/59228569'
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Particles
          className="absolute inset-0"
          quantity={300}
          ease={80}
          color={theme === 'dark' ? '#FFFFFF' : '#000000'}
          refresh
        />
        <Ripple />
      </div>
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-32">
        <div className="relative z-10 flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto">
          {/* First Line */}
          <div className="max-w-[42rem] text-base sm:text-lg text-foreground">
            For Sales Teams Doing Outbound at Scale
          </div>

          {/* Heading */}
          <h1 className="font-heading tracking-tight font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl">
            Close More Deals with{' '}
            <span style={{ color: '#FF6400' }}>Hyper-Targeted</span>
            <br />
            <span style={{ color: '#FF6400' }}>Prospect Lists</span>
          </h1>

          {/* Bold and Underlined Text */}
          <div className="max-w-[42rem] font-bold text-base sm:text-lg text-foreground">
            <span className="underline">Using ZoomInfo?</span> We find 56% more
            mobile numbers for a fraction of the cost.
          </div>

          {/* New Line with Background Color (Strictly Wrapped) */}
          <div className="mt-6">
            <span
              className="text-sm sm:text-base"
              style={{
                backgroundColor: 'rgba(255, 100, 0, 0.5)', // Background color
                padding: '2px 4px', // Minimal padding to avoid extra space
                lineHeight: '1.5' // Adjust line height to match text size
              }}
            >
              Want to run a free test on a list against your current provider?
            </span>
          </div>

          {/* Centralized "Let's Talk" Button */}
          <div className="flex justify-center mt-6">
            <Link
              href="/schedule-a-call"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'sm' }),
                'rounded-full p-2 md:p-5 text-xs md:text-sm hidden md:inline-flex hover:!bg-[#333333] hover:!text-white transition-colors duration-200'
              )}
              style={{ backgroundColor: '#FF6400', color: '#FFFFFF' }}
            >
              Let's Talk
            </Link>
          </div>

          {/* Avatar Circles and Star Rating */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 w-full">
            <AvatarCircles numPeople={155} avatarUrls={avatarUrls} />
            <div className="flex flex-col mt-2">
              <div className="flex flex-row justify-center sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-yellow-200 text-yellow-300 size-5"
                  />
                ))}
              </div>
              <span className="text-xs font-semibold">Join 160+ Users</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
