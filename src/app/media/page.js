import Header from '../components/Header';

export default function MediaPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-8">
      <Header />

      <div className=" w-full flex flex-col items-center space-y-16">
        {/* Video 1 */}
        <iframe
          width="800"
          height="500"
          src="https://www.youtube.com/embed/zZfrONeUMGI?si=DqL3YYdOem2A3txC"
          title="Laustin Vegas - Video 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-lg"
        ></iframe>

        {/* Video 2 */}
        <iframe
          width="800"
          height="500"
          src="https://www.youtube.com/embed/6fa9kEOsBUQ"
          title="Laustin Vegas - Video 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-lg"
        ></iframe>

        {/* Add more videos as needed, same structure */}
      </div>
    </div>
  );
}
