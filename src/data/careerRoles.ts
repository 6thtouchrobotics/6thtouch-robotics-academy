export type CareerRole = {
  id: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  about: string[];
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  whatWeOffer: string[];
};

export const careerRoles: CareerRole[] = [
  {
    id: "software-developer-full-stack",
    title: "Software Developer (Full Stack)",
    department: "Engineering",
    location: "Remote, Nigeria",
    employmentType: "Part-Time / Contract",
    about: [
      "6thTouch is growing its digital learning experience for students exploring coding, robotics, and STEM. We are looking for a full-stack developer to help build and improve the web applications and tools that support our learners, tutors, and team.",
      "You will contribute across the stack: shaping accessible, responsive interfaces, connecting them to reliable server-side functionality, and helping us turn real learning needs into useful product features. This is a hands-on role for someone who enjoys taking ownership, collaborating with educators, and explaining technical decisions clearly.",
      "You will work closely with our education and operations teams to make our platforms easier to use and to support engaging, practical learning experiences.",
    ],
    responsibilities: [
      "Build, maintain, and improve full-stack web features from initial requirements through release.",
      "Create responsive, accessible user interfaces and connect them to APIs and backend services.",
      "Develop and maintain server-side logic, data models, and integrations for learning and operational tools.",
      "Troubleshoot issues, improve application performance, and write clear, maintainable code.",
      "Collaborate with educators and colleagues to understand user needs and deliver practical solutions.",
      "Document key technical decisions and contribute to testing and code review.",
    ],
    requirements: [
      "Experience building and shipping full-stack web applications, with a portfolio or examples of your work.",
      "Working knowledge of JavaScript or TypeScript and a modern frontend framework such as React or Next.js.",
      "Understanding of backend development, APIs, data storage, and common web application security practices.",
      "Ability to write readable code, investigate problems, and communicate progress clearly.",
      "Interest in education technology and creating useful digital experiences for learners.",
    ],
    niceToHave: [
      "Experience with Next.js, Node.js, or a similar full-stack framework.",
      "Familiarity with relational databases, authentication, deployment, or cloud hosting.",
      "Experience building education, e-commerce, or other user-facing products.",
      "An interest in coding education, robotics, or STEM learning.",
    ],
    whatWeOffer: [
      "The opportunity to build technology that supports hands-on STEM education.",
      "A collaborative team environment where you can work directly with educators and decision-makers.",
      "Room to take ownership, grow your skills, and shape the development of our digital products.",
      "Flexible part-time or contract engagement.",
    ],
  },
  {
    id: "robotics-educator",
    title: "Robotics Educator",
    department: "Education",
    location: "Lagos, Nigeria",
    employmentType: "Part-Time / Contract",
    about: [
      "6thTouch helps young people build confidence and practical skills through coding, robotics, and STEM. We are looking for an enthusiastic Robotics Educator who can make technology approachable and inspire students to learn by building.",
      "In this role, you will guide students through hands-on robotics activities, from understanding basic concepts and components to assembling, programming, testing, and improving their projects. You will adapt your teaching to different ages and experience levels, helping every learner feel supported and curious.",
      "You will also help prepare engaging lessons, care for learning materials, and share useful feedback with our team so we can continually improve our programmes.",
    ],
    responsibilities: [
      "Lead engaging, age-appropriate robotics and coding lessons for students in schools and learning programmes.",
      "Demonstrate how to assemble, program, test, and troubleshoot robotics projects using educational kits and tools.",
      "Encourage students to experiment, solve problems, work together, and learn from mistakes.",
      "Prepare lesson materials, set up equipment, and keep kits and classroom resources organised.",
      "Monitor student participation and progress, and share clear feedback with parents, schools, and the 6thTouch team as appropriate.",
      "Follow safeguarding, classroom safety, and professional conduct guidelines.",
    ],
    requirements: [
      "A genuine interest in robotics, coding, STEM education, and working with children or young people.",
      "Ability to explain technical concepts patiently and clearly to learners with different levels of experience.",
      "Strong communication, classroom management, and problem-solving skills.",
      "Reliability, preparation, and a positive, encouraging approach to teaching.",
      "Relevant teaching, STEM, engineering, or computing experience, or a willingness to demonstrate practical knowledge and learn.",
    ],
    niceToHave: [
      "Experience teaching or facilitating robotics, coding, or other STEM activities.",
      "Familiarity with educational robotics kits, block-based coding, or beginner-friendly programming tools.",
      "Experience creating lesson plans or adapting activities for different age groups.",
      "A background in education, engineering, computer science, or a related field.",
    ],
    whatWeOffer: [
      "The chance to help young learners develop practical skills and confidence in STEM.",
      "Access to educational robotics resources and opportunities to grow as an instructor.",
      "Support from a team committed to creative, hands-on learning.",
      "Flexible part-time or contract engagement.",
    ],
  },
];

export function getCareerRole(id: string) {
  return careerRoles.find((role) => role.id === id);
}
