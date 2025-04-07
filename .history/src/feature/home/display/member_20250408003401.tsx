import SectionTitle from '@/components/common/SectionTitle';
import MemberCard from '@/components/common/MemberCard';

export default function MemberSection() {
  const members = [
    {
      image1Url: '/member/shotayamashita1.jpg',
      image2Url: '/member/shotayamashita2.jpg',
      role: 'CEO',
      name: '山下翔大',
      nameEn: 'Shota Yamashita',
      description: '2020年京都大学京都大入学。テック企業のクリエイティブチームでリーダーとしてプロジェクトを牽引。AIの無限の可能性に感化され、インドで1年間のIT留学を経験。学在学中にGhoonaを設立。',
      sns: [
        { name: 'Instagram', url: 'https://instagram.com/' },
        { name: 'LinkedIn', url: 'https://linkedin.com/' },
      ],
    }
    // 追加のメンバーデータを記載
  ];

  return (
    <section id="member" className="w-full py-10">
      <SectionTitle title="Member" className="w-full px-5 md:px-20"/>
      <div className="mt-8 overflow-x-auto px-5 md:px-20">
        <div className="flex gap-10 overflow-x-scroll no-scrollbar py-5">
          {members.map((member, idx) => (
            <MemberCard key={idx} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
