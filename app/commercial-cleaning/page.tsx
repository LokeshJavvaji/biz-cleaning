import { ServicesPage } from "@/components/services/service"

export default function CommercialCleaning() {
  const data = [
    {
      type: "Commercial Cleaning Services",
      image: '/commercial/c6.jpg',
      video:'',
      content: [
        {
          title: 'Maintain a Professional Environment',
          description: "Our comprehensive commercial cleaning services ensure your workspace remains clean, organized, and sanitized, enhancing productivity and making a positive impression on clients."
        }
      ]
    },
    {
      type: "keyFeatures",
      image: '/commercial/c2.jpg',
      video:'',
      content: [
        {
          title: "Office Cleaning",
          description: "Daily maintenance, nightly cleaning, sanitization services, restroom cleaning, break room cleaning, and more."
        },
        {
          title: "Retail Cleaning",
          description: "Storefront cleaning, display cleaning, floor care, fitting room maintenance, after-hours cleaning, and more."
        },
        {
          title: "Restaurant Cleaning",
          description: "Kitchen deep cleaning, dining area maintenance, restroom sanitation, bar area cleaning, health code compliance, and more."
        },
      ],
    },
    {
      type: "Why Choose Our Commercial Cleaning Services?",
      image: '/commercial/c3.jpg',
      video:'',
      content: [
        {
          title: "Enhanced Professional Image",
          description: "A clean workspace enhances your professional image and creates a positive impression on clients."
        },
        {
          title: "Healthier Work Environment",
          description: "Our commercial cleaning services create a healthier work environment, reducing sick days and improving productivity."
        },
        {
          title: "Customized Cleaning Schedules",
          description: "We offer customized cleaning schedules to fit your business hours, ensuring minimal disruption to your operations."
        },
      ],
    }
  ]

  return (
    <ServicesPage data={data} />
  )
}
