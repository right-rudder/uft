const faPlay = `
  <svg class="size-6 text-white" width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
    <path
     fill="currentColor"
     d="M 21.393661,10.062151 4.8943308,0.30786072 c -1.34057,-0.792156 -3.393612,-0.02344 -3.393612,1.93585898 V 21.747615 c 0,1.757741 1.907735,2.817073 3.393612,1.935858 L 21.393661,13.933869 c 1.471816,-0.867152 1.476503,-3.004565 0,-3.871718"
     style="stroke-width:0.0468731" />
  </svg>
`;

const mdWorkspacePremium = `
  <svg class="size-6 text-white" width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
    <path
     fill="currentColor"
      d="M 9.3485715,13.36 12,11.348571 14.64,13.36 13.634286,10.102857 16.285714,8 H 13.04 L 12,4.7885714 10.96,8 H 7.7142854 l 2.6400006,2.102857 z M 21.142857,9.142857 C 21.142857,4.0914286 17.051429,0 12,0 6.9485711,0 2.8571425,4.0914286 2.8571425,9.142857 c 0,2.32 0.8685714,4.422857 2.2857143,6.034286 V 24 L 12,21.714286 18.857143,24 V 15.177143 A 9.0971429,9.0971429 0 0 0 21.142857,9.142857 M 12,2.2857143 c 3.782857,0 6.857143,3.0742857 6.857143,6.8571427 C 18.857143,12.925714 15.782857,16 12,16 8.2171425,16 5.1428568,12.925714 5.1428568,9.142857 5.1428568,5.36 8.2171425,2.2857143 12,2.2857143"
      style="stroke-width:1.14286" />
  </svg>
`;

const piChartLineUpBold = `
  <svg
    class="size-6 text-white" width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
    <path
      fill="currentColor"
      d="m 24,20.88889 a 1.3333333,1.3333333 0 0 1 -1.33333,1.33333 H 1.33333 A 1.3333333,1.3333333 0 0 1 0,20.88889 V 3.11111 a 1.333335,1.333335 0 0 1 2.66667,0 v 11 L 7.50111,9.27556 a 1.3333333,1.3333333 0 0 1 1.88889,0 L 12,11.88889 16.77778,7.11111 h -1.22222 a 1.3333333,1.3333333 0 0 1 0,-2.66666 H 20 a 1.3333333,1.3333333 0 0 1 1.33333,1.33333 v 4.44444 a 1.3333333,1.3333333 0 0 1 -2.66666,0 V 9 l -5.72334,5.72445 a 1.3333333,1.3333333 0 0 1 -1.88889,0 l -2.61,-2.61334 -5.77777,5.77778 v 1.66667 h 20 A 1.3333333,1.3333333 0 0 1 24,20.88889"
      style="stroke-width:0.111111" />
  </svg>
`;

export const promotions = {
  data: {
    //SEO Header Stuff
    pageTitle: "Holiday Exclusive Offers | Universal Flight Training",
    pageDescription:
      "Book your Discovery Flight at Universal Flight Training today for just $99. Black Friday offers are up until December 5th with $99 Discovery Flights and 30% discount on your Premier Access Discovery Flight. Make your dream of flying come true at Universal Flight Training in Sarasota, FL.",
    pageKeywords:
      "holiday promotions, discovery flight promotion, discovery flight, become a pilot Sarasota, flight school, flight training, flight training Florida",

    //top header
    header: {
      imagePath: "/src/assets/uft-nicolas-jossi-pilot-flying-plane-sunset.jpg",
      imageAlt: "Universal flight training view of pilot over the shoulder",
      headerH1: `Holiday Exclusive Offers`,
      paragraph: `Give the Gift of Flight This Holiday Season.`,
      buttons: [
        /* {
          name: "Book Your Flight",
          link: "#promotion-form",
        }, */
      ],
    },

    /* countDownTimer: {
      title: "Offer lasts until December 5th",
      endDate: new Date("2025-12-05T23:59:59"),
      note: "Prices return to normal after the timer expires.",
      cta: {
        name: "Schedule Now",
        link: "#promotion-form",
      }
    }, */

    offerMenu: {
      title: "Choose the Perfect Holiday Flight Experience",
      description:
        "These three limited-time offers are built to meet every skill level and every dream. From foundational training to high-performance Cirrus thrill rides, each package delivers real flight time, expert guidance, and the kind of gift that becomes a lifelong memory.",
      offers: [
        {
          icon: faPlay,
          title: "Platinum Pilot Starter Package",
          value: "$ 12,995",
          description:
            "The ultimate launchpad for new aviators. Kickstart their aviation journey with a comprehensive, high-value training package designed to build confidence from day one.",
        },
        {
          icon: piChartLineUpBold,
          title: "Holiday “Zero to Solo” Package",
          value: "$ 7,995",
          description:
            "A gift they'll never forget. This holiday-ready bundle takes brand-new aviators from zero experience toward their first solo.",
        },
        {
          icon: mdWorkspacePremium,
          title: `Luxury “Cirrus Experience Weekend”`,
          value: "$ 4,995",
          description:
            "A high-performance aviation weekend designed to wow. Treat the pilot in your life to a premium, concierge-style Cirrus experience, crafted for thrill-seekers and aircraft lovers.",
        },
      ],
    },

    offers: [
      {
        id: "platinum-pilot-starter-package",
        title: "Platinum Pilot Starter Package",
        subTitle: "$ 12,995",
        content: [
          {
            paragraph:
              "The ultimate launchpad for new aviators. This premium, high-value package is built to set beginners up for success from the very first lesson. With a blend of aircraft training, simulator time, and personalized ground instruction, this is the strongest possible foundation for anyone ready to pursue flight training seriously.",
          },
          {
            bulletPoints: {
              title: "Package includes",
              items: [
                "<b>15 hours C172 G1000:</b> Hands-on aircraft training with modern avionics.",
                "<b>10 hours AATD:</b> Simulator training to reinforce skills.",
                "<b>6 private ground sessions:</b> One-on-one instruction for mastery.",
                "<b>Full UFT merch kit:</b> Ready to wear from day one.",
                "<b>Priority booking:</b> Get the best training times during busy months.",
              ],
            },
          },
          {
            callout:
              `<b class="text-xl mb-2 block">Perfect for</b>Serious beginners ready to start strong.`,
          },
        ],
      },
      {
        id: "holiday-zero-to-solo-package",
        title: "Holiday “Zero to Solo” Package",
        subTitle: "$ 7,995",
        content: [
          {
            paragraph:
              "A gift they’ll never forget. Designed for aspiring pilots starting from zero, this bundle provides the right mix of flight time, simulator training, and study support to build fundamental skills and confidence, setting them on a clear path toward their first solo flight.",
          },
          {
            bulletPoints: {
              title: "Package includes",
              items: [
                "<b>10 hours aircraft:</b> Essential hands-on flight time.",
                "<b>5 hours simulator:</b> Structured skill-building sessions.",
                "<b>All written test prep:</b> Full access to study materials.",
              ],
            },
          },
          {
            callout:
              `<b class="text-xl mb-2 block">Perfect for</b>Anyone dreaming of learning to fly.`,
          },
        ],
      },
      {
        id: "luxury-cirrus-experience-weekend",
        title: "Luxury “Cirrus Experience Weekend”",
        subTitle: "$ 4,995",
        content: [
          {
            paragraph:
              "Give the aviation enthusiast in your life the ultimate thrill. This concierge-style, two-day experience pairs luxury with performance, placing them in the cockpit of one of the most advanced general aviation aircraft in the world. With a dedicated instructor and a personalized flight plan, the Cirrus Experience Weekend delivers excitement, refinement, and unforgettable aviation moments.",
          },
          {
            bulletPoints: {
              title: "Two-day intensive includes",
              items: [
                "<b>5 hours SR22:</b> Fly one of the most advanced GA aircraft in the world.",
                "<b>2 hours simulator:</b> Sharpen high-performance skills.",
                "<b>Concierge instructor:</b> Personalized guidance and a bespoke flight plan.",
              ],
            },
          },
          {
            callout:
              `<b class="text-xl mb-2 block">Perfect for</b>Licensed pilots, aviation enthusiasts, and experience collectors.`,
          },
        ],
      },
    ],
  },
};
