export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  location?: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Graphic Designer",
    company: "DealerOn",
    duration: "Nov 2025 – Present",
    points: [
      "Design website banners and digital creatives for U.S.-based automotive dealerships",
      "Upload and manage creatives on client websites using CMS platforms",
      "Work on Salesforce for task tracking and workflow management",
      "Collaborate with Customer Success Managers (CSMs) and dealers to understand requirements and deliver customized solutions",
      "Ensure brand consistency across all dealership websites",
      "Optimize designs for web performance and responsiveness",
      "Handle multiple projects while meeting strict deadlines"
    ]
  },
  {
    role: "Senior Graphic Designer",
    company: "Spanrig Technologies",
    duration: "Mar 2023 – Nov 2025",
    points: [
      "Designed social media creatives, banners, brochures, and marketing materials",
      "Created branding assets including flyers, backdrops, and business collaterals",
      "Worked closely with marketing teams to maintain brand consistency",
      "Managed multiple projects and ensured timely delivery",
      "Delivered creative solutions aligned with business goals"
    ]
  },
  {
    role: "Associate Graphic Designer",
    company: "Affinity Express",
    duration: "Jul 2018 – Mar 2023",
    points: [
      "Managed print design projects for leading U.S. newspapers",
      "Led a team of 5–6 designers ensuring quality and timely delivery",
      "Conducted quality checks to reduce errors and improve output",
      "Maintained brand guidelines and client specifications",
      "Resolved client feedback and design escalations efficiently",
      "Analysed error logs to improve overall performance"
    ]
  }
];

export interface EducationItem {
  degree: string;
  institute: string;
  duration: string;
}

export const education: EducationItem[] = [
  {
    degree: "3D Animation & VFX",
    institute: "Arena Animation, Pune",
    duration: "2017 – 2020"
  },
  {
    degree: "Bachelor of Science (Chemistry)",
    institute: "Savitribai Phule Pune University",
    duration: "2014 – 2018"
  }
];