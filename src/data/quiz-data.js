import {
  COMPANY_NAME,
  KEYWORDS,
  EMAIL_ADDRESS,
  PHONE_NUMBER,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  GMAPS
} from "../consts";

const quizPage = {
  data: {
    //SEO Header Stuff
    pageTitle: `Quiz | ${COMPANY_NAME}`,
    pageDescription:
      `${COMPANY_NAME} presents a fun and engaging quiz, 'Do You Have What It Takes to Be a Pilot?' Discover if you have the skills, mindset, and passion to conquer the skies. Perfect for aspiring aviators of all levels!`,
    pageKeywords:
      `pilot quiz, aviation skills test, become a pilot, flight training quiz, aspiring aviator quiz, aviation career test, ${COMPANY_NAME} quiz`,


    header: {
      stars: true,
      imagePath:
        "/src/assets/uft-logo-new-bg-gradient-blue.png",
      imageAlt: `${COMPANY_NAME} logo`,
      headerH1: `<div class="bg-gradient-to-br from-accent-500 via-accent-200 to-accent-400 bg-clip-text text-transparent">Contact</div><div class="bg-gradient-to-br from-accent-500 via-accent-200 to-accent-400 bg-clip-text text-transparent">${COMPANY_NAME}</div>`,
      paragraph:
        `Whether you’re ready to start your flight training, schedule maintenance for your aircraft, or simply have questions about our programs, the team at ${COMPANY_NAME} is here to assist you.`,
      buttons: [
        {
          name: "Enroll Form",
          link: "/enroll-now",
          primary: false,
        },
        {
          name: "Discovery Flight",
          link: "/discovery-flight",
          primary: false,
        },
        {
          name: "Maintenance Form",
          link: "/services/maintenance",
          primary: false,
        },
      ],
    },

    info:{
      form_url: import.meta.env.QUIZ_WEBHOOK_URL,
      redirect_url: "/enroll-confirmation",
      form_h: "Do You Have What It Takes to Be a Pilot?",
      form_p1: "Discover your pilot personality with our fun and insightful quiz! Whether you're drawn to the freedom of soaring through the skies, the precision of mastering advanced techniques, or the thrill of adventurous flights, this quiz will uncover what truly drives your passion for aviation. By answering just a few quick questions, you'll gain a better understanding of the traits that make you a unique aviator and how they align with the exciting world of flight.",
      form_p2: "At Universal Flight Training, we believe every pilot has a distinct journey and skill set. This quiz is designed to not only highlight your strengths but also provide inspiration for the path ahead. Are you an explorer craving open skies, a strategist with a knack for technical precision, a collaborator who thrives on teamwork, or an adventurer seeking excitement? Take the quiz and find out how your personality matches the skies waiting for you!",
      address_1: ADDRESS_LINE_1,
      address_2: ADDRESS_LINE_2,
      gmaps: GMAPS,
      phone_num: PHONE_NUMBER,
      email: EMAIL_ADDRESS,
      // label: "Which maintenance service are you interested in?",
      // options: [
      //   "Oil Change",
      //   "Annual Inspection",
      //   "100 Hour",
      //   "Altimeter",
      //   "Transponder",
      //   "Major Alteration or Repair (Form 337)",
      //   "Airworthiness Directives",
      //   "A/D Compliance",
      //   "Tire Replacement",
      //   "General Inspections",
      //   "Pre-buy Inspections",
      //   "Other (Please specify in Notes)",
      // ],
      // extra_info: [
      //   {
      //     label: "Aircraft Manufacturer",
      //     id: "aircraft-manufacturer",
      //   },
      //   {
      //     label: "Aircraft Type",
      //     id: "aircraft-type",
      //   },
      // ],
      // textArea: "Say hello! Our team will be happy to answer any questions you might have about our programs",
      checkboxText: `I agree to <a href="/terms-of-service" target="_blank" class="font-semibold hover:underline">terms</a> & <a href="/privacy-policy" target="_blank" class="font-semibold hover:underline">conditions</a> provided by the company. By providing my phone number, I agree to receive text messages from the business.`,
    },
  },
};
export default quizPage;
