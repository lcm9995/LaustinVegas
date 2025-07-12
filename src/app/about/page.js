import Header from '../components/Header';
import { FaInstagram, FaEnvelope, FaYoutube } from "react-icons/fa";


export default function About() {
    return (
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
        <Header />
        <div className="flex flex-col items-center px-4 pt-12 w-full max-w-5xl">
          <div className="w-full border border-white p-8">
            <p className="text-lg leading-relaxed text-center">
              Laustin Vegas is a [insert your description here]. He makes genre-bending music that blends smooth vocals with lush production. Blah blah blah.
            </p>
            <div className="flex justify-center space-x-6 mt-8">
                <a
                    href="https://www.instagram.com/laustinvegas"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram className="w-8 h-8 text-white grayscale hover:grayscale-0 transition" />
                </a>
                <a href="mailto:laustinvegas@example.com">
                    <FaEnvelope className="w-8 h-8 text-white grayscale hover:grayscale-0 transition" />
                </a>
                <a
                    href="https://www.youtube.com/@LaustinVegas"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaYoutube className="w-8 h-8 text-white grayscale hover:grayscale-0 transition" />
                </a>
            </div>

          </div>
        </div>
      </div>
    );
  }
  