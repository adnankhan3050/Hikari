'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignIn() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    // Handle sign-in logic
    setIsSubmitting(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f7fa] px-4">
      <Card className="w-full max-w-sm shadow-lg rounded-lg">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Log in</h2>
            <p className="text-gray-600 mt-2">
              Enter your credentials to log in to our platform.
            </p>
          </div>
          <form
            noValidate={true}
            className="grid gap-4"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="johndoe@gmail.com"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="text-left">
              <Link
                href="/forgot_password"
                className="text-sm text-blue-600 font-medium hover:underline"
              >
                Reset Password
              </Link>
            </div>
            <Button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-full text-lg font-medium hover:bg-orange-600"
              loading={isSubmitting}
            >
              Continue
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
