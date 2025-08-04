import Image from 'next/image'

export const metadata = {
  title: "Sejarah Kelurahan Limba U Dua",
  description: "Informasi sejarah singkat Kelurahan Limba U Dua",
}

export default function SejarahPage() {
  return (
    <section className="mt-12 py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        
        {/* Judul dan Gambar Hero */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2f422f] mb-6">
            Sejarah Kelurahan Limba U Dua
          </h2>
          <div className="mx-auto w-full max-w-md md:max-w-lg lg:max-w-xl aspect-[4/3] relative rounded-xl shadow-lg overflow-hidden mb-10">
            <Image
              src="/assets/sejarah/artikel1.jpg"
              alt="Kantor lurah limba u dua"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Paragraf Sejarah */}
        <div className="text-justify text-gray-700 space-y-6">
          <p>
            Secara etimologis, nama “Limba” berasal dari bahasa lokal Gorontalo yang berarti cekungan. Penamaan ini bukan tanpa alasan—wilayah Limba U Dua secara geografis memang terletak di daerah yang berbentuk cekungan atau dataran rendah di antara perbukitan kecil di sekitarnya. Letak ini menjadikan Limba U Dua sebagai area yang subur, strategis, dan menjadi pusat pertemuan masyarakat sejak masa lampau. Topografi cekungan ini pun turut memengaruhi pola permukiman dan mobilitas warga, sekaligus mencerminkan bagaimana masyarakat Gorontalo menyesuaikan hidupnya dengan bentuk alam yang ada.
          </p>
          <p>
            Meski sejarah lokalnya belum sepenuhnya terdokumentasi dalam bentuk tertulis, masyarakat meyakini bahwa Kelurahan Limba U Dua berkembang seiring dengan tumbuhnya pusat Kota Selatan di masa lalu. Wilayah ini diperkirakan telah lama menjadi bagian dari permukiman awal masyarakat Gorontalo, terutama karena letaknya yang dekat dengan pusat pemerintahan dan perdagangan tradisional. Bukti nyata dari nilai sejarah dan budaya di wilayah ini adalah keberadaan Dulohupa, rumah adat khas Gorontalo yang terletak di kawasan Limba U Dua. Dulohupa bukan hanya ikon budaya, melainkan juga simbol dari tradisi musyawarah, nilai kekeluargaan, dan tata pemerintahan adat Gorontalo di masa lampau.
          </p>
          <p>
            Keberadaan rumah adat Dulohupa di Limba U Dua menandakan peran penting kelurahan ini dalam sejarah Gorontalo. Sebagai tempat dilaksanakannya musyawarah kerajaan, wilayah ini memiliki nilai strategis secara budaya dan sosial. Dengan kekayaan sejarah, warisan adat, serta struktur sosial yang dinamis, Limba U Dua tidak hanya menjadi bagian dari perkembangan Kota Selatan, tetapi juga menjadi simpul penting dalam menjaga identitas, nilai, dan perjalanan masyarakat Gorontalo dari masa ke masa.
          </p>
        </div>

        {/* Dokumentasi Sejarah */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-semibold text-gray-800 mb-8">
            Dokumentasi Sejarah
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "/assets/sejarah/artikel2.jpg", 
              "/assets/sejarah/artikel3.jpg"
              // Tambah gambar lain di sini jika perlu
            ].map((src, index) => (
              <div
                key={index}
                className="relative w-full aspect-[4/3] rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Dokumentasi sejarah ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
