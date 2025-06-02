

export default function Testimonials() {
  return (
    <section className="py-10 px-4 sm:px-6 md:px-8 bg-[#AAC9DD] text-center">
      <header className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2A77AA]">Testimonials</h2>
          <h3 className="font-bold text-xl sm:text-2xl mt-2 text-[#00121f]">
            We’ve built trust with reviews from <br /> individuals all around the world
          </h3>
          <p className="text-[#00121f] mt-4 max-w-xl mx-auto md:mt-0">
            Real experiences from people whose lives have been changed through improved accessibility.
          </p>
        </div>
      </header>

      <figure
        className="relative max-w-5xl mx-auto py-8"
        tabIndex={0}
        aria-label="Video testimonials section"
      >
        {/* Responsive video container */}
        <div className="relative w-full max-w-4xl mx-auto pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
          <video
            className="absolute top-0 left-0 w-full h-full object-contain"
            controls
            poster="/image.webp"
            aria-label="Testimonial video showing user stories about accessibility"
            title="User testimonial video about accessibility"
            preload="none"
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </figure>
    </section>
  );
}
