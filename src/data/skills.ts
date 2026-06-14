export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Design Expertise",
    items: [
      "Website Banner Design",
      "Digital & Print Advertising",
      "Branding & Visual Identity",
      "Social Media Creatives",
      "Photo & Video Editing"
    ]
  },
  {
    category: "Tools & Software",
    items: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Premiere Pro",
      "Canva",
      "Wondershare Filmora"
    ]
  },
  {
    category: "Platforms & Workflow",
    items: [
      "CMS Management",
      "Salesforce Workflow Handling",
      "Client Communication",
      "Quality Control",
      "Microsoft Office (Word, PowerPoint, Excel)"
    ]
  }
];

export const languages: string[] = ["Marathi", "Hindi", "English"];