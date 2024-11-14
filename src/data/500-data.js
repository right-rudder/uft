import {
  COMPANY_NAME,
  SITE_DESCRIPTION,
  KEYWORDS,
  PHONE_NUMBER
} from "../consts";

const data500 = {
  data: {
    //SEO Header Stuff
    pageTitle: `500 | ${COMPANY_NAME}`,
    pageDescription:
      `${SITE_DESCRIPTION}`,
    pageKeywords:
      `${KEYWORDS}`,


    header: {
      imagePath:
        "/src/assets/crashed-plane-error-500.jpg",
      imageAlt: `${COMPANY_NAME} plane taking off`,
      headerH1: `well, this is <div class="bg-gradient-to-br from-accent-500 via-accent-200 to-accent-400 bg-clip-text text-transparent">AWKWARD</div>`,
      paragraph:
        `It appears the form you were trying to send crashed (better here then on the runway right? you're right we shouldn't joke about that, sorry). Please call us on ${PHONE_NUMBER} for your request, also please notify our staff of this error. <br>Now back to landing with you!`,
      buttons: [
        {
          name: "Home Page",
          link: "/",
          primary: false,
        },
        {
          name: "Call Us",
          link: `tel:${PHONE_NUMBER}`,
          primary: false,
        },
      ],
    },
  }
};

export default data500;