const ourFleet = {
  data: {
    //SEO Header Stuff
    pageTitle: "Our Fleet | Universal Flight Training",
    pageDescription:
      "Our fleet of aircraft is designed to provide you with a diverse range of training options, from single-engine aircraft to multi-engine aircraft. Each aircraft is meticulously maintained to ensure your safety and comfort during your training.",
    pageKeywords:
      "aircraft, fleet, training, Cessna 172, Beechcraft Duchess, Redbird Simulator, Universal Flight Training fleet, flight training, pilot training, aviation training",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/uft-multi-engine-plane.jpg",
      imageAlt:
        "Universal Flight Training trains professional pilots in south florida",
      headerH1: `Our</br><span class="text-accent-300">Fleet</span>`,
      paragraph:
        "Our fleet of aircraft is designed to provide you with a diverse range of training options, from single-engine aircraft to multi-engine aircraft. Each aircraft is meticulously maintained to ensure your safety and comfort during your training.",
      buttons: [
        {
          name: "Enroll Now",
          link: "/enroll-now",
          primary: false,
        },
        {
          name: "Book a Discovery Flight",
          link: "/discovery-flight",
          primary: false,
        },
      ],
    },

    pageSummary: {
      title: `Fly With Confidence`,
      paragraphs: [
        "At Universal Flight Training, we take pride in offering a fleet of meticulously maintained aircraft, chosen to provide the best learning experience for students at every level. Our fleet includes two Cessna 172s equipped with advanced Garmin G1000 avionics, a traditional Cessna 172 for foundational training, a PA-28 Archer, and a PA-44 with a glass cockpit. Each aircraft in our fleet combines reliability and cutting-edge technology, allowing students to gain hands-on experience with both analog and digital systems, essential for today’s pilots. Our training planes are IFR-capable and ideal for those aiming to advance their skills in diverse flight conditions.",
        "We understand the importance of accessible, high-quality training, which is why our fleet is available at competitive hourly rates. Whether you’re working toward your Private Pilot License, Instrument Rating, or a more advanced certification, our transparent pricing ensures you receive maximum value. Explore our fleet options and find the right aircraft to support your journey, from basic flight training to specialized certifications.",
      ],
    },

    fleetGrid: {
      upperHeading: "Explore",
      heading: "Our Aircrafts",
      description: `Our fleet of aircrafts is designed to provide you with a diverse range of training options, from single-engine aircraft to multi-engine aircraft. Each aircraft is meticulously maintained to ensure your safety and comfort during your training. Explore our fleet below to learn more about each aircraft and its capabilities.`,
      aircraft: [
        {
          title: "1975 Piper Archer II",
          imagePath: "/src/assets/piper-archer-aircraft.webp",
          imageAlt:
            "Universal Flight Training Piper Archer II parked at the airport",
          description:
            `The Piper Archer II is a single-engine aircraft that is perfect for students who are just beginning their flight training. The Archer II is known for its reliability and ease of use, making it an ideal aircraft for students who are new to flying.<br>Rates:<br>$179/hr wet + $10/hr Fuel Surcharge + $65/hr instructor`,
          link: "/contact",
          linkText: "Fly Now",
        },
        {
          title: "2000 Cessna Skyhawk 172s",
          imagePath: "/src/assets/cessna-skyhawk-172s-aircraft.webp",
          imageAlt:
            "Universal Flight Training Cessna Skyhawk 172s parked at the airport",
          description:
            `The Cessna Skyhawk 172s is a single-engine aircraft that is perfect for students who are just beginning their flight training. The Skyhawk 172s is known for its reliability and ease of use, making it an ideal aircraft for students who are new to flying.<br>Rates:<br>$179/hr wet + $10/hr Fuel Surcharge + $65/hr instructor`,
          link: "/contact",
          linkText: "Fly Now",
        },
        {
          title: "2006 Cessna Skyhawk 172s",
          imagePath: "/src/assets/cessna-skyhawk-172s-aircraft-2006.webp",
          imageAlt: "Universal Flight Training Cessna Skyhawk 172s parked",
          description:
            `The Cessna Skyhawk 172s is a single-engine aircraft that is perfect for students who are just beginning their flight training. The Skyhawk 172s is known for its reliability and ease of use, making it an ideal aircraft for students who are new to flying.<br>Rates:<br>$189/hr wet + $10/hr Fuel Surcharge + $65/hr instructor`,
          link: "/contact",
          linkText: "Fly Now",
        },
        {
          title: "2008 Piper Seminole",
          imagePath: "/src/assets/piper-seminole-aircraft.webp",
          imageAlt: "Universal Flight Training Piper Seminole parked",
          description:
            `The Piper Seminole is a multi-engine aircraft that is perfect for students who are looking to earn their multi-engine rating. The Seminole is known for its reliability and ease of use, making it an ideal aircraft for students who are new to flying multi-engine aircraft.<br>Rates:<br>$410/hr wet + $75/hr instructor`,
          link: "/contact",
          linkText: "Fly Now",
        },
      ],
    },

    bookCTA: {
      upperHeading: "Still looking for more information on pilot training?",
      headerH1: `Get Your <span class="text-accent-300">FREE</span><br> Pilot Training Guide!`,
      paragraph:
        "We have a free booklet which explains everything you need to know for your pilot certificate.",
      buttons: [
        {
          name: "Download Now",
          link: "/book-download",
          primary: true,
        },
      ],
      imagePath: "/src/assets/sun-city-book-mock-up.webp",
      imageAlt: "Right Rudder Marketing team on the runway",
    },

    quizCTA: {
      reverse: true,
      upperHeading: "Take Our Quiz",
      heading: "Do You Have What It Takes To Be A Pilot?",
      descriptions: [
        "Are you fascinated by the world of aviation? Have you dreamed of flying and exploring the skies? Do you often look upward at passing aircraft, wondering if you yourself could be in the cockpit?",
        "Begin your journey in aviation with our brief quiz. Our quiz is designed to look at your aviation related knowledge and aptitude, alongside your unique personality traits and interests, to provide insights into whether a future in aviation aligns with your aspirations.",
      ],
      imagePath: "/src/assets/sun-city-aviation-academy-be-pilot-square.jpg",
      imageAlt:
        "Universal Flight Training student flying a plane over the city of miami",
      quizModal: true,
    },

    flyWithUsCTA: {
      imagePath: "/src/assets/uft-avel-chuklanov-copilot-over-shoulder.jpg",
      imageAlt: "Right Rudder Marketing team on the runway",
      headerH1: `<span class="text-primary-600">Start Your Aviation Journey</br></span>With a Discovery Flight`,
      paragraph:
        "Experience the thrill of flying with a discovery flight at Universal Flight Training. Whether you're exploring a new hobby or dreaming of a professional pilot career, this is your chance to take the controls and see Sarasota and the surrounding Gulf Coast like never before. Schedule your discovery flight today and take the first step toward your aviation journey!",
      buttons: [
        {
          name: "Schedule Today",
          link: "/discovery-flight",
          primary: true,
        },
      ],
    },
  },
};
export default ourFleet;
