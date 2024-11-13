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
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Donec id",
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Donec id",
      ],
    },

    fleetGrid: {
      upperHeading: "Explore",
      heading: "Our Aircraft",
      description: `Our fleet of aircraft is designed to provide you with a diverse range of training options, from single-engine aircraft to multi-engine aircraft. Each aircraft is meticulously maintained to ensure your safety and comfort during your training. Explore our fleet below to learn more about each aircraft and its capabilities.`,
      aircraft: [
        {
          title: "1975 Piper Archer II",
          imagePath: "/src/assets/piper-archer-aircraft.webp",
          imageAlt:
            "Universal Flight Training Piper Archer II parked at the airport",
          description:
            "The Piper Archer II is a single-engine aircraft that is perfect for students who are just beginning their flight training. The Archer II is known for its reliability and ease of use, making it an ideal aircraft for students who are new to flying.",
          link: "#",
          linkText: "Details",
        },
        {
          title: "2000 Cessna Skyhawk 172s",
          imagePath: "/src/assets/cessna-skyhawk-172s-aircraft.webp",
          imageAlt:
            "Universal Flight Training Cessna Skyhawk 172s parked at the airport",
          description:
            "The Cessna Skyhawk 172s is a single-engine aircraft that is perfect for students who are just beginning their flight training. The Skyhawk 172s is known for its reliability and ease of use, making it an ideal aircraft for students who are new to flying.",
          link: "#",
          linkText: "Details",
        },
        {
          title: "2006 Cessna Skyhawk 172s",
          imagePath: "/src/assets/cessna-skyhawk-172s-aircraft-2006.webp",
          imageAlt: "Universal Flight Training Cessna Skyhawk 172s parked",
          description:
            "The Cessna Skyhawk 172s is a single-engine aircraft that is perfect for students who are just beginning their flight training. The Skyhawk 172s is known for its reliability and ease of use, making it an ideal aircraft for students who are new to flying.",
          link: "#",
          linkText: "Details",
        },
        {
          title: "2008 Piper Seminole",
          imagePath: "/src/assets/piper-seminole-aircraft.webp",
          imageAlt: "Universal Flight Training Piper Seminole parked",
          description:
            "The Piper Seminole is a multi-engine aircraft that is perfect for students who are looking to earn their multi-engine rating. The Seminole is known for its reliability and ease of use, making it an ideal aircraft for students who are new to flying multi-engine aircraft.",
          link: "#",
          linkText: "Details",
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
      imagePath: "/src/assets/avel-chuklanov-QbTBCUJLqKY-unsplash(1).jpg",
      imageAlt: "Right Rudder Marketing team on the runway",
      headerH1: `<span class="text-primary-600">Start Your Aviation Journey</br></span>With a Discovery Flight`,
      paragraph:
        "Doing a discovery flight is the best way to determine if being a pilot is right for you. Whether you're trying it out for fun or want to fly professionally, doing a discovery flight will allow you to see the Ft. Lauderdale and Hollywood from a new perspective.",
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
