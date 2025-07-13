import Header from '../components/Header';

export default function MediaPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-8">
      <Header />
      <div className="w-full flex flex-col items-center space-y-16 mt-6 sm:mt-10 md:mt-14 lg:mt-20 px-4">
        {/* Video 1 */}
        <div className="w-full max-w-3xl aspect-video">
          <iframe
            src="https://www.youtube.com/embed/zZfrONeUMGI?si=DqL3YYdOem2A3txC"
            title="Laustin Vegas - Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>

        {/* Video 2 */}
        <div className="w-full max-w-3xl aspect-video">
          <iframe
            src="https://www.youtube.com/embed/6fa9kEOsBUQ"
            title="Laustin Vegas - Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>

        {/* Add more videos using the same structure */}
      </div>
    </div>
  );
}
