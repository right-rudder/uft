import {
  COMPANY_NAME,
  COMPANY_NICKNAME,
  COURSES,
  KEYWORDS,
} from "../consts";

const sportPilot = {
  data: {
    //SEO Header Stuff
    pageTitle: `Sport Pilot | ${COMPANY_NAME}`,
    pageDescription:
      `Start your aviation journey with a discovery flight at ${COMPANY_NAME}. Contact us to schedule your flight today!`,
    pageKeywords:
      `${KEYWORDS} ,discovery flight, discovery flight training, discovery flight school, aviation academy, ${COMPANY_NAME}, flight training programs, aviation goals`,

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/pilot-programs-index-cover.jpg",
      imageAlt: `${COMPANY_NAME} (${COMPANY_NICKNAME}) sport plane on runway`,
      headerH1: `${COURSES[0][6].title} <br class="hidden lg:block" ><span class="text-accent-200">Course</span>`,
      paragraph:
        `The Sport Pilot Course at Universal Flight Training is perfect for those wanting to get into aviation quickly and affordably. Designed for aspiring pilots interested in flying Light Sport Aircraft (LSA), this certification offers an expedited path to pilothood. With fewer requirements compared to the Private Pilot Certificate, the Sport Pilot license is ideal for those eager to start flying sooner, with reduced training costs and time commitments. Earning this certification allows you to pilot some of the most versatile, enjoyable aircraft in the sky, while enjoying the freedom and excitement of aviation.`,
      buttons: [
        {
          name: "Enroll Today",
          link: "/marketing-system",
          primary: false,
        },
        {
          name: "How To Guide",
          link: "/schedule-call",
          primary: false,
        },
      ],
    },

    pageSummary: {
      title: `${COURSES[0][6].title}<br>Certification`,
      paragraphs: [
        "The Sport Pilot Certification offers a streamlined process to begin flying as a certified pilot. This certification focuses on Light Sport Aircraft, allowing you to operate these unique and nimble planes with fewer hours and lower expenses. It’s a fantastic way to experience the thrill of aviation, giving you the privilege to fly without the extensive time and financial commitments associated with higher-level licenses.",
        "The Sport Pilot Certificate provides a valuable entry point into aviation. Below is a step-by-step guide to achieving your Sport Pilot Certification with Universal Flight Training.",
      ],
    },

    roadmap: {
      upperHeading: "Roadmap",
      heading: `${COURSES[0][6].title}`,
      descriptions: [
        "Your aviation dreams are our priority. Whether you’re aiming for a professional career, building flight hours, or exploring for fun, we offer the ideal path to reach your goals.",
      ],
      steps: [
        {
          title: "Begin with Ground Training in Essential Aviation Knowledge",
          paragraphs: [
            "Your sport pilot training journey starts with ground instruction, essential for mastering the basics of aviation. At Universal Flight Training, we offer 10 hours of ground instruction covering key topics such as regulations, aerodynamics, and flight safety. Our experienced instructors make learning practical and accessible, preparing you for the FAA written knowledge exam.",
            "These ground training sessions build foundational knowledge for safe, enjoyable flight operations and ensure you’re confident in understanding core aviation principles.",
          ],
          imagePath: "/src/assets/ground-school-training.jpg",
          imageAlt: "Universal Flight school students attending ground school",
        },
        {
          title: "Complete Flight Training with Hands-On Experience",
          paragraphs: [
            "Following ground instruction, you’ll transition to flight training, where the real adventure begins. Universal Flight Training offers 20 hours of flight time dedicated to developing your piloting skills in Light Sport Aircraft. Our certified instructors will guide you through essential maneuvers, takeoffs, landings, and flight operations unique to LSA.",
            "This flight training sharpens your control and situational awareness, giving you the hands-on experience necessary to pilot LSAs confidently and safely.",
          ],
          imagePath: "/src/assets/Flight-Simulation-Training.webp",
          imageAlt: "Picture of a pilot instructing a student on a simulator, sourced from learntofly.edu.au",
        },
        {
          title: "Pass the FAA Sport Pilot Written Knowledge Exam",
          paragraphs: [
            "To certify your understanding of sport pilot regulations and operations, you’ll need to pass the FAA Sport Pilot written exam. Universal Flight Training supports you with comprehensive exam preparation resources, including practice tests and one-on-one review sessions to clarify any questions.",
            "With our support, you’ll approach the exam with confidence, fully prepared to demonstrate your knowledge in areas like regulations, basic aerodynamics, and flight safety.",
          ],
          imagePath: "/src/assets/avery-evans-7rRH23jkIwo-unsplash.jpg",
          imageAlt: "Picture of a person studying for a test, sourced from unsplash, piture by Avery Evans",
        },
        {
          title: "Complete the Sport Pilot Checkride",
          paragraphs: [
            "The final step in your Sport Pilot Certification journey is the checkride, which includes both a practical and oral exam. Universal Flight Training prepares you with mock checkrides, skill-building sessions, and focused reviews to help you succeed. The checkride assesses your ability to perform sport pilot maneuvers and your knowledge of relevant regulations and safety procedures.",
            "Passing the checkride grants you the Sport Pilot Certificate, qualifying you to enjoy the skies in Light Sport Aircraft.",
          ],
          imagePath: "/src/assets/pilot-programs-index-cover.jpg",
          imageAlt: `${COMPANY_NAME} (${COMPANY_NICKNAME}) sport plane on runway`,
        },
      ],
      finalParagraph:
        "Achieving your Sport Pilot Certificate with Universal Flight Training is an exciting accomplishment that lets you explore the world of aviation more affordably and efficiently. With the skills and experience gained here, you’ll be ready to embrace the freedom and fun of piloting Light Sport Aircraft in Tampa Bay and beyond.",
      finalButton: {
        name: "Enroll Now",
        link: "/enroll-now",
        primary: true,
      },
    },
  },
};
export default sportPilot;