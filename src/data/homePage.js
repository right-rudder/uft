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

    programs: {
      upperHeading: "Learn More About",
      heading: "Our Training Programs",
      description:
        "Whether you are pursuing a professional career, building flight hours, or seeking leisurely adventure, we have the perfect program for you, no matter what your experience level is.",
      cards: [
        {
          title: "Professional Pilot Course",
          imagePath: "/src/assets/uft-professional-pilot-course.webp",
          imageAlt:
            "UFT student and Instructor taking off",
          description:
            "Comprehensive program covering private, instrument, commercial, and multi-engine flight training.",
          link: "/professional-pilot-course",
        },
        {
          title: "Private Pilot",
          imagePath: "/src/assets/uft-private-pilot.webp",
          imageAlt:
            "Photograph of a plane", //Change later - more info
          description:
            "Your passport to the skies! Learn to pilot your dreams with our Private Pilot Course.",
          link: "/private-pilot-training",
        },
        // {
        //   title: "Group Ground School",
        //   imagePath: "/src/assets/sun-city-group-ground-school-bg.webp",
        //   imageAlt:
        //     "sun city aviation group ground school students studying in a classroom",
        //   description:
        //     "Learn the fundamentals of aviation in a group setting and pass your pilot written exam.",
        //   link: "/group-ground-school",
        // },
        {
          title: "Instrument Rating",
          imagePath: "/src/assets/uft-intrument-rating.webp",
          imageAlt:
            "Photograph of assistive equipment", //Change later
          description:
            "Navigate through clouds and the skies with precision through our Instrument Rating course.",
          link: "/instrument-rating",
        },
        {
          title: "Commercial Pilot",
          imagePath: "/src/assets/uft-commercial-pilot-course-picture.webp",
          imageAlt:
            "Photograph of plane's propellers",
          description:
            "Start your pilot career with our Commercial Pilot Course. Your path to the captain's seat is here.",
          link: "/commercial-pilot-training",
        },
        {
          title: "Airline Transport Pilot",
          imagePath: "/src/assets/uft-airline-transport-pilot-course-picture.webp",
          imageAlt:
            "Universal Flight Training airline transport pilot course cover picture",
          description:
            "For many this is their goal. The ATP certificate is a minimum requirement to join the airlines.",
          link: "/airline-transport-pilot-atp",
        },
        {
          title: "Multi-Engine Rating",
          imagePath:
            "/src/assets/uft-multi-engine-rating-course-picture.webp",
          imageAlt:
            "Universal Flight Training Multi-Engine Rating course cover picture",
          description:
            "Master the art of multi engine flying and unlock new horizons in your aviation career.",
          link: "/multi-engine-rating",
        },
        {
          title: "Certified Flight Instructor",
          imagePath: "/src/assets/uft-certified-flight-instructor-course-picture.webp",
          imageAlt:
            "Universal Flight Training Certified Flight Instructor course cover picture",
          description:
            "Become a trusted guide in the world of aviation. Become a CFI and teach others to fly.",
          link: "/certified-flight-instructor-cfi",
        },
        {
          title: "Flight Review",
          imagePath: "/src/assets/uft-flight-review-course-picture.webp",
          imageAlt: "Universal Flight Training Flight Review course cover picture - Cessna Skyhawk",
          description:
            "Recurrent training requirement for pilots to ensure they maintain proficiency and safety standards.",
          link: "/flight-review-bfr",
        },
        {
          title: "Instrument Proficiency Check",
          imagePath: "/src/assets/chuttersnap-M2-_GRvWWg0-unsplash.jpg",
          imageAlt: "Universal Flight Training Instrument Proficiency Check course cover picture - day sky and some clouds",
          description:
            "Stay current with our Instrument Proficiency Check (IPC) to ensure your instrument flying skills are up to date.",
          link: "/instrument-proficiency-check-ipc",
        },
        // {
        //   title: "Wingman Course",
        //   imagePath: "/src/assets/sun-city-wingman.jpg",
        //   imageAlt: "sun city aviation pilot's family in the flight simulator",
        //   description:
        //     "Equip your loved ones with essential aviation safety skills through our Wingman Course.",
        //   link: "/wingman-family-member-training",
        // },
        // {
        //   title: "Sea Plane Safari",
        //   imagePath: "/src/assets/sun-city-seaplane.jpeg",
        //   imageAlt: "sun city aviation seaplane floating on the water",
        //   description:
        //     "Seaplane flying opens up an extraordinary new world for pilots. Start SES training here.",
        //   link: "/seaplane-pilot-training",
        // },
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
      imageLegend: `Joe Vazquez<br><small class="text-white font-normal text-sm">Chief Flight Instructor</small>`,
      imagePath: "/src/assets/uft-joe-vazquez-chief-instructor.webp",
      imageAlt:
        "Chief Flight Instructor for Universal Flight Training Joe Vazquez",
    },

    quizCTA: {
      upperHeading: "Take Our Quiz",
      heading: "Is Flight School Right For Me?",
      descriptions: [
        "Many people think that becoming a pilot is out of reach due to concerns about cost, time commitment, and safety. These doubts often come from online research or general uncertainty. We understand these concerns and invite you to connect with a team member at Universal Flight Training to discuss any questions that may have come up during your research.",

        "At Universal Flight Training, you dont need to make a big financial commitment upfront. Your journey can start with an affordable discovery flight, which costs just a few hundred dollars. While pursuing your pilots license does require a significant time investment, its a life-changing achievement with long lasting rewards. Our top priority at UFT is safety, ensuring that your path to becoming a pilot is both safe and fun.",

        `Wondering if a pilot's life is the right fit for you? Take our "Is Flying Right for Me?" quiz to find out. Designed to help you explore your interests, this quiz will guide you in deciding if the skies over Sarasota, Bradenton, or Lakewood Ranch are where you belong. Click below to start your aviation journey and see if flight training in the Sarasota area is your next adventure.`,
      ],
      imageLegend: `Luke Poulos<br><small class="text-white font-normal text-sm">Founder & CEO</small>`,
      imagePath: "/src/assets/sun-city-private-pilot-pass-checkride.webp",
      imageAlt:
        "sun city aviation student and flight instructor celebrating after passing a checkride",
      buttons: [
        {
          name: "Take the Quiz",
          link: "/quiz",
          primary: true,
        },
      ],
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

    testimonials: {
      upperHeading: "The UFT Family",
      heading: "Our Students Love Us",
      headingText: [
        "While our main goal is to train future pilots safely and effectively, it’s important to us at SunCity Aviation Academy our students have a fun and comfortable environment to practice in.",
        "Check out what our students and guests have to say about their experiences at SunCity.",
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
          body: "I finished and passed my private pilot license at Sun City and now I'm doing the Instrument rating. The school and staff are great, my instructor Marko is excellent!!!",
          author: "Ivan L.",
        },
        {
          body: "I recently had the pleasure of training with Sun City for my Initial Multi Engine Commercial Rating. It was amazing. I was referred to Sun City from a DPE (FAA Designated Pilot Examiner) after I had a bad experience with a flight school in Melbourne FL. If one of the most well-known DPEs in the South Florida area recommended it (out of many), it carried a lot of weight given this is what they do day in and day out. They know where the best instructors are, the most well-maintained airplanes, and best pass rates for checkrides. The recommendation did not disappoint.",
          author: "Jeff B.",
        },
        {
          body: "I spent almost a full year with this Sun City family and I couldn’t be more grateful. Getting to the finish line for my PPL would not have happened without Georgette and Luke, the owners. They are like a second set of parents to me after this rating. They are by far the most family oriented flight school I have been apart of and if you give them the chance, they will treat you like their family.",
          author: "Joelle D.",
        },
        {
          body: "Anyone who care about having a positive  experience, prompt communication, and quality learning, you will not regret going to Sun City. Georgette and the staff are fantastic. The environment itself is built to enrich your personal understanding of flying. My son had a blast and can’t wait to continue. Thank you so much Georgette.",
          author: "Olgyu C.",
        },
      ],
    },
  },
};
export default homePage;
