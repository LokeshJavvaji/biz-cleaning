import TechnologyCard from "@/components/TechCard/TechCard";

export default function TechTips() {
  const techTips = [
    {
      imageSrc: "/imp/eco1.jpg",
      title: "Benefits of Eco-Friendly Cleaning",
      description: "Discover the advantages of using eco-friendly cleaning solutions for your home or office.",
      date: "March 15, 2024",
      readTime: "1 min",
    },
    {
      imageSrc: "/imp/div2.png",
      title: "The Importance of Regular Cleaning",
      description: "Learn why regular cleaning is essential for maintaining a healthy and productive environment.",
      date: "February 20, 2024",
      readTime: "1 min",
    },
  ];


return (

<div className="flex flex-col gap-6 p-4 container mx-auto text-center">
  <p className="mt-4 text-4xl font-bold" style={{ color: 'red' }}>IMPORTANCE OF CLEANING</p>
  <div className="flex flex-col lg:grid lg:grid-cols-2 gap-7 justify-center">
    {techTips.map((cardData, index) => (
      <TechnologyCard key={index} data={cardData} />
    ))}
  </div>
  <ul className="text-xl list-inside">
    <li>• Prevents the Spread of Illnesses: Regular cleaning helps eliminate germs, bacteria, and viruses that can cause illnesses, keeping you and your loved ones healthy.</li>
    <li>• Maintains a Safe Environment: Cleaning removes hazards such as tripping hazards, slippery surfaces, and allergens, reducing the risk of accidents and injuries.</li>
    <li>• Boosts Mental Health and Productivity: A clean and organized space can improve focus, concentration, and mental well-being, leading to increased productivity and a better quality of life.</li>
    <li>• Protects Property and Belongings: Regular cleaning helps preserve the condition and longevity of your property, furniture, and belongings, saving you money in the long run.</li>
    <li>• Promotes a Positive Impression: A clean and well-maintained space can make a great first impression on visitors, guests, and clients, reflecting positively on you and your business.</li>
  </ul>
</div>

);
}
