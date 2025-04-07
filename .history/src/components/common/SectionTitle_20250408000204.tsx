// components/common/SectionTitle.tsx
type SectionTitleProps = {
    title: string;
    className?: string;
  };
  
  export default function SectionTitle({ title, className = '' }: SectionTitleProps) {
    return (
      <h2 className={`text-[25px] xl:text-[35px] font-bold flex items-center gap-6 mb-10 ${className}`}>
        <span className="w-2 h-[50px] bg-[#4E7796] inline-block text-black-600" />
        {title}
      </h2>
    );
  }
  