export const promotions = {
  data: {
    //SEO Header Stuff
    pageTitle: "Black Friday Deals | Universal Flight Training",
    pageDescription:
      "Navigate your aviation journey with UFT's Pilot Training Guide. Learn about the steps, certifications, and requirements to become a pilot, from beginner to advanced levels, with our expert instructors by your side.",
    pageKeywords:
      "black friday deals, discovery flight promotion, discovery flight, become a pilot Sarasota, flight school, flight training",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/uft-nicolas-jossi-pilot-flying-plane-sunset.jpg",
      imageAlt: "Universal flight training view of pilot over the shoulder",
      headerH1: `Black Friday Deals`,
      paragraph: `For one week only—lowest prices of the year. Limited spots available.`,
      buttons: [
        {
          name: "Book Your Flight",
          link: "#promotion-form",
        },
      ],
    },

    countDownTimer: {
      title: "Offer lasts until December 5th",
      endDate: new Date("2025-12-05T23:59:59"),
      note: "Prices return to normal after the timer expires.",
      cta: {
        name: "Schedule Now",
        link: "#promotion-form",
      }
    },

    offers: [
      {
        title: "Discovery Flight",
        subTitle: "From <b>$299</b> to just <b>$99</b>",
      },
      {
        title: "Premier Access Discovery Flight",
        subTitle: "<b>30%</b> Off, bringing the <b>$550</b> program down to <b>$385</b>",
      },
    ],

    imgCards: [
      {
        src: "/src/assets/uft-flying-over-pinellas-county-clearwater-florida.jpg",
        alt: "View of the Pinellas County Clearwater from above through an aircraft's window",
      },
      {
        src: "/src/assets/uft-fly-over-siesta-key-beach-in-cessna-172.jpg",
        alt: "View of the Siesta Key Beach from above through an aircraft's window",
      },
      {
        src: "/src/assets/uft-plane-over-islands.jpg",
        alt: "View of islands from above through an aircraft's window",
      },
    ],
  },
};
