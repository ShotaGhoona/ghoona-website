import Image from 'next/image';

interface TopviewProps {
  imagePath: string;
  height?: string;
  title: string;
  subtitle: string;
}

export default function TopviewSection({
  imagePath,
  height = 'h-screen',
  title,
  subtitle,
}: TopviewProps) {
  return (
    <section className={`relative w-full ${height}`}>
      <Image
        src={`/${imagePath}`}
        alt="Topview Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      <div className="absolute inset-0 flex items-center justify-between px-10 md:px-20 py-10">
        <div className="text-white">
          <h1 className="text-[60px] sm:text-[100px] md:text-[150px] font-bold leading-tight">
            {title}
          </h1>
          <p className="text-[30px] sm:text-[50px] md:text-[75px] font-semibold">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}