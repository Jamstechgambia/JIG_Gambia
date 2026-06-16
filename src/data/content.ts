import { Property, TeamMember, Testimonial, BlogPost, Service, Stat } from '../types';

export const companyInfo = {
  name: "JIG Gambia",
  fullName: "Jasseh Investment Group",
  tagline: "Your Trusted Real Estate Partner in The Gambia",
  motto: "Houses to Homes, Dreams to Reality",
  description: "Welcome to JIG Real Estate, where dreams take shape in meticulously crafted homes. Our commitment to innovative design and quality construction ensures your future is built on a foundation of excellence. Explore extraordinary living with JIG – your gateway to architectural brilliance and timeless comfort.",
  phone: ["(+220) 381-5709", "(+220) 267-6120"],
  email: "Info@jiggambia.com",
  facebook: "https://www.facebook.com/info.jigrealestate",
  instagram: "https://www.instagram.com/jasseh_investment_group_ltd",
  founded: 2019,
};

export const heroContent = {
  title: "Your Trusted Real Estate Partner in The Gambia",
  subtitle: "Discover premium residential land and properties in The Gambia's most sought-after locations. Start your journey to homeownership with JIG Real Estate.",
  primaryCta: "Browse Properties",
  secondaryCta: "Contact Us",
};

export const aboutContent = {
  title: "Welcome to Jasseh Investment Group",
  paragraphs: [
    "Established in 2019, JIG Real Estate stands as a prominent force in the real estate landscape, dedicated to providing exceptional properties in the Gambia real estate market. Committed to offering high-quality homeownership solutions at attainable rates, JIG Real Estate believes in fostering a harmonious work environment for success.",
    "Our full-time team comprises well-trained professionals who continuously strive to deliver top-quality services to our valued clients. Specializing in the Gambia real estate sector, we focus on developments, marketing, and selling residential housing estates in prime locations within the Kombo District.",
    "At JIG Real Estate, our mission is to elevate living standards by providing affordable yet exemplary homes. We take pride in offering valuable real estate advice to our partners and clients, and we are dedicated to providing our employees with exceptional opportunities for personal and professional development.",
  ],
};

export const whyChooseUs = [
  {
    id: "expert-knowledge",
    title: "Expert Knowledge",
    description: "At JIG Real Estate, our team brings a wealth of expert knowledge to guide you through the intricate world of real estate. From market trends to legal intricacies, we leverage our deep understanding of the industry to provide you with insightful advice and ensure informed decision-making.",
    icon: "Star",
  },
  {
    id: "top-quality-service",
    title: "Top-Quality Service",
    description: "Exceptional service is at the heart of JIG's commitment to our clients. Our dedicated professionals go the extra mile to offer a seamless and personalized experience. Whether you are a first-time homebuyer or an experienced investor, expect top-quality service at every step.",
    icon: "Award",
  },
  {
    id: "property-options",
    title: "Property Options",
    description: "Diversity is the cornerstone of our property offerings. At JIG, we understand that every individual has unique preferences and requirements. That's why we curate a wide range of property options to cater to various tastes and needs.",
    icon: "Home",
  },
  {
    id: "trust",
    title: "Trust & Integrity",
    description: "With a focus on long-term client relationships and a commitment to prioritizing our clients' best interests, JIG Real Estate is your trusted partner for navigating the Gambia real estate market.",
    icon: "Shield",
  },
];

export const services: Service[] = [
  {
    id: "land-sales",
    title: "Land Sales",
    description: "Prime residential plots in The Gambia's most desirable locations. Secure your future with affordable land options.",
    icon: "MapPin",
  },
  {
    id: "property-leasing",
    title: "Property Leasing",
    description: "Quality rental properties for residential and commercial purposes. Find your perfect space with flexible leasing options.",
    icon: "Key",
  },
  {
    id: "architectural-design",
    title: "Architectural Design",
    description: "Custom home designs crafted by expert architects. Transform your vision into architectural masterpieces.",
    icon: "PenTool",
  },
  {
    id: "construction",
    title: "Construction",
    description: "Full-service construction from foundation to finishing. Build your dream home with experienced professionals.",
    icon: "Hammer",
  },
  {
    id: "building-materials",
    title: "Building Materials",
    description: "Quality building materials supply for all your construction needs. Reliable sourcing and competitive pricing.",
    icon: "Package",
  },
  {
    id: "consultation",
    title: "Land Consultation",
    description: "Expert advice on land-related issues, surveying, and valuation. Make informed decisions with professional guidance.",
    icon: "MessageCircle",
  },
];

export const properties: Property[] = [
  {
    id: "1",
    title: "Sanyang",
    slug: "sanyang",
    description: "Sanyang is strategically located in the heart of Kombo South, The Gambia. This friendly settlement is ideal for building a community, being close to the police station and community market, and just 50 meters off the highway. Both electricity and water are readily available, ensuring convenience and comfort for residents.",
    price: 600000,
    currency: "GMD",
    location: "Kombo South",
    region: "West Coast Region - WCR",
    size: 400,
    sizeUnit: "m²",
    type: "sale",
    images: [
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    features: ["Electricity Available", "Water Available", "Near Highway", "Police Station Nearby"],
    isFeatured: true,
    coordinates: { lat: 13.267214, lng: -16.761431 },
  },
  {
    id: "2",
    title: "Jambanjelly Phase 3",
    slug: "jambanjelly-phase-3",
    description: "Jambanjelly is located in the Western region of The Gambia. It's a beautiful community with a population of roughly 9,000 people. The area for our project is very convenient for residential purpose and is accessible to several rich communities. It is surrounded by different residential and very near to the main Sanyang Road linking to Kartong and Tanji.",
    price: 300000,
    currency: "GMD",
    location: "Jambanjelly",
    region: "West Coast Region - WCR",
    size: 400,
    sizeUnit: "m²",
    type: "sale",
    images: [
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    features: ["Near Main Road", "Residential Area", "Growing Community"],
    isFeatured: true,
    coordinates: { lat: 13.281142, lng: -16.725757 },
  },
  {
    id: "3",
    title: "Faraba Bantang Estate",
    slug: "faraba-bantang-estate",
    description: "Faraba Bantang Estate, developed by Jasseh Investment Group (JIG), is a burgeoning community nestled at the heart of Kombo East, within the vibrant West Coast Region of The Gambia. Strategically positioned within the local community, Faraba Bantang offers an inviting ambiance characterized by its eco-friendly atmosphere and refreshing river breeze.",
    price: 150000,
    currency: "GMD",
    location: "Kombo East",
    region: "West Coast Region - WCR",
    size: 400,
    sizeUnit: "m²",
    type: "mortgage",
    images: [
      "https://images.pexels.com/photos/322729/pexels-photo-322729.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    features: ["Near University of The Gambia", "River Access", "Eco-Friendly"],
    isFeatured: true,
    coordinates: { lat: 13.251132, lng: -16.524026 },
  },
  {
    id: "4",
    title: "Tanji Phase 2",
    slug: "tanji-phase-2",
    description: "Tanji is strategically located within Tanji just a stone throw away from madiana village. It is at the heart of Kombo south. This location is very captivating as it is a view from the lake. That is why it is called the tanji lake view. Land size: 20x25, Cash price: D350,000, Mortgage: D450,000, Deposit: D100,000.",
    price: 350000,
    currency: "GMD",
    location: "Tanji",
    region: "West Coast Region - WCR",
    size: 450,
    sizeUnit: "m²",
    type: "sale",
    images: [
      "https://images.pexels.com/photos/164339/pexels-photo-164339.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    features: ["Lake View", "Near Madiana Village", "Mortgage Available"],
    isFeatured: true,
    coordinates: { lat: 13.358632, lng: -16.797521 },
  },
];

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Abubacarr Jasseh",
    position: "CEO",
    phone: "+220 267 6120",
    image: "/6028466086249958345-1.jpg",
    recentSales: 0,
  },
  {
    id: "2",
    name: "Momodou Korka Bah",
    position: "General Manager",
    phone: "+220 382 5002",
    image: "/6028466086249958346-1-1.jpg",
    recentSales: 0,
  },
  {
    id: "3",
    name: "Momodou M Sarr",
    position: "Marketing Manager",
    phone: "+220 771 8227",
    image: "/6028466086249958347-1.jpg",
    recentSales: 0,
  },
  {
    id: "4",
    name: "Customer Services",
    position: "Customer Services",
    phone: "+220 000-000",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
    recentSales: 0,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Unknown",
    role: "Customer",
    content: "I couldn't be happier with my experience with JIG Real Estate. Their expert knowledge in the real estate market was evident from the start, providing me with valuable insights that guided my decisions throughout the home-buying process. The top-quality service I received was exceptional—every interaction was marked by professionalism, transparency, and a genuine commitment to my satisfaction. What truly set JIG apart was the diverse range of property options they offered. I found the perfect home that aligned seamlessly with my lifestyle and preferences.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Experience the Authentic Gambian Village Lifestyle",
    slug: "authentic-gambian-village-lifestyle",
    excerpt: "Discover the vibrant essence of Gambian village life with Jasseh Investment Group (JIG), your gateway...",
    category: "Travel",
    date: "10 February 2024",
    image: "https://images.pexels.com/photos/164339/pexels-photo-164339.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "2",
    title: "Elevate Your Lifestyle in The Gambia's Oasis",
    slug: "elevate-your-lifestyle-gambia",
    excerpt: "JIG Unveils the Essence of The Gambia: Your Gateway to Unparalleled Living, Luxury Homes, and Enriching...",
    category: "Travel",
    date: "30 January 2024",
    image: "https://images.pexels.com/photos/322729/pexels-photo-322729.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "3",
    title: "Building a House in Gambia",
    slug: "building-house-in-gambia",
    excerpt: "Many individuals harbor dreams of owning their perfect property, but the search for an ideal home can...",
    category: "Blog",
    date: "29 January 2024",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "4",
    title: "The Benefits of Investing in Land",
    slug: "benefits-of-investing-in-land",
    excerpt: "Investing in real estate has long been considered a wise financial move, and among the various options...",
    category: "Blog",
    date: "20 January 2024",
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "5",
    title: "Discover Your Perfect Home",
    slug: "discover-your-perfect-home",
    excerpt: "Step into a world of real estate excellence with Jassah Investment Group – where your dream...",
    category: "Blog",
    date: "19 January 2024",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const stats: Stat[] = [
  { label: "Properties Sold", value: 150, suffix: "+" },
  { label: "Happy Clients", value: 200, suffix: "+" },
  { label: "Years Experience", value: 5, suffix: "" },
  { label: "Active Listings", value: 50, suffix: "+" },
];

export const locations = [
  { id: "1", name: "Kanifing Municipal Council - KMC", count: 0 },
  { id: "2", name: "West Coast Region - WCR", count: 4 },
  { id: "3", name: "Greater Banjul", count: 0 },
  { id: "4", name: "North Bank Region - NBR", count: 0 },
  { id: "5", name: "Lower River Region - LRR", count: 0 },
  { id: "6", name: "Central River Region - CRR", count: 0 },
  { id: "7", name: "Upper River Region - URR", count: 0 },
  { id: "8", name: "Kombo East", count: 1 },
];

export const categories = [
  { id: "1", name: "Architectural Design", count: 0 },
  { id: "2", name: "Plot of Lands", count: 4 },
  { id: "3", name: "Agriculture", count: 0 },
  { id: "4", name: "Building & Construction", count: 0 },
  { id: "5", name: "Industrial", count: 0 },
  { id: "6", name: "Garage", count: 0 },
];
