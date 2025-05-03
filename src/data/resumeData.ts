// Resume data
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'devops' | 'other';
}

export interface ResumeData {
  name: string;
  title: string;
  photo: string;
  about: string;
  location: string;
  email: string;
  phone: string;
  socialLinks: SocialLink[];
  experiences: Experience[];
  skills: Skill[];
  education: {
    institution: string;
    degree: string;
    period: string;
  }[];
}

const resumeData: ResumeData = {
  name: "Jackson Diego dos Santos Ribeiro",
  title: "Senior Frontend Developer",
  photo: "https://avatars.githubusercontent.com/u/122409790?v=4",
  about: "Desenvolvedor front-end apaixonado com mais de 5 anos de experiência na criação de aplicações web responsivas. Sou especialista em criar interfaces de usuário intuitivas com React, TypeScript e frameworks CSS modernos. Meu compromisso é escrever código limpo e sustentável, além de me manter atualizado com as tecnologias emergentes e as melhores práticas.Sou apaixonado por criar aplicações web intuitivas, acessíveis e de alto desempenho que proporcionem experiências excepcionais ao usuário. Minha abordagem combina expertise técnica com um olhar aguçado para design e usabilidade. Quando não estou programando, você pode me encontrar explorando novas tecnologias, contribuindo para projetos de código aberto ou praticando atividades ao ar livre para manter um equilíbrio saudável entre vida pessoal e profissional.",
  location: "Parintins, AM, Brasil",
  email: "jacksondiego2002@gmail.com",
  phone: "(92) 9299267-4576",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jackson-diego-805524263/",
      icon: "Linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/JacksonSants",
      icon: "Github"
    },
    {
      name: "Instagram",
      url: "tps://www.instagram.com/jackson.santos.ribeiro/",
      icon: "Instagram"
    }
  ],
  experiences: [
    {
      company: "TechInnovate Inc.",
      position: "Senior Frontend Developer",
      period: "2021 - Present",
      description: "Lead frontend development for multiple web applications, focusing on performance optimization and accessibility.",
      achievements: [
        "Redesigned the company's flagship product, improving performance by 40%",
        "Implemented CI/CD pipeline reducing deployment time by 50%",
        "Mentored junior developers and introduced code review practices"
      ]
    },
    {
      company: "WebSolutions Ltd.",
      position: "Frontend Developer",
      period: "2018 - 2021",
      description: "Worked on various client projects developing responsive and accessible web applications.",
      achievements: [
        "Developed mobile-first approach, increasing mobile conversions by 25%",
        "Contributed to open-source component library used across multiple projects",
        "Improved site accessibility to meet WCAG 2.1 AA standards"
      ]
    },
    {
      company: "Digital Agency Co.",
      position: "Junior Web Developer",
      period: "2016 - 2018",
      description: "Assisted in developing and maintaining websites for various clients using HTML, CSS, and JavaScript.",
      achievements: [
        "Created interactive elements that increased user engagement by 30%",
        "Built responsive email templates that improved open rates by 15%",
        "Optimized images and assets, reducing load times by 25%"
      ]
    }
  ],
  skills: [
    { name: "React", level: 5, category: "frontend" },
    { name: "TypeScript", level: 5, category: "frontend" },
    { name: "JavaScript", level: 5, category: "frontend" },
    { name: "HTML/CSS", level: 5, category: "frontend" },
    { name: "Tailwind CSS", level: 4, category: "frontend" },
    { name: "Redux", level: 4, category: "frontend" },
    { name: "Next.js", level: 4, category: "frontend" },
    { name: "Node.js", level: 3, category: "backend" },
    { name: "Express", level: 3, category: "backend" },
    { name: "MongoDB", level: 3, category: "backend" },
    { name: "PostgreSQL", level: 2, category: "backend" },
    { name: "Docker", level: 3, category: "devops" },
    { name: "AWS", level: 2, category: "devops" },
    { name: "Git", level: 4, category: "devops" },
    { name: "Figma", level: 3, category: "other" },
    { name: "UX/UI Design", level: 3, category: "other" }
  ],
  education: [
    {
      institution: "University of Technology",
      degree: "B.S. in Computer Science",
      period: "2012 - 2016"
    },
    {
      institution: "Frontend Masters",
      degree: "Advanced React Patterns Certification",
      period: "2019"
    }
  ]
};

export default resumeData;