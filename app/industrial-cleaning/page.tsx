import { ServicesPage } from "@/components/services/service"

export default function IndustrialCleaning() {
  const data = [
    {
      type: "Industrial Cleaning Services",
      image: '/ind/ind6.jpg',
      video:'',
      content: [
        {
          title: 'Maintaining Safety, Compliance, and Efficiency',
          description: "Our industrial cleaning services address the unique challenges of manufacturing, warehousing, and construction environments, providing specialized solutions to maintain safety, compliance, and operational efficiency."
        }
      ]
    },
    {
      type: "keyFeatures",
      image: '/ind/ind2.jpg',
      video:'',
      content: [
        {
          title: "Factory Cleaning",
          description: "Production area cleaning, equipment cleaning, high-bay cleaning, waste management, and compliance cleaning to maintain a clean, safe, and efficient manufacturing facility."
        },
        {
          title: "Warehouse Cleaning",
          description: "Floor cleaning, rack and shelf dusting, loading dock cleaning, spill response, and dust control to maintain a clean and organized warehouse environment."
        },
        {
          title: "Construction Cleaning",
          description: "Rough cleaning, final cleaning, post-construction dust removal, window and glass cleaning, and floor finishing to prepare newly constructed or renovated spaces for occupancy."
        },
      ],
    },
    {
      type: "Why Choose Our Industrial Cleaning Services?",
      image: '/ind/ind3.jpg',
      video:'',
      content: [
        {
          title: "Improved Workplace Safety",
          description: "Our industrial cleaning services reduce accident risk and improve workplace safety."
        },
        {
          title: "Compliance with Industry Regulations",
          description: "We ensure compliance with industry regulations and standards, giving you peace of mind."
        },
        {
          title: "Customized Cleaning Plans",
          description: "Our industrial cleaning services are tailored to meet the unique needs of your specific industrial environment."
        },
      ],
    }
  ]

  return (
    <ServicesPage data={data} />
  )
}
