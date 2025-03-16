'use client'
// components/ServicesSection.js
import Image from 'next/image';
import Link from 'next/link';

const ServicesSection = ({ active = true }: { active?: boolean }) => {
  const services = [
    {
      title: "Residential Cleaning",
      description: "Our team of experts provides top-notch residential cleaning services tailored to your specific needs. From one-time deep cleans to regular maintenance, we ensure your home is sparkling clean and comfortable.",
      images: [
        { image: "/residential/aprt.jpg", alt: "Residential Cleaning" },
        { image: "/residential/carpet.jpg", alt: "Residential Cleaning" },
        { image: "/residential/house2.jpg", alt: "Residential Cleaning" },
      ],
      href: 'residential-cleaning'
    },
    {
      title: "Commercial Cleaning",
      description: "We offer comprehensive commercial cleaning services designed to meet the unique needs of your business. From office spaces to retail stores, our team ensures your workspace is clean, safe, and productive.",
      images: [
        { image: "/commercial/c1.jpg", alt: "Commercial Cleaning" },
        { image: "/commercial/c2.jpg", alt: "Commercial Cleaning" },
        { image: "/commercial/c3.jpg", alt: "Commercial Cleaning" },
      ],
      href: 'commercial-cleaning'
    },
    {
      title: "Industrial Cleaning",
      description: "Our industrial cleaning services are tailored to meet the specific needs of your industry. From factories to warehouses, our team ensures your facility is clean, safe, and compliant with regulations.",
      images: [
        { image: "/ind/ind1.jpg", alt: "Industrial Cleaning" },
        { image: "/ind/ind2.jpg", alt: "Industrial Cleaning" },
        { image: "/ind/ind3.jpg", alt: "Industrial Cleaning" },
      ],
      href: 'industrial-cleaning'
    },
    {
      title: "Specialized Cleaning",
      description: "We offer specialized cleaning services for unique needs such as construction cleanup, move-in/move-out cleaning, and more. Our team is equipped to handle any cleaning challenge.",
      images: [
        { image: "/special/s1.jpg", alt: "Specialized Cleaning" },
        { image: "/special/s2.jpg", alt: "Specialized Cleaning" },
        { image: "/special/s3.jpg", alt: "Specialized Cleaning" },
      ],
      href: 'specialized-cleaning'
    },
    {
      title: "Eco-Friendly Cleaning",
      description: "Our eco-friendly cleaning services use environmentally responsible products and practices to ensure a clean and healthy environment. Our team is committed to sustainability and reducing our carbon footprint.",
      images: [
        { image: "/eco/eco1.jpg", alt: "Eco-Friendly Cleaning" },
        { image: "/eco/eco2.jpg", alt: "Eco-Friendly Cleaning" },
        { image: "/eco/eco3.jpg", alt: "Eco-Friendly Cleaning" },
      ],
      href: 'eco-friendly-cleaning'
    }
  ]

  return (
    <section className="set-image justify-center">
      {active && (
        <div className='container mx-auto'>
          <h1 className="mt-4 text-6xl font-bold">Cleaning Services You Can Trust</h1>
          <p className="mt-4 text-lg text-gray-600">At Biz Cleaning, we pride ourselves on delivering exceptional cleaning services that exceed our clients expectations. Our team is dedicated to providing top-notch cleaning solutions tailored to your specific needs.</p>
        </div>
      )}
      <div className="mx-auto px-4 py-12 pb-0 bg-cover text-black">
        <div className='container mx-auto'>
          <h2 className="text-4xl font-bold mb-10 text-red-500">Our Services</h2>
          {services.map((service, index) => (
            <div className="mb-16" key={index}>
              <h3 className="text-3xl font-bold mb-4">
                {active ? (
                  <Link href={service.href} className='hover:underline'>
                    {service.title}
                  </Link>
                ) : (
                  <span>
                    {service.title}
                  </span>
                )}
              </h3>
              <p className="mb-10 text-xl">
                {service.description}
              </p>
      
              <div className="flex flex-wrap justify-center">
                {service.images.map((image, index) => (
                  <div className="w-full md:w-1/3 xl:w-1/3 p-6" key={index}>
                    <Image src={image.image} alt={image.alt} layout="responsive" width={400} height={300} className="rounded-lg" />
                  </div>
                ))}
              </div>
              {active && (
                <div className="text-center mt-8">
                  <Link href={service.href} className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-md transition duration-300">
                    Learn More
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
