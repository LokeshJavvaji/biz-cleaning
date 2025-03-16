
export default function Welcome() {
    return (
<section className="grid md:flex-row items-center justify-center gap-8 p-6 container mx-auto">
  <div className="w-full text-center md:text-left">
    <h1 className="text-3xl md:text-4xl font-bold">Introducing Biz Cleaning Services Ltd - Your One-Stop Solution for All Cleaning Needs</h1>
    <p className="mt-9 text-xl text-black-900"> 
      At BIZ Cleaning, we are passionate about delivering exceptional cleaning experiences tailored to your unique needs. With a team of skilled professionals and a commitment to excellence, we provide sparkling results that exceed expectations. Our core values of quality, reliability, and customer satisfaction drive us to be the best in the industry.
    </p>
    <br></br>
    <div className="flex justify-center">
      <div className="relative z-10 w-[100%] md:w-[60%] lg:w-[40%] max-w-4xl mt-8 px-4">
        <div className="relative aspect-w-16 aspect-h-9 w-full">
          <iframe
            className="w-138 h-40 md:h-60 lg:h-80 rounded-lg"
            src="https://www.youtube.com/embed/2RcVoBWsQKA?autoplay=1&loop=1&playlist=2RcVoBWsQKA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
    <p className="mt-9 text-xl text-black-900 text-center">
      With years of experience, we have developed a deep understanding of our client needs. We offer customized cleaning solutions, including one-time deep cleaning, regular maintenance, and specialized services. Our commitment to quality extends to exceptional customer service, ensuring friendly, professional, and helpful interactions with our team.
    </p>
  </div>
</section>
    );
}
