import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    GES,
    bIAS,
    trtc,
    f1,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Education",
      icon: web,
    },
    {
      title: "Work",
      icon: mobile,
    },
    {
      title: "Contact",
      icon: backend,
    },
    {
      title: "Gallery",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
   
  ];
  
  const experiences = [
    {
      title: "Goalpara English School",
      company_name: "Class: L.K.G to 7", 
      icon: GES,
      iconBg: "#383E56",
      date: "January 2003 - March 2012",
      points: [
        "GOALPARA ENGLISH SCHOOL was established in 1991 and it is managed by the Pvt. Unaided.",
        "It is located in BALIJANA block of GOALPARA district of Assam. The school consists of Grades from 1 to 10. ",
        "Address: Goalpara,Bhalukdubi(Assam)",
      ],
    },
    {
      title: "Miles Bronson Residential School",
      company_name: "Class:8 to 10 ",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "March 2012 - Feb 2014",
      points: [
        "It's is a residential School.",
        "Miles Bronson Residential School is an exclusive co-ed boarding school for 500 students in Assam, India. MBRS follows the Global Education Model of Schooling with its four elements Universal Values, Excellence in All Things, Global Understanding and Service to Community.",
        "The motto of the school is “Excellence Through Education” ",
        "Address:SOS Rd, Borjhar, Guwahati, Assam 781015 , India "
      ],
    },
    {
      title: "Maa Bharti Sr. Sec School",
      company_name: "Class:11-12",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jun 2014 - March 2016",
      points: [
        "Maa Bharti Sr. Sec. School is a lively campus in the heart of Kota city well known as Education Hub of India. It is located in Swami Vivekanand Nagar, one of the tranquil area of Kota . ",
        "In 1982 with the esteemed inspiration and blessing's of our revered Mataji Ms. Nand Kunwar Vijay, the school was established with the strength of 175 students. ",
        "Address Swamivivekanand Nagar, Kota, Rajasthan Pin – 324010",
      ],
    },
    {
      title: "Reva University",
      company_name: "BTech ( C&IT )",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jun 2016 - Aug 2020",
      points: [
        "REVA logo depicts ‘Srivatsa’ or “the endless knot”. The Srivatsa has rich significance in Indian Symbolism- in the religions of Hinduism, Buddhism and Jainism. ",
        "REVA University is one of the Best colleges in Bangalore, Karnataka offering many courses specializing in Engineering, Law, Management, and many more",
        "REVA University is a private university in Kattigenahalli, Yelahanka, Bangalore. It was established under the Government of Karnataka Act, 2012. It is managed by the Rukmini Educational Charitable Trust",
        "Address: Rukmini Knowledge Park, Kattigenahalli, SH 104, Srinivasa Nagar, Bengaluru, Karnataka 560064"
      ],
    },
    {
      title: "Bhadhra IAS academy",
      company_name: "Aspirant",
      icon: bIAS,
      iconBg: "#E6DEDD",
      date: "Jun 2021 - March 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },

    {
      title: "MSME , TRTC",
      company_name: "Batch Incharge",
      icon: trtc,
      iconBg: "#E6DEDD",
      date: "March 2022 - Present",
      points: [
        "Bhadra IAS Academy the most trusted UPSC (IAS) & APSC Coaching Institute in Guwahati & Jorhat, Assam, APSC Online Coaching, ACS Coaching, UPSC Coaching",
        "Near maligaon Flyover Bridge,Gauri Bhawan, 3rd Floor, Above Bank Of India, Maligaon, Guwahati, Assam 781011",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Sailo proved me wrong.",
      name: "Ankush",
      designation: "CFO",
      company: "Acme Co",
      image: f1,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Sailo does.",
      name: "Bicky",
      designation: "COO",
      company: "DEF Corp",
      image: f1,
    },
    {
      testimonial:
        "After Sailo optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Chetry",
      designation: "CTO",
      company: "456 Enterprises",
      image: f1,
    },
  ];
  
  const projects = [
    {
      name: "VOICE CONTROLLED SMART SWITCH BOARD",
      description:
     "The system is planned for Home automation (smart switch board) using IOT. The electronic devices such as computers, mobile, tablet can control the home automation features via Internet from anyplace. In this project we are going to implement voice based smart switch board. It will save not only human energy but also electricity (electric power). ESP8266 Wi-Fi module ,5v relay are the hardware used for this projects.",
      tags: [
        {
          name: "ESP-8266",
          color: "blue-text-gradient",
        },
        {
          name: "IFTTT",
          color: "blue-text-gradient",
        },
        {
          name: "iot",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "AI NAME MoMaya",
      description:
      "Chatbot is an Artificial Intelligence-based software developed to interact with humans in their natural languages. These chatbots are generally converse through auditory or textual methods, and they can effortlessly mimic human languages to communicate with human beings in a human-like way. A chatbot is considered one of the best applications of natural languages processing. OpenAI Python Library. ",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "QtPy5 Designer",
          color: "blue-text-gradient",
        },
        {
          name: "OpenAi",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "SHOOTING GAME",
      description:
      "First-person shooter (FPS) is a sub-genre of shooter video games centered on gun and other weapon-based combat in a first-person perspective, with the player experiencing the action through the eyes of an antagonist or protagonist which is armed, and then controlling the player character in a three-dimensional space.[1] The genre shares common traits with other shooter games, and in turn falls under the action game genre. Since the genre's inception, advanced 3D and pseudo-3D graphics have challenged hardware development, and multiplayer gaming has been integral. ",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "blender",
          color: "blue-text-gradient",
        },
        {
          name: "cSharp",
          color: "blue-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };