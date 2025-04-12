'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
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

const snsIcons: Record<string, IconProp> = {
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
      className="relative w-[250px] md:w-[300px] h-[350px] md:h-[400px] shadow-md rounded-2xl overflow-hidden"
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
        {role && <span className="text-xs text-[#1C1C1D] font-semibold mb-1">{role}</span>}
        <div className="flex gap-2 items-baseline">
          <h2 className="text-xl text-[#1C1C1D] font-bold">{name}</h2>
          <h3 className="text-xs text-[#1C1C1D]">{nameEn}</h3>
        </div>
        <p className="text-xs text-[#1C1C1D] mb-2 overflow-hidden line-clamp-5">{description}</p>

        <div className="flex justify-end gap-2">
          {sns.map((snsItem, idx) => (
            <a key={idx} href={snsItem.url} target="_blank" rel="noopener noreferrer" className="text-[#1C1C1D]">
              <FontAwesomeIcon icon={snsIcons[snsItem.name]} size="lg" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}