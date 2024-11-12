const coursesIndex = {
  data: {
    //SEO Header Stuff
    pageTitle:
      "Training Courses | Sarasota Flight School for Pilot Training",
    pageDescription:
      "Grow and scale your aviation business. Right Rudder Marketing specializes in aviation marketing services, helping flight schools and aviation companies increase visibility and grow enrollment. We offer tailored digital marketing solutions, including SEO, web design, and lead generation to help you reach more aspiring pilots. With proven aviation marketing strategies, we can help your flight school stand out in the competitive market and boost student enrollment efficiently.",
    pageKeywords:
      "pilot training sarasota, flight training near me, pilot license florida, flying license",
  
        //top header
        header: {
          stars: true,
          imagePath: "/src/assets/pilot-programs-index-cover.jpg",
          imageAlt:
            "Photograph of a Universal Flight Training plane on the runway",
          headerH1: `Pilot <br class="hidden lg:block" ><span class="text-accent-200">PROGRAMS</span>`,
          paragraph:
            `Discover how UFT can help you achieve your aviation dreams. We offer a range of programs designed to guide you on your journey to becoming a pilot.`,
          buttons: [
            {
              name: "Enroll Today",
              link: "/enroll-now",
              primary: false,
            },
            {
              name: "How To Guide",
              link: "/pilot-training-guide",
              primary: false,
            },
          ],
        },    
  
   }
};

export default coursesIndex;