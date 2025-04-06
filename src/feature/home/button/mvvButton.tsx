'use client';

const buttons = [
  'Mission', 'Vision', 'Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5'
];

type Props = {
  active: string | null;
  setActive: (btn: string) => void;
};

export default function MVVButton({ active, setActive }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-8">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => setActive(btn)}
          className={`px-3 py-1 md:px-6 md:py-2 rounded-full font-semibold transition-all duration-200 text-xs md:text-sm ${
            active === btn
              ? 'bg-[#D87286] text-white shadow-md'
              : 'bg-[#3C3B3B] text-white hover:bg-[#D87286]/80'
          }`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}
