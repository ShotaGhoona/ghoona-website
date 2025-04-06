
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export type SNSLink = { name: string; url: string };

export type MemberCardProps = {
  image1Url: string;
  image2Url: string;
  role?: string;
  name: string;
  nameEn: string;
  description: string;
  sns?: SNSLink[];
};

const snsIcons: Record<string, any> = {
  Instagram: faSquareInstagram,
  LinkedIn: faLinkedin,
};

export default function MemberCard({
  image1Url,
  image2Url,
  role,
  name,
  nameEn,
  description,
  sns = [],
}: MemberCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-[300px] min-w-[300px] h-[400px] shadow-md rounded-2xl overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={hovered ? image2Url : image1Url}
        alt={name}
        width={300}
        height={400}
        className="w-full h-full object-cover transition-opacity duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/60 to-transparent flex flex-col justify-end px-4 py-5">
        {role && <span className="text-xs font-semibold mb-1">{role}</span>}
        <div className="flex gap-2 items-baseline">
          <h2 className="text-xl font-bold">{name}</h2>
          <h3 className="text-xs">{nameEn}</h3>
        </div>
        <p className="text-xs text-gray-800 mb-2 overflow-hidden line-clamp-5">{description}</p>

        <div className="flex justify-end gap-2">
          {sns.map((snsItem, idx) => (
            <a key={idx} href={snsItem.url} target="_blank" rel="noopener noreferrer" className="text-gray-800">
              <FontAwesomeIcon icon={snsIcons[snsItem.name]} size="lg" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}