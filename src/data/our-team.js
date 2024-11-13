const ourTeam = {
  data: {
    //SEO Header Stuff
    pageTitle: "Our Team | Universal Flight Training",
    pageDescription:
      "Our team of experienced pilots and instructors are dedicated to providing the highest quality flight training in Sarasota. Learn more about our team and how they can help you achieve your aviation goals.",
    pageKeywords:
      "flight school, flight training, pilot training, aviation academy, flight instructors, aviation instructors, flight school instructors, aviation school instructors, flight school team, aviation academy team, flight instructors team, aviation instructors team",

    //top header
    header: {
      imagePath: "/src/assets/cessna-in-uft-hangar.jpg",
      imageAlt: "Cessna airplane in the Universal Flight Training hangar",
      headerH1: `Come See</br><span class="bg-gradient-to-br from-accent-500 via-accent-200 to-accent-400 bg-clip-text text-transparent">What Everyone's Talking About</span>`,
      paragraph:
        "Our team of experienced pilots and instructors are dedicated to providing the highest quality flight training in Sarasota. Learn more about our team and how they can help you achieve your aviation goals.",
      buttons: [
        {
          name: "Say Hello",
          link: "/contact",
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
      title: `About Us`,
      paragraphs: [
        "Universal Flight Training (UFT) is dedicated to providing top-tier, personalized flight instruction at Sarasota Bradenton International Airport. With a range of programs from Private Pilot to advanced certifications, we equip students with the skills and confidence needed to thrive in the skies. Our experienced instructors and diverse fleet ensure a high-quality, safe training experience tailored to each individual’s goals.",
        "Beyond training, UFT serves the local aviation community with reliable aircraft maintenance and support services. Whether you’re beginning your aviation journey or seeking advanced skills, UFT is here to guide you every step of the way. Join us and discover a team committed to helping you reach new heights in aviation!",
      ],
    },

    staffGrid: {
      imagePath: "/src/assets/uft-entire-team-picture.jpg",
      imageAlt: "Universal Flight Training crew",    
      upperHeading: "Meet Our Team",
      heading: "About us",
      description:
        `Universal Flight Training (UFT) was founded on a commitment to delivering exceptional, safe, and tailored flight instruction for aspiring and seasoned pilots alike. Located at Sarasota Bradenton International Airport, UFT provides a comprehensive range of flight training programs, from Private Pilot to advanced certifications, each designed to build confidence and competence in the skies. With a diverse fleet and a team of highly experienced Certified Flight Instructors, we ensure that every student receives personalized instruction that aligns with their goals and skill level. At UFT, we go beyond standard training, offering immersive experiences that prepare our students to excel in a dynamic aviation environment.<br>
        Our mission is to inspire and equip the next generation of aviators through accessible, high-quality training in a supportive and professional atmosphere. We are proud to serve the Sarasota region and to be a trusted resource in the aviation community, not only for training but also for aircraft maintenance and support. Whether you’re just beginning your aviation journey or seeking advanced certifications, Universal Flight Training is here to guide you every step of the way, ensuring a rewarding and memorable experience that helps you achieve your dreams in aviation. Join us and take flight with a team that’s dedicated to your success!`,
      members: [],
    },

    adminTeamGrid: {
      imagePath: "/src/assets/uft-admin-team-picture.jpg",
      imageAlt: "Universal Flight Training crew",    
      upperHeading: "Admin Team",
      heading: "The Backbone of Universal Flight Training",
      description:
        "Our administrative team is committed to delivering top-notch support and service at every stage of your aviation journey. With years of industry experience and a dedication to excellence, our staff is here to ensure your experience with Universal Flight Training is seamless and supportive, helping you stay focused on reaching your aviation goals.",
      members: [
        {
          name: `Jose Santos<br><small class="text-white font-normal text-sm">CEO of Universal Flight Training</small>`,
          imagePath: "/src/assets/uft-jose-santos-ceo.jpg",
          imageAlt:
            "Universal Flight Training CEO Jose Santos",
        },
        {
          name: `Gary Nickasch<br><small class="text-white font-normal text-sm">Director of Flight Training and Standards</small>`,
          imagePath: "/src/assets/uft-gary-nickasch-director-of-flight-training-and-standards.jpg",
          imageAlt:
            "Universal Flight Training Director of Flight Training and Standards Gary Nickasch",
        },
        {
          name: `Jacob Kyser<br><small class="text-white font-normal text-sm">Vice President</small>`,
          imagePath: "/src/assets/uft-jacob-kyser-vice-president.jpg",
          imageAlt:
            "Universal Flight Training Vice President Jacob Kyser",
        },
        {
          name: `Carter Kerwin<br><small class="text-white font-normal text-sm">Admin</small>`,
          imagePath: "/src/assets/uft-Carter-Kerwin-Intern.jpg",
          imageAlt:
            "Universal Flight Training Intern Carter Kerwin",
        },
      ],
    },
    flightTeamGrid: {
      imagePath: "/src/assets/uft-flight-team-picture.jpg",
      imageAlt: "Universal Flight Training crew",    
      upperHeading: "Flight Instructors Team",
      heading: "Guiding You to New Heights",
      description:
        "Our team of experienced flight instructors is dedicated to providing top-quality training and mentorship at every step of your aviation journey. With a deep passion for flying and years of expertise, our instructors are here to ensure you receive exceptional guidance and support, helping you stay focused and confident as you work toward achieving your aviation dreams with Universal Flight Training.",
      members: [
        {
          name: `Joe Vasquez<br><small class="text-white font-normal text-sm">Chief Flight Instructor</small>`,
          imagePath: "/src/assets/uft-joe-vazquez-chief-instructor.jpg",
          imageAlt:
            "Universal Flight Training Chief Flight Instructor Joe Vasquez",
        },
        {
          name: `Daniel Gormley<br><small class="text-white font-normal text-sm">Flight Instructor</small>`,
          imagePath: "/src/assets/uft-Daniel-Gormley-instructor.jpg",
          imageAlt:
            "Universal Flight Training Flight Instructor Daniel Gormley",
        },
        {
          name: `Justin Gorrell<br><small class="text-white font-normal text-sm">Flight Instructor</small>`,
          imagePath: "/src/assets/uft-Justin-Gorrell-instructor.jpg",
          imageAlt:
            "Universal Flight Training Flight Instructor Justin Gorrell",
        },
        {
          name: `Matthew Bach<br><small class="text-white font-normal text-sm">Flight Instructor</small>`,
          imagePath: "/src/assets/uft-Matthew-Bach-instructor.jpg",
          imageAlt:
            "Universal Flight Training Flight Instructor Matthew Bach",
        },
        {
          name: `Thomas Donetz<br><small class="text-white font-normal text-sm">Flight Instructor</small>`,
          imagePath: "/src/assets/uft-Thomas-Donetz-instructor.jpg",
          imageAlt:
            "Universal Flight Training Flight Instructor Thomas Donetz",
        },
      ],
    },
    maintenanceTeamGrid: {
      imagePath: "/src/assets/uft-maintenance-team-picture.jpg",
      imageAlt: "Universal Flight Training maintenance crew",
      upperHeading: "Maintenance Team",
      heading: "Keeping You Safe and Ready to Fly",
      description:
        "Our skilled maintenance team is committed to ensuring your aircraft is in top condition for every flight. With decades of experience and a meticulous approach, our technicians provide exceptional service to keep your plane performing reliably and safely. Whether it’s routine maintenance or specialized inspections, our team is here to support you with precision and care, so you can focus on enjoying your time in the skies.",
      members: [
        {
          name: `Paul Hopkins<br><small class="text-white font-normal text-sm">Mechanic</small>`,
          imagePath: "/src/assets/uft-Paul-Hopkins-Mechanic.jpg",
          imageAlt:
            "Universal Flight Training Mechanic Paul Hopkins",
        },
        {
          name: `Frank Ferney<br><small class="text-white font-normal text-sm">Mechanic</small>`,
          imagePath: "/src/assets/uft-Frank-Ferney-Mechanic.jpg",
          imageAlt:
            "Universal Flight Training Mechanic Frank Ferney",
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
  },
};
export default ourTeam;
