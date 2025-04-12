import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#13364E] text-white py-10 md:py-12 px-10 md:px-20">
      <div className="flex justify-start mb-12 gap-10 md:gap-20 mx-auto">
        <div>
          <h3 className="text-xl font-bold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><Link href="/service">Service</Link></li>
            <li><Link href="/mission">Mission</Link></li>
            <li><Link href="/member">Member</Link></li>
            <li><Link href="/news">News</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Service</h3>
          <ul className="space-y-2">
            <li><Link href="/service/tech">Ghoona Tech</Link></li>
            <li><Link href="/service/school">Ghoona School</Link></li>
            <li><Link href="/service/camp">Ghoona Camp</Link></li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Image
          src="/SVG/logo.svg"
          alt="Ghoona Logo"
          width={50}
          height={50}
          className="w-[30px] md:w-[50px] h-[30px] md:h-[50px]"
        />
        <span className="text-xl md:text-3xl font-semibold ml-5">ghoona</span>
      </div>
    </footer>
  );
}
