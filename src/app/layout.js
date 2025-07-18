
import './globals.css';
import { Analytics } from "@vercel/analytics/next"
import Sidebar from './components/Sidebar';
import BackgroundVideo from './components/BackgroundVideo';
import BorderFrame from './components/BorderFrame';

export const metadata = {
  title: 'Laustin Vegas',
  description: 'Official site of Laustin Vegas',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/svg+xml' }
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
       <head>
        <link rel="icon" href="/favicon.png" type="image/png" />

      </head>
      <body className="bg-black text-white flex flex-col min-h-screen">
        <BackgroundVideo />
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-0" />

        <div className = "relative z-10">
          <BorderFrame />
    
          <>
            {/* Left Border */}
            <div className="fixed top-4 bottom-12 left-10 w-px bg-white pointer-events-none z-50" aria-hidden="true" />
            
            {/* Right Border */}
            <div className="fixed top-4 bottom-12 right-10 w-px bg-white pointer-events-none z-50" aria-hidden="true" />
        
          </>
        
          <main className="flex-1">{children} 
          <Analytics />
          </main>
          <footer className="text-center p-4 text-xs text-white border-t bg-black border-black">
            © {new Date().getFullYear()} Laustin Vegas. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
