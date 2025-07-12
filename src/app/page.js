import Header from './components/Header';
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";
import { SiTidal } from 'react-icons/si';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
      <Header />

      <iframe
        width="800"
        height="500"
        src="https://www.youtube.com/embed/6fa9kEOsBUQ?si=125Gnhj9ttz6yqp_&autoplay=1&mute=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div className="w-full max-w-4xl flex justify-center gap-6 mt-10 mb-8">
        <a href="https://open.spotify.com/artist/58kIjokyAq51h6Imc7htQG?si=n2QX4XpoT4akcW_qmfEttA" target="_blank" rel="noopener noreferrer">
          <FaSpotify className="w-8 h-8 text-white grayscale hover:grayscale-0 transition" />
        </a>
        <a href="https://music.apple.com/us/artist/laustin-vegas/1714944338" target="_blank" rel="noopener noreferrer">
          <FaApple className="w-8 h-8 text-white grayscale hover:grayscale-0 transition" />
        </a>
        <a href="https://www.youtube.com/@LaustinVegas" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="w-8 h-8 text-white grayscale hover:grayscale-0 transition" />
        </a>
        <a href="https://tidal.com/browse/artist/52121431?u" target="_blank" rel="noopener noreferrer">
          <SiTidal className="w-8 h-8 text-white grayscale hover:grayscale-0 transition" />
        </a>
      </div>
    </div>
  );
}
