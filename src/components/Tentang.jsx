'use client'

export default function Tentang() {
  return (
    <section className="py-36 container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 md:gap-16">
      {/* Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2f422f] mb-2">
          Tentang Kelurahan Limba U Dua
        </h2>
        <h3 className="text-lg md:text-xl text-[#947700] font-medium mb-6">
          Pusat Budaya, UMKM, dan Semangat Kebersamaan
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Kelurahan Limba U Dua merupakan salah satu wilayah administratif di Kecamatan Kota Selatan, Kota Gorontalo. Memiliki luas ±1.600 m² dengan jumlah penduduk mencapai 4.451 jiwa, wilayah ini mencatat tingkat kepadatan sekitar 5,69 jiwa per meter persegi. Letaknya yang strategis di tengah kawasan kota menjadikan Limba U Dua berbatasan langsung dengan beberapa kelurahan lainnya seperti Biawu, Biawao, Limba B, dan Limba U Satu. Secara administratif, kelurahan ini juga memegang peran penting karena menjadi wilayah dengan jumlah Rukun Warga (RW) terbanyak di Kecamatan Kota Selatan, yakni 5 RW dan 12 RT.
        </p>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src="/assets/beranda/tentang_img.png"
          alt="Kelurahan Limba U Dua"
          className="w-full max-w-full rounded-[24px] shadow-md object-cover"
        />
      </div>
    </section>
  );
}
