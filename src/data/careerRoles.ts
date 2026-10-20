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

const uiUxDesigner = {
  title: "UI/UX Designer",
  department: "Product Design",
  location: "Remote, Nigeria",
  employmentType: "Part-Time / Contract",
  about: [
    "At 6thTouch, we are reinventing how young minds engage with robotics, coding, and digital craft.",
    "As a UI/UX Product Designer, you will directly influence the visual identity and usability of our learning management systems, course interfaces, and student portal experiences.",
    "You’ll work closely with our curriculum creators, engineering leads, and instructors to translate complex educational workflows into clean, accessible, and delightful digital products.",
  ],
  responsibilities: [
    "Architect and maintain multi-device design systems, maintain component libraries, and style tokens in Figma.",
    "Create wireframes, interactive prototypes, and high-fidelity mockups for web and mobile learning platforms.",
    "Ensure all visual outcomes comply with WCAG 2.1 AA contrast standards and accessible touch target specifications.",
    "Prepare comprehensive developer handoff files in Figma Dev Mode with edge-case states (empty, loading, error, success).",
    "Conduct quick usability tests and peer design reviews to iterate on feedback and optimize user completion rates.",
  ],
  requirements: [
    "Proven track record: 2+ years of hands-on design experience building web and mobile interfaces.",
    "Figma expertise: Advanced mastery of Auto Layout, component variants, interactive prototyping, and design system structures.",
    "UX methodologies: Strong background in wireframing, user journey mapping, and information architecture.",
    "Communication & Defensibility: Ability to present and explain design rationale clearly to non-design team members.",
    "Portfolio: A live portfolio or case studies demonstrating real-world problem-solving and visual polish.",
  ],
  niceToHave: [
    "Prior experience designing EdTech platforms, student dashboards, or interactive learning tools.",
    "Basic familiarity with front-end code (HTML, CSS, React, or similar) and design systems.",
    "Experience with AI-assisted design tooling and workflow automation.",
  ],
  whatWeOffer: [
    "Flexible Work Model: Remote-first flexibility with async-friendly communication.",
    "Creative Freedom: Direct ownership over high-impact platform features from concept to launch.",
    "Professional Growth: Access to cutting-edge tools, hardware, and design leadership mentorship.",
  ],
} satisfies Omit<CareerRole, "id">;

export const careerRoles: CareerRole[] = [
  { id: "ui-ux-designer", ...uiUxDesigner },
  { id: "ui-ux-designer-2", ...uiUxDesigner },
];

export function getCareerRole(id: string) {
  return careerRoles.find((role) => role.id === id);
}
