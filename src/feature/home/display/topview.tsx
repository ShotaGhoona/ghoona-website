// components/feature/home/display/topview.tsx
import Image from 'next/image';

export default function TopviewSection() {
  return (
    <section className="relative w-full h-screen">
      <Image
        src="/topview.jpg"
        alt="Topview Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      <div className="absolute inset-0 flex items-center justify-between px-10 md:px-20 py-10">
        {/* Brand and Catchphrase */}
        <div className="text-white">
          <h1 className="text-[75px] sm:text-[100px] md:text-[150px] font-bold leading-tight">Ghoona</h1>
          <p className="text-[40px] sm:text-[50px] md:text-[75px] font-semibold">Update Our World</p>
        </div>
      </div>
    </section>
  );
}
