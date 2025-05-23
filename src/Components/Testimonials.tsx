
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-10 px-4 bg-[#AAC9DD] text-center">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-[#2A77AA]">Testimonials</h2>
        <h3 className="text-xl mt-2 text-gray-700">
          We’ve built trust with reviews from individuals all around the world
        </h3>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Real experiences from people whose lives have been changed through improved accessibility.
        </p>
      </header>

      <article className="max-w-xl mx-auto">
        <p className="text-lg italic text-gray-800 mb-6">
          "Living with low vision made simple tasks frustrating. But with this app, I feel like I've gained my independence back.
          I can read signs, navigate new places, and even shop online by myself. Thank you!"
        </p>

        <figure className="flex items-center gap-4">
          <img
            src="/sienna.png"
            alt="Photo of Alex Alexander"
            className="w-16 h-16 rounded-full object-cover"
          />
          <figcaption className="text-left">
            <p className="font-semibold text-gray-900">Alex Alexander</p>
            <p className="text-sm text-gray-600">Student at Oxford University</p>
          </figcaption>
        </figure>
      </article>
    </section>
  );
}
