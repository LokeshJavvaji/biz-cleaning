import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 md:px-8">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/home.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-black">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          Professional Cleaning Services Tailored to Your Needs
        </h1>
        <p className="mt-4 text-lg md:text-xl text-black-300">
          Residential, Commercial, specialized, Eco-friendly and Industrial Cleaning Solutions
        </p>
        <Button
          className="mt-6 px-6 py-6 text-lg bg-red-400 hover:bg-red-500"
          onClick={() => router.push("/about-us")}
        >
          Learn More
        </Button>
      </div>

      {/* Video Wrapper
      <div className="relative z-10 w-[100%] md:w-[60%] lg:w-[40%] max-w-2xl mt-8 px-4">
        <div className="relative aspect-w-16 aspect-h-9 w-full">
          <iframe
            className="w-full h-50 md:h-80 lg:h-70 rounded-lg"
            src="https://www.youtube.com/embed/3Iy9YeY5kmw?autoplay=1&loop=10&playlist=3Iy9YeY5kmw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div> */}
    </section>
  );
}
