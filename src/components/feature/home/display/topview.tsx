export default function TopviewSection() {
  return (
    <section
      className="relative w-full h-screen bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/topview.jpg')" }}
    >
      {/* 左側：テキスト */}
      <div className="absolute inset-0 flex items-center justify-between px-20 py-10">
        <div className="text-white">
          <h1 className="text-[120px] font-bold leading-tight">Ghoona</h1>
          <p className="text-[50px] font-semibold -mt-5">Update Our World</p>
        </div>
      </div>
    </section>
  );
}
