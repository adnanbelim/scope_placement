// components/Job/jobData.ts

import { Job } from "@/types/job";

const jobData: Job[] = [
  {
    _id: 1,
    title: "Frontend Developer",
    company: "TechNova Solutions",
    location: "Remote",
    salary: "$70,000 - $90,000",
    type: "Full-time",
    logo: "/images/circle.png",
    description: "Looking for a React developer with 3+ years experience.",
    link: "/jobs/frontend-developer",
  },
  {
    _id: 2,
    title: "Backend Engineer",
    company: "CloudCore",
    location: "Bangalore, India",
    salary: "₹15L – ₹25L",
    type: "Hybrid",
    logo: "/images/circle.png",
    description:
      "We're hiring Go/Node.js backend engineers to build scalable APIs.",
    link: "/jobs/backend-engineer",
  },
  {
    _id: 3,
    title: "UI/UX Designer",
    company: "DesignVerse",
    location: "Mumbai, India",
    salary: "₹8L – ₹12L",
    type: "Onsite",
    logo: "/images/circle.png",
    description:
      "Creative designer needed with strong Figma and user research skills.",
    link: "/jobs/ui-ux-designer",
  },
  {
    _id: 4,
    title: "DevOps Engineer",
    company: "InfraEdge",
    location: "Pune, India",
    salary: "₹12L – ₹18L",
    type: "Hybrid",
    logo: "/images/circle.png",
    description:
      "Seeking DevOps expert with experience in AWS, Docker, and CI/CD pipelines.",
    link: "/jobs/devops-engineer",
  },
  {
    _id: 5,
    title: "Data Analyst",
    company: "DataMinds",
    location: "Remote",
    salary: "$60,000 - $80,000",
    type: "Full-time",
    logo: "/images/circle.png",
    description:
      "Work with large datasets and BI tools to generate business insights.",
    link: "/jobs/data-analyst",
  },
  {
    _id: 6,
    title: "Mobile App Developer",
    company: "Appify",
    location: "Chennai, India",
    salary: "₹10L – ₹16L",
    type: "Onsite",
    logo: "/images/circle.png",
    description:
      "Flutter/React Native developer needed to build cross-platform apps.",
    link: "/jobs/mobile-app-developer",
  },
  {
    _id: 7,
    title: "AI/ML Engineer",
    company: "NeuroNet AI",
    location: "Remote",
    salary: "$100,000 - $130,000",
    type: "Full-time",
    logo: "/images/circle.png",
    description:
      "Looking for an ML engineer with Python, TensorFlow, and NLP experience.",
    link: "/jobs/ai-ml-engineer",
  },
  {
    _id: 8,
    title: "Product Manager",
    company: "BuildStack",
    location: "Gurgaon, India",
    salary: "₹20L – ₹30L",
    type: "Hybrid",
    logo: "/images/circle.png",
    description:
      "Drive product roadmap and manage cross-functional teams to deliver features.",
    link: "/jobs/product-manager",
  },
  {
    _id: 9,
    title: "QA Tester",
    company: "BugHunt Inc.",
    location: "Noida, India",
    salary: "₹6L – ₹10L",
    type: "Onsite",
    logo: "/images/circle.png",
    description:
      "Manual + Automation tester with experience in Selenium and JIRA.",
    link: "/jobs/qa-tester",
  },
  {
    _id: 10,
    title: "Technical Content Writer",
    company: "DocuTech",
    location: "Remote",
    salary: "$40,000 - $55,000",
    type: "Part-time",
    logo: "/images/circle.png",
    description:
      "Create technical documentation and blogs on dev tools, APIs, and frameworks.",
    link: "/jobs/technical-writer",
  },
];

export default jobData;
