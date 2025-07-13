import Header from './components/Header';
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";
import { SiTidal } from 'react-icons/si';
import Link from 'next/link';
export default function Home() {
  return (
   
    <div className="bg-black text-white min-h-screen flex flex-col items-center px-4 sm:px-6 md:px-8 py-8">
      <Header />

      <div className="w-full px-4 flex justify-center mt-8 sm:mt-20 md:mt-15 lg:mt-20">
        <div className="aspect-video w-[90%] sm:w-[85%] md:w-[80%] lg:w-[800px]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/6fa9kEOsBUQ?si=125Gnhj9ttz6yqp_&autoplay=1&mute=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="w-full flex items-center justify-center gap-6 mt-16 mb-8 sm:mt-24 md:mt-20 lg:mt-20 px-4">
        <Link href="https://open.spotify.com/artist/58kIjokyAq51h6Imc7htQG?si=n2QX4XpoT4akcW_qmfEttA" target="_blank" rel="noopener noreferrer">
          <FaSpotify className="w-8 h-8 sm:w-10 sm:h-10 text-white grayscale hover:grayscale-0 transition" />
        </Link>
        <Link href="https://music.apple.com/us/artist/laustin-vegas/1714944338" target="_blank" rel="noopener noreferrer">
          <FaApple className="w-8 h-8 sm:w-10 sm:h-10 text-white grayscale hover:grayscale-0 transition" />
        </Link>
        <Link href="https://www.youtube.com/@LaustinVegas" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="w-8 h-8 sm:w-10 sm:h-10 text-white grayscale hover:grayscale-0 transition" />
        </Link>
        <Link href="https://tidal.com/browse/artist/52121431?u" target="_blank" rel="noopener noreferrer">
          <SiTidal className="w-8 h-8 sm:w-10 sm:h-10 text-white grayscale hover:grayscale-0 transition" />
        </Link>
      </div>
    </div>
  );
}
