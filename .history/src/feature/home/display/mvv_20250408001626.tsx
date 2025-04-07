'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '@/components/common/SectionTitle';
import MVVButton from '@/feature/home/button/mvvButton';
import Image from 'next/image';

const contentMap: Record<string, { img: string; title: string; subtitle: string; description: string }> = {
  Mission: {
    img: '/SVG/mission.svg',
    title: 'Mission',
    subtitle: 'Update Our World',
    description: `AGIの民主化――<br/>すべてのビジネスが、さらなる次元へと進化を迫られる時代。<br/>私たちは、そのアップデートの最先端を切り拓くために存在する。<br/><br/>株式会社GhoonaはAIを駆使したDXソリューションによって、<br/>ビジネスプロセスを大胆に刷新し、業界の垣根を越えて世界を変革する。<br/><br/>私たちの強みは「純粋無垢な発想力」と「実現する技術力」。<br/>人と数字を冷静に分析し、昨日まで存在しなかった価値を今日生み出す。<br/><br/>蒸気機関が物理インフラを飛躍させ、<br/>インターネットが情報インフラを一変させたように――<br/>今、AIが世界をもう一段高いステージへ引き上げる。<br/><br/>Update Our World。<br/>それは、私たち全員が担うミッション。<br/>AGIがもたらす新次元の可能性を“誰もが”手にできるようにすること。<br/>そうしてこそ、人々は最も大切にしたい時間と情熱に没頭できる。<br/><br/>私たちは約束する。<br/>AGIの力で、世界を再定義することを。<br/>すべての人の挑戦を後押しし、活力あふれる未来を創造することを。`
  },
  Vision: {
    img: '/SVG/vision.svg',
    title: 'Vision',
    subtitle: 'Our challenge ignites vitality worldwide — we lead the new paradigm.',
    description: '私たちは、AIが特別なテクノロジーではなく、<br/>日常の一部として当たり前に存在する未来を見据えている。<br/><br/>世界中の人々が、意識することなくAIの恩恵を受け、<br/>仕事や生活のあらゆる場面で新たな可能性を開く――<br/>それこそが、私たちが描く次のステージだ。<br/><br/>そのために必要なのは、<br/>大胆なビジネスモデルの創出と、多様な視点を結集する柔軟な仕組み。<br/><br/>私たちは最先端の知見やスピード感を武器に、<br/>従来の枠組みを超えた連携を広げていく。<br/><br/>技術が置き換えるのは人間の創造性ではなく、<br/>“無意識の負担”と“踏み出せない不安”であるべきだ。<br/><br/>私たちは、誰よりも先にこの変化を体現し、世界中のステークホルダーに「明日へのエネルギー」と「挑戦する勇気」をもたらすリーダーでありたい。<br/><br/>私たちの挑戦が、世界に活力を灯し、新常識をリードする。<br/>グローバル規模でのインパクトを追求しつつも、<br/>本当に大切なことは、人々が自分の力を信じられる環境を整えることだと信じている。'
  },
  "Value 1": {
    img: '/SVG/value1.svg',
    title: 'Value1',
    subtitle: 'Pioneering at Speed',
    description: '新しい価値が生まれる瞬間は、いつだって“先駆者の一歩”から始まる。<br/>私たちは、AIという未知の可能性にあふれた領域で、誰よりも早く飛び込む覚悟を持っている。<br/><br/>情報をいち早くキャッチし、PoCを回し、ユーザーの声を拾い上げる。<br/>その一連のサイクルを、圧倒的なスピードで繰り返すことこそが、<br/>新たな常識を生む源泉だと信じている。<br/><br/>スピードを上げるほどリスクは増す。<br/>それでも、挑戦を先延ばしにすることで失われる可能性のほうが、はるかに大きい。<br/>私たちは失敗を責めるのではなく、そこから学び、もう一度走ることを奨励する。<br/><br/>ここに誓う。<br/>未来を切り拓く先駆者として、ためらいなく動き続けることを。<br/>誰よりも先に走り、誰よりも深く学び、誰よりも早く行動し、<br/>その積み重ねで世界に新たな可能性を生み出すことを。<br/><br/>Pioneering at Speed<br/>それは単なるスローガンではなく、<br/>私たち全員の行動を突き動かす原動力である。'
  },
  "Value 2": {
    img: '/SVG/value2.svg',
    title: 'Value2',
    subtitle: 'Curiosity Driven',
    description: '新たな価値を創出する原点は、いつの時代も「なぜ？」という純粋な問い<br/>その小さな火種こそが、大人になるにつれて忘れがちな子ども心――<br/>私たちは、この好奇心を遠慮なく解き放ち、世界を再定義し続けたいと思っている。<br/><br/>誰もが心の奥底に抱えるワクワク。それを引き出すのは、<br/>臆せず声に出し、即座にリサーチし、小さな実験を重ねる姿勢。<br/><br/>一見、直感を最優先したひらめきでも、<br/>そこから“昨日までこの世になかった価値”が生まれるかもしれない。<br/>むしろ、常識に挑む姿勢こそが真のイノベーションを呼び込む。<br/><br/>“ワクワクを大きな声で言える”風土があれば、<br/>仲間一人ひとりの好奇心は見えないところで燻るのではなく、アイデアとして世界に放たれる。<br/><br/>ここに誓う。<br/>子どものような目線を失わず、常に疑問を糧に前進することを。<br/>枠組みを恐れず、柔軟な発想と徹底的な探求でプロダクトを刷新し続けることを。<br/>その知的好奇心と実践の連鎖こそが、私たちを未知の領域へと導き、<br/>人々の暮らしに新たな可能性と活力をもたらすと信じている。<br/><br/>Curiosity Driven<br/>私たちは、好奇心をガソリンに変えて走り続ける――<br/>それが、革新的なパラダイムの創造する最良の原動力だから。'
  },
  "Value 3": {
    img: '/SVG/value3.svg',
    title: 'Value3',
    subtitle: 'Stay True',
    description: 'あらゆる可能性が加速するこの時代にあって、<br/>私たちは巧妙な言い逃れや曖昧な装飾に頼らない。<br/><br/>表舞台で堂々と事実を示し、勝負する――<br/>それこそが、次の飛躍を可能にする鍵になるからだ。<br/><br/>数字や状況を冷静に見極め、遠回りな駆け引きをやめ、堂々と本質を追求する。<br/>自らの至らなさやミスは素直に受け止め、そこから学習・修正を重ねる。<br/>現況を見極め、情報をオープンにし、修正点を即座に拾う姿勢が、<br/>積み上げてきた信用を最大限に活かす誠実さへとつながる。<br/><br/>ここに誓う。<br/>私たちは、現実との対話を止めず、正直でオープンな態度を維持する。<br/>再現性のある勝利を生み出すのは、誠実さという土台にほかならないと信じて。<br/><br/>Stay True<br/>それは、個人としても組織としても、<br/>真のプロフェッショナルであり続けるための揺るぎない方針である。'
  },
  "Value 4": {
    img: '/SVG/value4.svg',
    title: 'Value4',
    subtitle: 'Elevate Self, Elevate All',
    description: '何よりも先に、自分の専門性を磨く。<br/>誰かがやってくれるのを待つのではなく、自ら率先して動く。<br/>その“主体的な探究心”こそが、一人ひとりを際立たせる源泉となる。<br/><br/>だが、高い能力を持つ者が孤立しては、世界には通用しない。<br/>イノベーションは、個性の化学反応から生まれる。<br/><br/>お互いの強みを惜しみなく掛け合わせ、<br/>協力しながら最高の成果へ駆け上がる。<br/>互いのナレッジやリソースを喜んで共有し合うからこそ、<br/>スピードとイノベーションは加速し、私たちは世界という大舞台で戦い抜ける。<br/><br/>ここに誓う。<br/>自ら能力を高めることを怠らず、仲間との連携をいとわず、<br/>個としても、集団としても高みを目指すことを。<br/><br/>Elevate Self, Elevate All<br/>それは、高みを目指す個々の意志と、共創による壮大なシナジーを体現する指針である。'
  },
  "Value 5": {
    img: '/SVG/value5.svg',
    title: 'Value5',
    subtitle: '',
    description: ''
  }
  // 他のValueも同様に記述...
};

export default function MVVSection() {
  const [active, setActive] = useState<string | null>(null);
  const content = active ? contentMap[active] : null;

  const handleButtonClick = (btn: string) => {
    setActive((prev) => (prev === btn ? null : btn));
  };

  return (
    <section className="relative w-full px-5 md:px-20 py-10 md:py-20">
      <SectionTitle title="Mission Vision Value" />
      <div className="relative overflow-hidden rounded-[30px]">
        <Image src="/SVG/mvv.svg" width={0} height={0} alt="MVV背景画像" className="w-full h-auto object-cover md:px-20" />

        <AnimatePresence mode="wait">
          {content && (
            <>
              {/* PC用の表示 */}
              <motion.div
                key={`desktop-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-gradient-to-l from-white/90 via-white/60 to-transparent rounded-[0px] hidden md:flex items-center h-full p-10 md:p-20 gap-12 justify-between"
              >
                <div className="w-[50%] flex flex-col items-center justify-center">
                  <div className="bg-white/80 shadow-lg rounded-lg w-[70%] h-[80%] flex flex-col items-center justify-center p-4 md:p-8">
                    <Image src={content.img} width={200} height={200} alt={`${content.title}画像`} className="object-contain"/>
                    <h2 className="text-[30px] md:text-[40px] font-bold mt-4">{content.title}</h2>
                  </div>
                </div>
                <div className="w-[50%]">
                  <h1 className="text-[28px] md:text-[40px] text-[#1C1C1D] font-bold mb-6">{content.subtitle}</h1>
                  <p className="text-[12px] md:text-[15px] text-[#1C1C1D] leading-relaxed font-bold" dangerouslySetInnerHTML={{ __html: content.description }}></p>
                </div>
              </motion.div>

              {/* スマホ用の上部(img, titleのみ) */}
              <motion.div
                key={`mobile-top-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-gradient-to-l from-white/90 via-white/60 to-transparent rounded-[30px] flex md:hidden flex-col items-center justify-center p-4"
              >
                <div className="bg-white/80 shadow-lg rounded-lg w-[70%] flex flex-col items-center justify-center p-4">
                  <Image
                    src={content.img}
                    width={100}
                    height={100}
                    alt={`${content.title}画像`}
                    className="object-contain"
                  />
                  <h2 className="text-[18px] font-bold mt-2">{content.title}</h2>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* スマホ用 subtitle, descriptionにAnimatePresence追加 */}
      <AnimatePresence mode="wait">
        {content && (
          <motion.div
            key={`mobile-bottom-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4 md:hidden px-4"
          >
            <h1 className="text-[20px] text-[#1C1C1D] font-bold mb-3">{content.subtitle}</h1>
            <p className="text-[10px] text-[#1C1C1D] leading-relaxed font-bold" dangerouslySetInnerHTML={{ __html: content.description }}></p>
          </motion.div>
        )}
      </AnimatePresence>

      <MVVButton active={active} setActive={handleButtonClick} />
    </section>
  );
}
