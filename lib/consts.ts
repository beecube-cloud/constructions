import { FAQItem, HeroButton, ParallaxImage, TeamMember } from "./types";

export const parallaxImages: ParallaxImage[] = [
    {
      src: '/assets/hero/image1.svg',
      alt: 'Construction workers',
      position: 'top-left',
      width: 'w-72',
      height: 'h-80',
      speed: 0.15,
    },
    {
      src: '/assets/hero/image2.svg',
      alt: 'Business meeting',
      position: 'top-right',
      width: 'w-80',
      height: 'h-64',
      speed: 0.25,
    },
    {
      src: '/assets/hero/image3.svg',
      alt: 'Office workspace',
      position: 'bottom-left',
      width: 'w-1/3',
      height: 'h-72',
      speed: 0.2,
    },
    {
      src: '/assets/hero/image4.svg',
      alt: 'Engineering work',
      position: 'bottom-right',
      width: 'w-80',
      height: 'h-96',
      speed: 0.3,
    },
  ];
  
  export const mainButtons: HeroButton[] = [
    {
      text: 'Explore Divisions',
      href: '/divisions',
      variant: 'primary',
    },
    {
      text: 'Get in touch',
      href: '/contact',
      variant: 'secondary',
    },
  ];

  export const divisionButtons: HeroButton[] = [
    {
      text: 'Explore Projects',
      href: '/projects',
      variant: 'primary',
    },
    {
      text: 'Get in touch',
      href: '/contact',
      variant: 'secondary',
    },
  ];

  export const teamMembers: TeamMember[] = [
    {
      id: 'Dr-Joshua',
      name: 'Dr Joshua Olorunkiya (PhD.)',
      role: 'CEO',
      image: '/assets/teams/drjoshua.webp',
      bio: 'Expert in sustainable development with 10+ years of experience in green energy solutions.',
      email: 'jenny.wilson@esthoj.com',
      linkedin: 'https://linkedin.com/in/jennywilson',
    },
  ];

  export const projectsList = [
    {
      slug: "ethanol-factory-ologbo",
      title: "Ethanol Factory Ologbo, Edo State",
      date: "13th April, 2025",
      description: 'A multi-level industrial processing plant featuring heavy-duty structural steel, integrated piping systems, and engineered platforms designed for safe and efficient industrial operations.',
      images: [
         "/assets/projects/ethanolFactory/image1.webp",
         "/assets/projects/ethanolFactory/image2.webp",
         "/assets/projects/ethanolFactory/image3.webp",
         "/assets/projects/ethanolFactory/image4.webp",
         "/assets/projects/ethanolFactory/image5.webp",
         "/assets/projects/ethanolFactory/image6.webp",
         "/assets/projects/ethanolFactory/image7.webp",
        ]
    },
    {
      slug: 'ph-mansion',
      title: "Port Harcourt Mansion",
      date: "13th April, 2025",
      description: 'A grand luxury residence featuring neoclassical architectural design, highlighted by tall Corinthian columns, a marble-finished fountain court, and refined exterior detailing that reflects elegance and craftsmanship.',
      images: [
        "/assets/projects/phMansion/image1.webp",
        "/assets/projects/phMansion/image2.webp",
        "/assets/projects/phMansion/image3.webp",
        "/assets/projects/phMansion/image4.webp",
        "/assets/projects/phMansion/image5.webp",
        "/assets/projects/phMansion/image6.webp",
      ],
    },
    {
      slug: 'renewed-hope-projects',
      title: "Renewed Hope Project Abuja",
      date: "13th April, 2025",
      description: 'A residential estate featuring a mix of 2-bedroom and 3-bedroom units, designed to provide comfortable and functional living spaces for families and individuals.',
      images: [
        "/assets/projects/renewedHope/image1.webp",
        "/assets/projects/renewedHope/image2.webp",
        "/assets/projects/renewedHope/image3.webp",
      ],
    },
    {
      slug: 'hotr',
      title: "House on the Rock",
      date: "13th April, 2025",
      description: '',
      images: [
        "/assets/projects/hotr/image1.webp",
        "/assets/projects/hotr/image2.webp",
        "/assets/projects/hotr/image3.webp",
        "/assets/projects/hotr/image4.webp",
      ],
    },
    // Add more projects for the full projects page
    {
      slug: 'enclave-estate-asokoro',
      title: "Enclave Estate Asokoro, Abuja",
      date: "10th March, 2025",
      description: 'A residential estate featuring a mix of 2-bedroom and 3-bedroom units, designed to provide comfortable and functional living spaces for families and individuals.',
      images: [
        "/assets/projects/enclave/image1.webp",
        "/assets/projects/enclave/image2.webp",
        "/assets/projects/enclave/image3.webp",
        "/assets/projects/enclave/image4.webp",
        "/assets/projects/enclave/image5.webp",
        "/assets/projects/enclave/image6.webp",
        "/assets/projects/enclave/image7.webp",
        "/assets/projects/enclave/image8.webp",
        "/assets/projects/enclave/image9.webp",
        "/assets/projects/enclave/image10.webp",
        "/assets/projects/enclave/image11.webp",
        "/assets/projects/enclave/image12.webp",
        "/assets/projects/enclave/image13.webp",
        "/assets/projects/enclave/image14.webp",
        "/assets/projects/enclave/image15.webp",
      ],
    },
    {
      slug: 'bua',
      title: "BUA Project",
      date: "25th February, 2025",
      description: 'A residential estate featuring a mix of 2-bedroom and 3-bedroom units, designed to provide comfortable and functional living spaces for families and individuals.',
      images: [
        "/assets/projects/bua/image1.webp",
        "/assets/projects/bua/image2.webp",
        "/assets/projects/bua/image3.webp",
        "/assets/projects/bua/image4.webp",
      ],
    },
    {
      slug: 'abia',
      title: "Abia Project",
      date: "25th February, 2025",
      description: 'A residential estate featuring a mix of 2-bedroom and 3-bedroom units, designed to provide comfortable and functional living spaces for families and individuals.',
      images: [
        "/assets/projects/abia1/image1.webp",
        "/assets/projects/abia1/image2.webp",
        "/assets/projects/abia1/image3.webp",
        "/assets/projects/abia1/image4.webp",
        "/assets/projects/abia1/image5.webp",
        "/assets/projects/abia1/image6.webp",
        "/assets/projects/abia1/image7.webp",
        "/assets/projects/abia1/image8.webp",
      ],
    },
    {
      slug: 'bima',
      title: "Bima Project",
      date: "25th February, 2025",
      description: 'A residential estate featuring a mix of 2-bedroom and 3-bedroom units, designed to provide comfortable and functional living spaces for families and individuals.',
      images: [
        "/assets/projects/bima/image1.webp",
        "/assets/projects/bima/image2.webp",
        "/assets/projects/bima/image3.webp",
        "/assets/projects/bima/image4.webp",
        "/assets/projects/bima/image5.webp",
        "/assets/projects/bima/image6.webp",
        "/assets/projects/bima/image7.webp",
        "/assets/projects/bima/image8.webp",
        "/assets/projects/bima/image9.webp",
        "/assets/projects/bima/image10.webp",
        "/assets/projects/bima/image11.webp",
        "/assets/projects/bima/image12.webp",
      ],

    },
  ];



  export const faqsList: FAQItem[] = [
    {
      id: 'bills-of-quantities',
      question: 'What is a Bill of Quantities (BOQ)?',
      answer:
        'A Bill of Quantities is a structured document that itemizes materials, labor, and work sections required for a construction project. It enables accurate pricing by contractors and helps in tender evaluation and cost control.',
    },
    {
      id: 'contract-types',
      question: 'What types of construction contracts do you work with?',
      answer:
        'We work with various contract forms including Lump Sum, Measure & Pay, Design and Build, EPC, and FIDIC-based contracts. The appropriate contract type is selected based on project scope, client objectives, and risk allocation.',
    },
    {
      id: 'consulting-services',
      question: 'What consulting services do you provide in the construction industry?',
      answer:
        'We offer consulting services such as feasibility studies, cost planning, value engineering, contract advisory, claims & dispute resolution, procurement planning, and financial reporting for construction projects.',
    },
    {
      id: 'tendering-support',
      question: 'Do you assist companies with tendering and bid preparation?',
      answer:
        'Yes. We support clients in preparing competitive bids, developing BOQs, conducting rate analysis, reviewing tender documents, and ensuring compliance with client specifications.',
    },
    {
      id: 'site-visits',
      question: 'Do you conduct site inspections and progress valuations?',
      answer:
        'Yes. We perform routine site visits to assess work progress, verify completed activities, prepare interim valuations, and ensure quality and contract compliance.',
    },
  ];
  
  