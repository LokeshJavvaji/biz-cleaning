export default function Welcome() {
  return (
    <section className="grid md:flex-row items-center justify-center gap-8 p-6 container mx-auto">
      <div className="w-full text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold">
          Introducing Biz Cleaning Services Ltd - Your One-Stop Solution for All Cleaning Needs
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          At BIZ Cleaning, we are passionate about delivering exceptional cleaning experiences tailored to your
          unique needs. With a team of skilled professionals and a commitment to excellence, we provide sparkling
          results that exceed expectations. Our core values of quality, reliability, and customer satisfaction drive
          us to be the best in the industry.
        </p>
        <div className="flex justify-center mt-8">
          <div className="relative w-full md:w-3/4 lg:w-1/2 xl:w-1/2 h-70 md:h-80 lg:h-96">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/2RcVoBWsQKA?autoplay=1&loop=1&playlist=2RcVoBWsQKA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <p className="mt-9 text-xl text-gray-600 text-center">
          With years of experience, we have developed a deep understanding of our client needs. We offer customized
          cleaning solutions, including one-time deep cleaning, regular maintenance, and specialized services. Our
          commitment to quality extends to exceptional customer service, ensuring friendly, professional, and helpful
          interactions with our team.
        </p>
      </div>
    </section>
  );
}
