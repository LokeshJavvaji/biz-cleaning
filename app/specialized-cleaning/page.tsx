import { ServicesPage } from "@/components/services/service"

export default function SpecializedCleaning() {
  const data = [
    {
      type: "Specialized Cleaning Services",
      image: '/special/s1.jpg',
      video:'',
      content: [
        {
          title: 'Expert Solutions for Unique Cleaning Challenges',
          description: "Our specialized cleaning services address unique cleaning challenges that require specific expertise, equipment, and techniques, providing targeted solutions for specialized cleaning needs."
        }
      ]
    },
    {
      type: "keyFeatures",
      image: '/special/s2.jpg',
      video:'',
      content: [
        {
          title: "Window Cleaning",
          description: "Residential and commercial window cleaning, high-rise window cleaning, screen and track cleaning, hard water stain removal, and more."
        },
        {
          title: "Gutter Cleaning",
          description: "Gutter debris removal, downspout cleaning, gutter inspection, minor repairs, and gutter guard installation to prevent water damage and maintain property integrity."
        },
        {
          title: "Upholstery Cleaning",
          description: "Professional cleaning for sofas, chairs, and other upholstered items, mattress cleaning, stain removal, fabric protection, and odor removal to restore beauty and extend life."
        },
        {
          title: "Disinfection and Sanitizing",
          description: "COVID-19 disinfection, touch point sanitization, whole-space disinfection, electrostatic spraying, and hospital-grade disinfection using EPA-approved disinfectants to protect health and ensure safety."
        },
      ],
    },
    {
      type: "Why Choose Our Specialized Cleaning Services?",
      image: '/special/s3.jpg',
      video:'',
      content: [
        {
          title: "Professional Results",
          description: "Our specialized cleaning services deliver professional results that exceed DIY cleaning, ensuring your property looks its best."
        },
        {
          title: "Specialized Equipment and Techniques",
          description: "We utilize specialized equipment and techniques to tackle challenging cleaning tasks, providing effective solutions for unique cleaning needs."
        },
        {
          title: "Improved Health and Safety",
          description: "Our disinfection and sanitizing services protect health and ensure safety, providing peace of mind for homeowners and business owners alike."
        },
      ],
    }
  ]

  return (
    <ServicesPage data={data} />
  )
}
