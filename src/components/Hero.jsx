export default function Hero() {
  return (
    <section
      className="relative h-[100vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/beranda/image-hero.jpg')"
      }}
    >
      {/* Overlay optional */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Selamat Datang <br />
          di Kelurahan Limba U Dua
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Jelajahi cerita dan potensi dari ujung negeri yang penuh makna.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
          {/* Tombol Primary */}
          <a
            href="https://arcg.is/1yHTya0"
            // target="_blank"
            // rel="noopener noreferrer"
            className="bg-[#947700] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition text-center w-full md:w-[250px]"
          >
            Jelajahi Pariwisata
          </a>

          {/* Tombol Secondary */}
          <a
            href="https://stuntrack-limbaudua.streamlit.app/"
            // target="_blank"
            // rel="noopener noreferrer"
            className="border-2 border-[#ffffff] text-[#ffffff] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-500 transition text-center w-full md:w-[250px]"
          >
            Cek Kondisi Stunting
          </a>
        </div>

      </div>
    </section>
  );
}
