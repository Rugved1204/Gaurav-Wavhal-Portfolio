export type MediaType = "image" | "video";

export interface ProjectMedia {
  type: MediaType;
  src: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description?: string;
  media: ProjectMedia[];
}

export const categories: string[] = [
  "All",
  "Website Banner",
  "Billboard Design",
  "Packaging Design",
  "Flyer",
  "Video",
  "Brochure",
  "Social Media Post",
  "Visiting Card",
  "ID Card",
  "YouTube Thumbnail",
  "Book Cover",
  "Standee Design",
  "Logo"
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Project 1 Title",
    category: "Website Banner",
    description: "Short description of the project.",
    media: [
      { type: "image", src: "/projects/project-1/1.jpg" },
      { type: "image", src: "/projects/project-1/2.jpg" },
      { type: "image", src: "/projects/project-1/3.jpg" }
    ]
  },
  {
    id: "project-2",
    title: "Project 2 Title",
    category: "Packaging Design",
    description: "Short description of the project.",
    media: [
      { type: "image", src: "/projects/project-2/1.jpg" },
      { type: "image", src: "/projects/project-2/2.jpg" },
      { type: "image", src: "/projects/project-2/3.jpg" },
      { type: "image", src: "/projects/project-2/4.jpg" },
      { type: "image", src: "/projects/project-2/5.jpg" }
    ]
  }
  // Add remaining 25 projects following same pattern.
  // For videos use: { type: "video", src: "/projects/project-x/clip.mp4" }
];