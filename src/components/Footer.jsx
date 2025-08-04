import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#2f422f] text-white pt-24 pb-10 mt-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Info Kelurahan */}
        <div className="md:w-2/3">
          <h2 className="text-xl font-bold">Kelurahan Limba U Dua</h2>
          <p className="text-sm leading-relaxed mt-2">
            Jl. Drs. Achmad Nadjamuddin, Kelurahan Limba U Dua, <br />
            Kecamatan Kota Selatan, Kota Gorontalo, Provinsi Gorontalo, Kode pos 96138
          </p>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="font-bold text-lg">Sosial Media</h3>
          <div className="flex space-x-4 mt-2">
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
              <FaFacebook className="text-2xl hover:text-gray-300 transition" />
            </Link>
            <Link href="http://instagram.com/limbaudua.kita" target="_blank" aria-label="Instagram">
              <FaInstagram className="text-2xl hover:text-gray-300 transition" />
            </Link>
            <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
              <FaYoutube className="text-2xl hover:text-gray-300 transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-20 text-center text-sm text-white">
        &copy; {new Date().getFullYear()} Kelurahan Limba U Dua. All rights reserved.
      </div>
    </footer>
  )
}
