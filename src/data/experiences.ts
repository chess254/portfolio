export interface Experience {
  id: number;
  title: string;
  company: string;
  type: string;
  duration: string;
  descriptions: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Full Stack Developer, Asst ICT Manager",
    company: "Premier Hospital",
    duration: "October 2024 - November 2025",
    type: "Hybrid",
    descriptions: [
      "Developed and maintained web scraping scripts using PHP (Laravel) and Guzzle to automate data extraction from external health APIs, processing 500+ daily records and improving data accuracy by 35%.",
      "Integrated scraped data into backend systems with TypeScript and PostgreSQL, ensuring high performance and responsiveness for hospital management applications.",
      "Collaborated with cross-functional teams in Agile sprints, troubleshooting issues and optimizing code for quality, reducing application downtime by 25%.",
      "Participated in code reviews and knowledge sharing, maintaining code integrity with Git and best practices.",
    ],
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "Technoprise Global",
    duration: "March 2024 - September 2024",
    type: "Hybrid",
    descriptions: [
      "Built full-stack applications with PHP (Laravel) on the backend and React/TypeScript on the front end, incorporating web scraping tools like Goutte to gather market data from 20+ sources, enhancing analytics features by 40%.",
      "Implemented efficient data processing pipelines for large datasets, using SQL queries to handle over 1 million entries while ensuring data integrity.",
      "Worked with front-end developers to integrate user-facing elements, debugging applications and launching new features that improved user engagement.",
      "Utilized Git for version control and Jira for workflow, contributing to team discussions and code reviews for optimal performance.",
    ],
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Prévoir Solutions Informatiques",
    duration: "December 2022 - March 2024",
    type: "On-site", // Assuming "Cape Town" implies on-site
    descriptions: [
      "Designed and maintained scraping software using PHP (Laravel), JavaScript/TypeScript, and tools like Playwright for automated data extraction from regulatory websites, migrating 15+ legacy datasets and boosting efficiency by 30%.",
      "Developed backend logic with SQL databases (PostgreSQL, Oracle), focusing on performance optimization and troubleshooting complex bugs in data pipelines.",
      "Collaborated on feature design and integration with front-end technologies (HTML5, CSS3), ensuring responsive applications and high-quality code through Git-based reviews.",
      "Applied problem-solving skills to debug and resolve issues in web scraping scripts, reducing error rates by 25% and sharing insights with the team.",
    ],
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "Andela",
    duration: "June 2021 - December 2022",
    type: "Remote", // Assuming no location specified implies remote/hybrid
    descriptions: [
      "Created automation scripts with PHP and JavaScript, including web scraping integrations using Guzzle to collect client data for 20+ projects, increasing operational speed by 30%.",
      "Maintained SQL databases and declarative queries for data processing, working in an Agile environment with Git for version control and code integrity.",
      "Troubleshooting performance issues in backend systems, collaborating with teams to launch features and conduct code reviews for knowledge sharing.",
    ],
  },
  {
    id: 5,
    title: "Software Engineer",
    company: "Safaricom PLC",
    duration: "June 2021 - July 2022",
    type: "On-site", // Assuming a major local corp implies on-site
    descriptions: [
      "Built microservices with PHP (Laravel) and TypeScript, incorporating scraping techniques to extract product data from external sources, converting 15% more leads into business.",
      "Managed large-scale data extractions with SQL (PostgreSQL) and Redis, ensuring efficient processing and integration with AWS services.",
      "Participated in standups, sprints, and debugging sessions, using Git and Jira to maintain code quality and optimize application responsiveness.",
    ],
  },
  {
    id: 6,
    title: "Full Stack Developer",
    company: "Studio 60four",
    duration: "May 2017 - June 2021",
    type: "On-site", // Assuming full-time agency work implies on-site
    descriptions: [
      "Developed APIs and scraping tools using PHP (Laravel/Lumen) and Goutte/Guzzle, gathering data from various online sources for 50+ client applications, achieving 99.9% uptime.",
      "Created SPAs with JavaScript (Vue.js), HTML5, CSS3 (Tailwind), and integrated mobile payments, processing 1,000+ transactions daily and increasing revenue by 25%.",
      "Designed databases with SQL, managed Docker containers, and implemented CI/CD with GitLab, shortening release cycles by 50%.",
      "Troubleshooting and debugging web scraping scripts for legacy systems, collaborating on features and code reviews to ensure best practices.",
    ],
  },
  {
    id: 7,
    title: "Web Developer",
    company: "Studio 60four", // Separated from the above role for distinct entry
    duration: "January 2017 - May 2017",
    type: "On-site",
    descriptions: [
      "Built web applications with PHP, JavaScript, HTML5, and CSS3, including basic scraping scripts for data collection, delivering 5 projects with 20% performance improvements.",
    ],
  },
  {
    id: 8,
    title: "Web Developer",
    company: "Freelance",
    duration: "January 2014 - December 2016",
    type: "Freelance/Remote",
    descriptions: [
      "Handled 15+ contract projects involving PHP development, web scraping with tools like Guzzle, and full lifecycle management, achieving 100% client satisfaction.",
      "Integrated front-end (HTML5, CSS3, JavaScript) with backend logic, focusing on data extraction and SQL database handling for efficient solutions.",
    ],
  },
];
