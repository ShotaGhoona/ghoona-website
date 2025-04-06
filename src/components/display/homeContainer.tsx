// homeContainer.tsx
import TopviewSection from '@/feature/home/display/topview';
import ServiceSection from '@/feature/home/display/service';
import MvvSection from '@/feature/home/display/mvv';
import MemberSection from '@/feature/home/display/member';
import NewsSection from '@/feature/home/display/news';

export default function HomeContainer() {
  return (
    <div className="">
      <TopviewSection />
      <ServiceSection />
      <MvvSection />
      <MemberSection />
      <NewsSection />
    </div>
  );
}
