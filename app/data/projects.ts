export type Project = {
  id: string
  title: string
  description: string
  image: string
  content: string
}

export const projects: Project[]= [
  {
    id: "education",
    title: "Education for All",
    description: "Providing quality education to rural children.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    content: "Full detailed description about education project..."
  },
  {
    id: "healthcare",
    title: "Healthcare Support",
    description: "Free medical camps for underprivileged communities.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    content: "Full detailed description about healthcare project..."
  },
  {
    id: "women-empowerment",
    title: "Women Empowerment",
    description: "Skill development and financial independence programs.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    content: "Full detailed description about women empowerment project..."
  }
]