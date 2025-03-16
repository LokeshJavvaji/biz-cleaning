import { ServicesPage } from "@/components/services/service"

export default function EcoFriendlyCleaning() {
  const data = [
    {
      type: "Eco-Friendly Cleaning Services",
      image: '/eco/eco1.jpg',
      video:'',
      content: [
        {
          title: 'Effective Cleaning with Minimal Environmental Impact',
          description: "Our eco-friendly cleaning services provide effective cleaning solutions that minimize environmental impact, using sustainable practices and green products to protect your health and the planet."
        }
      ]
    },
    {
      type: "keyFeatures",
      image: '/eco/eco2.jpg',
      video:'',
      content: [
        {
          title: "Green Cleaning",
          description: "Environmentally responsible cleaning using non-toxic products, microfiber technology, HEPA filtration, water conservation, and indoor air quality focus."
        },
        {
          title: "Sustainable Cleaning",
          description: "Comprehensive cleaning approaches that reduce environmental footprint through waste reduction, energy-efficient practices, carbon footprint reduction, sustainable supply chain, and recyclable materials."
        },
      ],
    },
    {
      type: "Why Choose Our Eco-Friendly Cleaning Services?",
      image: '/eco/eco3.jpg',
      video:'',
      content: [
        {
          title: "Healthier Indoor Environment",
          description: "Our eco-friendly cleaning services create a healthier indoor environment with fewer harsh chemicals."
        },
        {
          title: "Reduced Environmental Impact",
          description: "We reduce environmental impact through sustainable practices, lowering your carbon footprint and supporting environmental responsibility."
        },
        {
          title: "Safer Cleaning Solutions",
          description: "Our eco-friendly cleaning solutions are safer for homes with children and pets, providing peace of mind for health-conscious clients."
        },
      ],
    }
  ]

  return (
    <ServicesPage data={data} />
  )
}
