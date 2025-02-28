import {
  COMPANY_NAME,
} from "../consts";

const resultD = {
  data: {
    pageTitle: `You’re Interested but Need More Info! | ${COMPANY_NAME}`,
    pageDescription:
      `Not sure where to start? Our flight advisors can help you figure out the best next step for your aviation journey.`,
    pageKeywords:
      `quiz, flight training advice, aviation consultation, pilot career guidance, ${COMPANY_NAME}`,
    header: {
      imagePath: "/src/assets/fleet-aircraft-inside-hangar.jpg",
      imageAlt: `Flight advisor speaking with a student`,
      headerH1: "You’re Interested but Need More Info!",
      paragraph:
        `Not sure where to start? Our flight advisors can help you figure out the best next step for your aviation journey.`,
      buttons: [
        {
          name: "Request a Call",
          link: "/contact",
          primary: true,
        },
        {
          name: "View Our FAQs",
          link: "/faq",
          primary: false,
        },
      ],
    },
  },
};

export default resultD;