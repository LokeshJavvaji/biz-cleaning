import DetailCard from "../DetailCard/DetailCard";

export default function Details() {
  const details = [
    {
      imageSrc: "/div1.jpg",
      title: "Sparkling Clean Homes",
      description: "Discover how our professional cleaning services can transform your home. From one-time deep cleans to regular maintenance, we provide tailored solutions to meet your unique needs.",
      date: "1/1/2024",
      readTime: "1 min",
      subTitle: "Experience the Power of Clean",
    },
    {
      imageSrc: "/com.jpg",
      title: "Commercial Cleaning Solutions",
      description: "Learn how our comprehensive cleaning services can help your business thrive. From office spaces to industrial facilities, we provide customized solutions to meet your unique needs.",
      date: "1/1/2024",
      readTime: "1 min",
      subTitle: "A Cleaner Workspace, A Healthier Business",
    },
    {
      imageSrc: "/team.jpg",
      title: "Why Choose Biz Cleaning?",
      description: "we are committed to delivering high-quality cleaning services that exceed our clients' expectations. With our expertise and dedication to customer satisfaction, we have become the trusted cleaning partner.",
      date: "1/1/2024",
      readTime: "1 min",
      subTitle: "Experience the Biz Cleaning Difference",
    },
  ];

  return (
    <div className="flex flex-col gap-15 p-4 w-full container mx-auto">
      <p className="mt-4 text-4xl font-bold text-center" style={{ color: 'red' }}>BIZ CLEANING SERVICES LTD</p>
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 justify-center">
        {details.map((cardData, index) => (
          <div key={index}>
            <DetailCard data={cardData} />
          </div>
        ))}
      </div>
    </div>
  );

}
