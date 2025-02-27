export interface ConstructionDataType {
  header: string;
  data: {
    title: string;
    text: string;
    image: string;
  }[];
}

export interface CarouselType {
  title: string;
  text: string;
  image: string;
}

export const constructionData: ConstructionDataType[] = [
  {
    header: "Construction and Civil",
    data: [
      {
        title: "Structural Design & Analysis",
        text: "Overseeing construction timelines, resources, and budgets to deliver successful projects",
        image: "/images/cconstruction-1.webp",
      },
      {
        title: "Project management for construction projects.",
        text: "Overseeing construction timelines, resources, and budgets to deliver successful projects",
        image: "/images/cconstruction-2.webp",
      },
      {
        title: "Surveying & land development consulting.",
        text: "Overseeing construction timelines, resources, and budgets to deliver successful projects",
        image: "/images/cconstruction-3.webp",
      },
      {
        title:
          "Installation &maintenance of infrastructure (bridges, roads, tunnels).",
        text: "Overseeing construction timelines, resources, and budgets to deliver successful projects",
        image: "/images/cconstruction-5.webp",
      },
      {
        title: "Site inspections and compliance with building regulations.",
        text: "Overseeing construction timelines, resources, and budgets to deliver successful projects",
        image: "/images/cconstruction-4.webp",
      },
    ],
  },
  {
    header: "Mechanical",
    data: [
      {
        title: "Design & prototyping of mechanical system",
        text: "The design and prototyping of mechanical systems involve creating innovative solutions.",
        image: "/images/construction-1.webp",
      },
      {
        title: "Maintenance & repair of   machinery",
        text: "Maintenance and repair of machinery are essential practices to ensure the longevity, efficiency, .",
        image: "/images/construction-2.webp",
      },

      {
        title: "Manufacturing process optimization",
        text: "This focuses on improving waste, & enhancing product quality in production systems.",
        image: "/images/construction-3.webp",
      },
      {
        title:
          "HVAC(Heating, Ventilation, and Air Conditioning) design and installation",
        text: "Critical for creating comfortable, energy-efficient, and healthy indoor environments",
        image: "/images/construction-4.webp",
      },
    ],
  },
  {
    header: "Electrical & Electronics ",
    data: [
      {
        title: "Design & Installation of electrical systems for buildings",
        text: "The design and installation of electrical systems for buildings are crucial for ensuring safe.",
        image: "/images/final-1.webp",
      },
      {
        title: "Troubleshooting & Repair of Industrial electronics",
        text: "essential for maintaining the functionality and efficiency of complex machinery ",
        image: "/images/final-2.webp",
      },
    ],
  },
  {
    header: "Environmental & Sustainabilty",
    data: [
      {
        title: "Waste management & recycling systems consulting/operations",
        text: " focus on developing sustainable solutions to handle waste effectively while minimizing environmental impact.",
        image: "/images/final-3.webp",
      },
    ],
  },
];

export const CarouselData: CarouselType[] = [
  {
    title: "Structural design and analysis.",
    text: "Keeping construction sites clean is vital for safety and efficiency.",
    image: "/images/construction-hero-image.webp",
  },
  {
    title: "Structural design and analysis.",
    text: "Keeping construction sites clean is vital for safety and efficiency.",
    image: "/images/construction-hero-image.webp",
  },

  {
    title: "Structural design and analysis.",
    text: "Keeping construction sites clean is vital for safety and efficiency.",
    image: "/images/construction-hero-image.webp",
  },
  {
    title: "Structural design and analysis.",
    text: "Keeping construction sites clean is vital for safety and efficiency.",
    image: "/images/construction-hero-image.webp",
  },
  {
    title: "Structural design and analysis.",
    text: "Keeping construction sites clean is vital for safety and efficiency.",
    image: "/images/construction-hero-image.webp",
  },
  {
    title: "Structural design and analysis.",
    text: "Keeping construction sites clean is vital for safety and efficiency.",
    image: "/images/construction-hero-image.webp",
  },
];

export const statsData = [
  {
    count: 250,
    text: "Projects",
  },
  {
    count: 30,
    text: "Multifamily Projects",
  },
  {
    count: 100,
    text: "Success Rate",
  },
  {
    count: 30,
    text: "Bridges",
  },
];
