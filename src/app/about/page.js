import Header from '../components/Header';
import { FaInstagram, FaEnvelope, FaYoutube } from "react-icons/fa";
import Link from 'next/link';

export default function About() {
  return (
    <div className="text-white min-h-screen flex flex-col items-center p-8">
      <Header />
      <div className="flex flex-col items-center w-full max-w-5xl px-4 mt-12">
      <div className="border border-white flex items-center justify-center
             w-[90%] h-[120px]
             sm:w-[80%] sm:h-[300px] sm: mt-15
             md:w-[70%] md:h-[200px]
             lg:w-[60%] lg:h-[150px]">

          {/* Optional placeholder for future bio or text */}

          <div className="flex justify-center space-x-6">
            <Link
              href="https://www.instagram.com/laustinvegas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-8 h-8 text-white grayscale hover:grayscale-0 transition" />
            </Link>
            {/*<Link href="mailto:laustinvegas@example.com">
              <FaEnvelope className="w-8 h-8 text-white grayscale hover:grayscale-0 transition" />
            < /Link>*/}
            {/*<Link
              href="https://www.youtube.com/@LaustinVegas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="w-8 h-8 text-white grayscale hover:grayscale-0 transition" />
          </Link>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
