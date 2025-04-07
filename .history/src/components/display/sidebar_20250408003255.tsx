'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGear, faBullhorn, faCircleUser, faBuilding } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  return (
    <aside className={`w-[220px] h-screen bg-[#4E7796] text-white py-8 px-4 fixed flex flex-col justify-between ${styles.dropShadow}`}>
      <div>
        {/* Logo */}
        <div className="mb-10 flex items-center gap-3">
          <Image src="/SVG/logo.svg" alt="logo" width={40} height={40} />
          <span className="text-[30px] font-medium">ghoona</span>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className={`space-y-8 ${styles.tree}`}>
            <li>
              <Link href="/" className="flex items-center gap-5 text-[25px]">
                <FontAwesomeIcon icon={faHouse} className="w-[30px]" />
                Home
              </Link>
              <ul className="ml-13 relative">
                <li className="text-[15px] relative pt-2">
                  <Link href="/#service">Service</Link>
                </li>
                <li className="text-[15px] relative pt-2">
                  <Link href="/#mission">Mission</Link>
                </li>
                <li className="text-[15px] relative pt-2">
                  <Link href="/#member">Member</Link>
                </li>
                <li className="text-[15px] relative pt-2">
                  <Link href="/#news">News</Link>
                </li>
              </ul>
            </li>

            <li>
              <div className="flex items-center gap-5 text-[25px]">
                <FontAwesomeIcon icon={faGear} className="w-[30px]" />
                Service
              </div>
              <ul className="ml-13 relative">
                <li className="text-[15px] relative pt-2">
                  <Link href="/service/tech">Ghoona Tech</Link>
                </li>
                <li className="text-[15px] relative pt-2">
                  <Link href="/service/academy">Ghoona Academy</Link>
                </li>
                <li className="text-[15px] relative pt-2">
                  <Link href="/service/community">Ghoona Community</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/#member" className="flex items-center gap-5 text-[25px]">
                <FontAwesomeIcon icon={faCircleUser} className="w-[30px]" />
                Member
              </Link>
            </li>

            <li>
              <Link href="/#news" className="flex items-center gap-5 text-[25px]">
                <FontAwesomeIcon icon={faBullhorn} className="w-[30px]" />
                News
              </Link>
            </li>

            <li>
              <Link href="/#company" className="flex items-center gap-5 text-[25px]">
                <FontAwesomeIcon icon={faBuilding} className="w-[30px]" />
                Company
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mb-4">
        <Link href="#" className="flex items-center justify-center bg-white text-black py-2 rounded-lg shadow">
          <Image src="/SVG/line.svg" alt="LINE公式" width={30} height={30} />
          <span className="ml-2 font-semibold">公式LINE</span>
        </Link>
      </div>
    </aside>
  );
}

