'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <Image
        src="/loading.jpg"
        alt="Loading"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

      {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-10" /> */}

      <div className="relative z-20 flex flex-col gap-6 items-center justify-center">
        {/* アニメーション */}
        <div className="container">
          {[...Array(7)].map((_, index) => (
            <div key={index} className="ball" />
          ))}
        </div>

        {/* テキストとボタン */}
        <h1 className="text-white text-3xl md:text-5xl font-bold mt-[40px]">全力でコーディング中</h1>
        <Link href="/">
          <button className="bg-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition">
            Topに戻る
          </button>
        </Link>
      </div>

      {/* Tailwindでは表現が難しいためグローバルスタイルとして追加 */}
      <style jsx>{`
        .container {
          width: 200px;
          height: 100px;
          margin: 0 auto;
        }

        .ball {
          width: 10px;
          height: 10px;
          margin: 10px auto;
          border-radius: 50%;
          background: #ffffff;
        }

        .ball:nth-child(1) {
          animation: right 1s infinite ease-in-out;
        }

        .ball:nth-child(2) {
          animation: left 1.1s infinite ease-in-out;
        }

        .ball:nth-child(3) {
          animation: right 1.05s infinite ease-in-out;
        }

        .ball:nth-child(4) {
          animation: left 1.15s infinite ease-in-out;
        }

        .ball:nth-child(5) {
          animation: right 1.1s infinite ease-in-out;
        }

        .ball:nth-child(6) {
          animation: left 1.05s infinite ease-in-out;
        }

        .ball:nth-child(7) {
          animation: right 1s infinite ease-in-out;
        }

        @keyframes right {
          0%, 100% {
            transform: translateX(-15px);
          }
          50% {
            transform: translateX(15px);
          }
        }

        @keyframes left {
          0%, 100% {
            transform: translateX(15px);
          }
          50% {
            transform: translateX(-15px);
          }
        }
      `}</style>
    </div>
  );
}
