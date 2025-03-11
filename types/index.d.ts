import { User } from './main';
import type { Icon } from 'lucide-react';

import { Icons } from '@/components/icons';

export type NavItem = {
  title: string;
  href?: string; // href is now optional because parent items may not have a link
  disabled?: boolean;
  items?: NavItem[]; // Add support for submenu items
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type SubscriptionPlan = {
  name: string;
  description: string;
  stripe_price_id: string;
};

export type UserSubscriptionPlan = SubscriptionPlan &
  Pick<User, 'stripe_customer_id' | 'stripe_subscription_id'> & {
    stripe_current_period_end: number;
    isPro: boolean;
  };
