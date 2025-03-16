
import Slider from "@/components/Slider/Slider";
import Image from "next/image";
import Link from "next/link";

const slides = [
  "/slide/s1.jpg",
  "/slide/s2.jpg",
  "/slide/s3.jpg",
  "/slide/s4.jpg",
  "/slide/s5.jpg",
  "/slide/s6.jpg",
  "/slide/s7.jpg",
  "/slide/s8.jpg",
];

export default function AboutUs() {
  return (
    <main>
      <section className="flex flex-col items-center">
        {/* Text Content Section */}
        <div className="container mx-auto max-w-4xl px-4 py-16 text-center md:max-w-6xl lg:max-w-7xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Sparkling Clean, Every Time
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            We have made quality our habit. It is not something that we just strive for – we live by this
            principle every day.
          </p>
          <Link
            href="/our-services"
            className="inline-flex items-center justify-center px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-colors"
            aria-label="Learn more about our quality-driven approach"
          >
            Learn More
          </Link>
        </div>
        <Slider images={slides} />
        <div className="w-full p-6 text-center md:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto">
          <p className="text-lg">
            At <strong>BIZ CLEANING</strong>, we are dedicated to providing exceptional cleaning services that
            exceed our clients expectations. Our mission is to deliver sparkling clean results, every time, and
            build long-lasting relationships with our clients.
          </p>
        </div>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3Iy9YeY5kmw?autoplay=1&loop=10&playlist=3Iy9YeY5kmw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <br></br>
      <section className="border shadow grid gap-4 py-5">
        <div className="container mx-auto p-4 px-10 grid gap-4">
          <div className="grid gap-3">
            <br></br>
            <h1 className="text-4xl font-bold">Our Mission</h1>
            <p className="text-2xl">
              Our mission is to provide exceptional cleaning services that exceed our clients expectations. We
              strive to deliver sparkling clean results, every time, and build long-lasting relationships with our
              clients.
            </p>
          </div>
          <div className="grid gap-3">
            <h1 className="text-4xl font-bold">Our Vision</h1>
            <p className="text-2xl">
              Our vision is to be the leading cleaning services provider, known for our exceptional quality,
              reliability, and customer satisfaction. We aim to build a reputation for excellence and become the
              go-to cleaning solution for homes, offices, and industries.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="/our-services"
            className="inline-flex items-center justify-center px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-colors"
            aria-label="Learn more about our quality-driven approach"
          >
            Learn More
          </Link>
        </div>
      </section>
      <section className="container mx-auto grid gap-3 my-4">
        <h1 className="flex justify-center font-bold text-4xl text-blue-500">
          Why Choose BIZ CLEANING?
        </h1>
        <div className="container mx-auto p-4 px-10">
          <div className="flex justify-center grid gap-4">
            <div className="bg-white shadow-md p-4 rounded-md">
              <blockquote className="text-2xl">
                Clean Sweep transformed my home! Their attention to detail and professionalism exceeded my
                expectations.
              </blockquote>
              <cite className="text-lg text-gray-500">- Sarah T., Homeowner</cite>
            </div>
             <div className="bg-white shadow-md p-4 rounded-md">
              <blockquote className="text-2xl">
                We have been using Clean Sweep for our office spaces for over 3 years. Their consistency and quality
                are unmatched.
              </blockquote>
              <cite className="text-lg text-gray-500">- Robert M., Office Manager</cite>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-3">
          <div className="relative w-full h-[300px] md:w-[800px] md:h-[600px] lg:w-[1200px] lg:h-[700px]">
            <Image src="/team.jpg" alt="VPN security application on laptop and smartphone" fill className="object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
}
