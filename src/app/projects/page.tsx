 import ProjectsClient from "./ProjectsClient";

 const categoryToFilter: Record<string, string> = {
   Web: "Web",
   "Web Development": "Web",
   Mobile: "Mobile",
   "Mobile Development": "Mobile",
   Game: "Game",
   "Game App Design": "Game",
   Software: "Software",
   "Software Development": "Software",
   AI: "AI",
   "AI & Automation": "AI & Automation",
   Ecommerce: "Ecommerce",
   Design: "Design",
   "UI/UX Design": "Design",
   "AI/ML": "AI/ML",
   "AI/ML Applications": "AI/ML",
   Cloud: "Cloud",
   "AWS & Cloud": "Cloud",
   "Social Media": "Social Media",
   "Ads & Social Media": "Social Media",
   Dashboard: "Dashboard",
 };

 export default function ProjectsPage({
   searchParams,
 }: {
   searchParams?: { category?: string };
 }) {
   const categoryParam = searchParams?.category;
   const initialFilter =
     categoryParam && categoryToFilter[categoryParam]
       ? categoryToFilter[categoryParam]
       : "All";

   return <ProjectsClient key={initialFilter} initialFilter={initialFilter} />;
 }
