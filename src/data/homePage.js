const homePage = {
  data: {
    //SEO Header Stuff
    pageTitle:
      "Universal Flight Training | Sarasota Flight School for Pilot Training",
    pageDescription:
      "Grow and scale your aviation business. Right Rudder Marketing specializes in aviation marketing services, helping flight schools and aviation companies increase visibility and grow enrollment. We offer tailored digital marketing solutions, including SEO, web design, and lead generation to help you reach more aspiring pilots. With proven aviation marketing strategies, we can help your flight school stand out in the competitive market and boost student enrollment efficiently.",
    pageKeywords:
      "grow flight school, scale flight school, grow and scale flight school, aviation business, aviation training,Right Rudder Marketing, Aviation marketing, Flight school marketing, Aviation digital marketing, SEO for aviation, Digital marketing for flight schools, Aviation marketing agency, Lead generation for aviation companies, Increase flight school enrollment, Aviation advertising services, Content marketing for aviation businesses, Aviation marketing strategies, Aviation SEO services",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/uft-student-solo-over-clearwater-tampa.jpg",
      imageAlt:
        "universal flight training student flying solo over clearwater tampa",
      headerH1: `Are you ready to <br class="hidden lg:block" ><span class="text-accent-200">Become A Pilot</span>?`,
      paragraph:
        `Universal Flight Training is your flight school to<br class="hidden lg:block" >become a pilot in the Sarasota Bradenton Florida area.`,
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


    whyUFT: {
      upperHeading: "You Can Become a Pilot",
      heading: "The UFT EXPERIENCE",
      descriptions: [
        "We are committed to your pilot training success.  We offer a diverse range of programs designed to elevate you to new heights in the world of aviation. Our experienced instructors and state-of-the-art fleet ensure you receive the best training possible.",
        "When you choose to fly at Universal Flight Training, you are choosing to fly with the best of the best.  Come see why everyone in the Sarasota region is checking out UFT.",
      ],
      bullets: [
        {
          title: "LOCAL AVIATION EXPERTISE",
          descriptions: [
            "Our experienced instructors bring years of expertise to flight training in the Sarasota and Bradenton area, ensuring top quality instruction.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "PERSONALIZED FLIGHT TRAINING",
          descriptions: [
            "We offer customized, one-on-one training to help aviation students in Venice, Lakewood Ranch, and surrounding areas achieve their goals.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "DEDICATED CUSTOMER SERVICE",
          descriptions: [
            "Our team is committed to providing outstanding service to aviation enthusiasts throughout the Sarasota and North Port region.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "COMPREHENSIVE FLIGHT LESSONS",
          descriptions: [
            "Our structured training programs offer a well organized learning experience, tailored for aspiring pilots in Palmetto, Osprey, and nearby communities.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
      ],
      imageLegend: `Don Behm<br><small class="text-white font-normal text-sm">Chief Flight Instructor</small>`,
      imagePath: "/src/assets/uft-don-behm-chief-flight-instructor.jpg",
      imageAlt:
        "Chief Flight Instructor for Universal Flight Training Don Behm",
    },

    quizCTA: {
      upperHeading: "Take Our Quiz",
      heading: "Is Flight School Right For Me?",
      descriptions: [
        "Many people think that becoming a pilot is out of reach due to concerns about cost, time commitment, and safety. These doubts often come from online research or general uncertainty. We understand these concerns and invite you to connect with a team member at Universal Flight Training to discuss any questions that may have come up during your research.",

        "At Universal Flight Training, you dont need to make a big financial commitment upfront. Your journey can start with an affordable discovery flight, which costs just a few hundred dollars. While pursuing your pilots license does require a significant time investment, its a life-changing achievement with long lasting rewards. Our top priority at UFT is safety, ensuring that your path to becoming a pilot is both safe and fun.",

        `Wondering if a pilot's life is the right fit for you? Take our "Is Flying Right for Me?" quiz to find out. Designed to help you explore your interests, this quiz will guide you in deciding if the skies over Sarasota, Bradenton, or Lakewood Ranch are where you belong. Click below to start your aviation journey and see if flight training in the Sarasota area is your next adventure.`,
      ],
      imageLegend: ``,
      imagePath: "/src/assets/uft-flight-school-right-for-me.jpg",
      imageAlt:
        "Universal flight school student posing in front of plane",
      buttons: [
        {
          name: "Take the Quiz",
          link: "/quiz",
          primary: true,
        },
      ],
    },

    testimonials: {
      upperHeading: "The UFT Family",
      heading: "Our Students Love Us",
      headingText: [
        "At Universal Flight Training, our top priority is to train future pilots safely and effectively, but we also strive to create a fun and comfortable learning environment.",
        "See what our students and visitors have to say about their experiences at UFT!",
      ],
      buttonText: "Leave Us a Review",
      buttonLink:
        "https://www.google.com/search?client=firefox-b-d&q=universal+flight+training+flight+school#",
      reviews: [
        {
          body: "Our son Christian took his very first discovery flight at the age of 13 and it was an absolutely incredible experience!  That smile on his face says it all!  His instructor was so good with him and gave him some great information.  I would recommend this place to any future aviators, we will definitely be back!",
          author: "Cori R.",
        },
        {
          body: "Excellent place to train! Whether it is flying or taking a written knowledge exam, I highly recommend Universal Flight Training. The staff cares about your success. During my IRA knowledge exam, there was an unexpected county-wide internet outage. Jose allowed me to wait at the location until the internet was working again, and did everything in his power to help me take the test the same day it was scheduled. True class all around!",
          author: "Nick S.",
        },
        {
          body: "Great vibes from this place. We had a mechanical over the weekend and were grounded far from home. Jose and team went above and beyond (staying late on a Sunday!) to get us home by Sunday evening. This action speaks to the care and quality at this facility.",
          author: "Seth P.",
        },
        {
          body: "We rented a plane for a trip. Jose was very helpful in making our trip possible. His instructor Aldo was friendly and professional and helped get the checkout done quickly. The airplane was clean and well maintained. I highly recommend UFT for rental or flight instruction.",
          author: "Ryan O.",
        },
        {
          body: "Jose - who runs the flying school - was a fantastic instructor for my introductory lesson - very professional, talking me through everything before, during and after the flight. And it's a great location to learn to fly - spectacular views all around. Definitely recommend!",
          author: "Olliver K.",
        },
        {
          body: "I started attending UFT for my Private Pilots License and have gone all the way through to CFI. The quality of the staff and instructors are great and I’ve thoroughly enjoyed my time here at UFT. I can’t thank the team enough for all of the care and support they put into my training. Great aircraft options as well. Would recommend to anyone looking to learn how to fly or rent an aircraft.",
          author: "Aldo M.",
        },
        {
          body: "Great school with great instructors and well maintained planes. The owner Jose and all his staff are great people. One of the few places that offers a ground school course for both PPL and IFR. Ramp has easy access to taxiways for quick departures so it doesn’t run up the hobbs on you while also allowing you to gain valuable communications experience. KSRQ controllers are also very accommodating and know the tail numbers and work well with you for IFR training. Overall great experience and I highly recommend them.",
          author: "Eric S.",
        },
      ],
    },
  },
};
export default homePage;
