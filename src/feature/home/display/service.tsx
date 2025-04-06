import SectionTitle from '@/components/common/SectionTitle';
import ServiceCard from '@/components/common/ServiceCard';

export default function ServiceSection() {
    return (
      <section className="relative w-full bg-no-repeat bg-cover px-5 md:px-20 py-20">
        <SectionTitle title="Service" />
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <ServiceCard
            title="Web事業"
            description="最新のAI技術を駆使し、あなたのビジネスを加速させるテクノロジーサービス。ホームページ制作からSEO記事の自動生成、SNS運用の効果測定、業務のオートメーション化、ウェブアプリ開発、Notion構築代行まで、テクノロジーを活用してビジネス課題をスマートに解決します。"
            imageUrl="service_tech.jpg"
            href="/service/tech"
            />
            <ServiceCard
            title="人材育成事業"
            description="生成AI時代に特化した新しいスタイルのプログラミングスクール。従来のプログラミング学習を超えて、AIを味方につけて最短で結果を出す方法を教えます。エンジニアとしての市場価値を高めたい方へ、効率的で実践的な学びの場を提供します。"
            imageUrl="service_academy.jpg"
            href="/service/academy"
            />
            <ServiceCard
            title="Community事業"
            description="意識の高い仲間が集う朝活オンラインサロン。
自分をアップデートしたい人のために、質の高い情報交換とコミュニティづくりをサポートします。一緒に朝の時間を活用し、成長と学びの習慣をつくりましょう。"
            imageUrl="service_camp.jpg"
            href="/service/camp"
            />
        </div>
      </section>
    );
  }
  