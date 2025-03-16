import { ServicesPage } from "@/components/services/service"

export default function ResidentialCleaning() {
  const data = [
    {
      type: "Residential Cleaning Services",
      image: '/residential/h4.jpg',
      video:'',
      content: [
        {
          title: 'Transforming Your Home with Comprehensive Cleaning',
          description: "Our residential cleaning services are designed to keep your home sparkling clean and comfortable, understanding that your home is your sanctuary."
        }
      ]
    },
    {
      type: "keyFeatures",
      image: '/residential/house3.jpg',
      video:'',
      content: [
        {
          title: "House Cleaning",
          description: "Regular maintenance cleaning, deep cleaning, spring cleaning, and custom cleaning plans to keep your home clean and comfortable."
        },
        {
          title: "Apartment Cleaning",
          description: "Regular maintenance cleaning, move-in/move-out cleaning, deep cleaning, and solutions for all apartment sizes."
        },
        {
          title: "Carpet Cleaning",
          description: "Hot water extraction, stain treatment, upholstery cleaning, and area rug cleaning to extend the life of your carpets and improve indoor air quality."
        },
      ],
    },
    {
      type: "Why Choose Our Residential Cleaning Services?",
      image: '/residential/house.jpg',
      video:'',
      content: [
        {
          title: "Improved Indoor Air Quality",
          description: "Our residential cleaning services improve indoor air quality and create a healthier living environment."
        },
        {
          title: "Convenience and Free Time",
          description: "Enjoy more free time to spend on activities you enjoy, while we take care of the cleaning."
        },
        {
          title: "Customized Cleaning Plans",
          description: "Our residential cleaning services are tailored to match your lifestyle and budget, providing consistent and reliable cleaning results."
        },
      ],
    }
  ]

  return (
    <ServicesPage data={data} />
  )
}
