'use client';
import Image from 'next/image';

export default function LogoCloud() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      {/* CRMFLOW.svg Image */}
      <div className="flex justify-center mb-12">
        <Image
          src="/CRM.svg" // Path to your CRMFLOW.svg in the public folder
          alt="CRM Workflow"
          width={800} // Adjust width as needed
          height={400} // Adjust height as needed
          className="w-full max-w-4xl"
        />
      </div>

      {/* Trusted by the world's best growth teams... */}
      <p className="mt-12 text-sm uppercase text-primary text-center font-bold tracking-[0.3em]">
        Trusted by the world's best growth teams...
      </p>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 my-12 place-items-center">
        <div className="flex items-center justify-center h-20 w-32">
          <Image
            src="/wizehire.svg" // Path to your wizehire.svg in the public folder
            alt="Wizehire"
            width={120} // Adjust width as needed
            height={60} // Adjust height as needed
            className="w-full h-auto"
          />
        </div>
        <div className="flex items-center justify-center h-20 w-32">
          <Image
            src="/leasecake.svg" // Path to your leasecake.svg in the public folder
            alt="Leasecake"
            width={120} // Adjust width as needed
            height={60} // Adjust height as needed
            className="w-full h-auto"
          />
        </div>
        <div className="flex items-center justify-center h-20 w-32">
          <Image
            src="/rastegar.png" // Path to your rastegar.svg in the public folder
            alt="Rastegar"
            width={120} // Adjust width as needed
            height={60} // Adjust height as needed
            className="w-full h-auto"
          />
        </div>
        <div className="flex items-center justify-center h-20 w-32">
          <Image
            src="/belfry.svg" // Path to your belfry.svg in the public folder
            alt="Belfry"
            width={120} // Adjust width as needed
            height={60} // Adjust height as needed
            className="w-full h-auto"
          />
        </div>
        <div className="flex items-center justify-center h-20 w-32">
          <Image
            src="/stuart.png" // Path to your stuart.svg in the public folder
            alt="Stuart"
            width={120} // Adjust width as needed
            height={60} // Adjust height as needed
            className="w-full h-auto"
          />
        </div>
        <div className="flex items-center justify-center h-20 w-32">
          <Image
            src="/talroo.png" // Path to your talroo.svg in the public folder
            alt="Talroo"
            width={120} // Adjust width as needed
            height={60} // Adjust height as needed
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
