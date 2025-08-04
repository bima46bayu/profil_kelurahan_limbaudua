'use client'
import Link from 'next/link'

export default function SejarahSingkat() {
  return (
    <section className="pt-12 pb-36 container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 md:gap-16">
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src="/assets/beranda/sejarahSingkat_img.png"
          alt="Kelurahan Limba U Dua"
          className="w-full max-w-full h-auto rounded-[24px] shadow-md object-cover"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2f422f] mb-2">
          Sejarah Kelurahan Limba U Dua
        </h2>
        <h3 className="text-lg md:text-xl text-[#947700] font-medium mb-6">
          Jejak Perjalanan dari Tradisi ke Kemajuan
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Kelurahan Limba U Dua memiliki akar sejarah yang kuat sebagai bagian dari wilayah adat Gorontalo. Nama “Limba” sendiri berasal dari istilah lokal yang merujuk pada wilayah atau kawasan permukiman masyarakat. Sebagai salah satu kelurahan tertua di Kecamatan Kota Selatan, Limba U Dua tumbuh dari komunitas yang menjunjung tinggi nilai adat bersendikan syara’, syara’ bersendikan Kitabullah — falsafah budaya yang masih terjaga hingga kini.
        </p>
        <Link href="/sejarah">
          <button className="bg-[#2f422f] text-white px-6 py-2 rounded-lg font-medium cursor-pointer hover:opacity-90 transition">
            Lihat Selengkapnya...
          </button>
        </Link>
      </div>
    </section>
  );
}
