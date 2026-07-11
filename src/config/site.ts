export const siteConfig = {
  brand: { name: "ElvaMind", tagline: "Practical AI systems for better business operations.", descriptor: "AI Automation, Agents & Custom Software", domain: "https://elvamind.com" },
  founder: { name: "Arun Jaiswal", title: "Founder & AI Automation Consultant", experience: "9+ years of software engineering experience", bio: "Arun Jaiswal is a software engineer with over nine years of experience building enterprise applications, integrations, and digital solutions. Through ElvaMind, he helps businesses automate repetitive work, connect disconnected systems, and build practical AI-powered solutions that improve efficiency and support growth. His approach combines strong software-engineering practices with modern AI, automation, and cloud technologies to deliver reliable systems that are built for real business use.", photo: "/images/founder.jpg", linkedin: "https://www.linkedin.com/in/arun-jaiswal-5a8705108/" },
  contact: { email: "arunjaiswal139@gmail.com", phone: "+919012955994", whatsappNumber: "+919012955994", location: "India" },
  social: { linkedin: "https://www.linkedin.com/in/arun-jaiswal-5a8705108/", instagram: "YOUR_INSTAGRAM_URL", youtube: "YOUR_YOUTUBE_URL" },
  form: { endpoint: "https://script.google.com/macros/s/AKfycbxX9Qp8n35HRADar9iRTdF5AemEtqLTn5NDnl3J65gee0gTf8KlggUhYnie_V_WzOUKQw/exec" },
  analytics: { gaMeasurementId: "" },
  media: { workflow: "/images/workflow-email-automation.png", telegram: "/images/telegram-output.png.png" },
  navigation: [{label:"Services",href:"#services"},{label:"Solutions",href:"#solutions"},{label:"Work",href:"#work"},{label:"Process",href:"#process"},{label:"About",href:"#about"},{label:"Contact",href:"#contact"}],
  hero: { eyebrow:"AI Automation · AI Agents · System Integrations · Custom Software", title:"AI systems that make your business work smarter.", description:"ElvaMind helps businesses reduce repetitive work, connect disconnected tools, and build reliable AI-powered workflows." },
  problems: [
    {title:"Manual Data Entry",description:"Information is repeatedly copied between emails, spreadsheets, CRMs, and internal systems."},
    {title:"Missed Leads and Follow-ups",description:"Customer enquiries are delayed, forgotten, or assigned to the wrong person."},
    {title:"Disconnected Tools",description:"Email, CRM, messaging apps, and spreadsheets do not work together."},
    {title:"Repetitive Decision-Making",description:"Teams spend hours reading documents, categorising requests, and preparing reports."}
  ],
  services: [
    {icon:"Workflow",title:"AI Workflow Automation",description:"Turn repetitive, multi-step operations into reliable workflows that run automatically.",tags:["n8n","Make","APIs"]},
    {icon:"Bot",title:"AI Agents",description:"Purpose-built agents that understand context, take action, and keep people in control.",tags:["LLMs","RAG","Tools"]},
    {icon:"Cable",title:"System Integrations",description:"Connect the tools your team already uses and keep data moving without manual handoffs.",tags:["CRM","Email","Webhooks"]},
    {icon:"FileSearch",title:"Document Intelligence",description:"Extract, classify, summarise, and route information from documents and messages.",tags:["OCR","Extraction","AI"]},
    {icon:"Code2",title:"Custom Software",description:"Focused internal tools and customer experiences designed around your exact operations.",tags:["Web apps","Portals","Dashboards"]}
  ],
  solutions:["Lead management","Email intelligence","Approval workflows","Recruitment automation","Document processing","Automated reporting"],
  process:[{title:"Discover",description:"Map the process, bottlenecks, and desired outcome."},{title:"Design",description:"Create a practical solution around your existing tools."},{title:"Build",description:"Implement, integrate, test, and train your team."},{title:"Improve",description:"Measure performance and refine as your needs evolve."}],
  reasons:["Practical, not theoretical","Automation plus custom development","Technology-independent","Built for reliability","Fast execution"],
  legal:{ privacyUpdated:"11 July 2026", termsUpdated:"11 July 2026" }
} as const;

export type SiteConfig = typeof siteConfig;
