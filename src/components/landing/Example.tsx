import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const mdxContent = `
**Basic Information**

Name: Aayush Upendra Pagare  
Gender: Male  
Pronouns: He/Him  
Location: Vadodara, Gujarat, India  
Occupation: Self-employed, Freelancer, Software Developer, Technical Writer

---

**Professional Introduction**

Aayush is a skilled Full-Stack Developer with experience in Nest.js, React.js, PostgreSQL, Prisma, Snowflake, and DBT.  
He has a strong background in technical writing and has contributed to the developer community through blogs on Medium.  

Key highlights of his career include:  
- Building a Slack bot to automate workflows at Matlabinfotech.  
- Developing AspirantsAI, a platform leveraging Generative AI for UPSC aspirants, where he handled end-to-end development and deployment.  
- Writing and sharing insights through technical blogs.  

Aayush is passionate about remote work and global collaboration, ready to contribute to impactful projects across the globe.

---

**Academic Qualifications**

- **Primary & Secondary Education:** Saint Basil School  
  - **10th Board:** 96%  
  - **12th Board:** 90%  
- **Degree:** B.E. in Computer Science and Engineering  
  - **College:** Babaria Institute of Technology  
  - **University:** Gujarat Technological University  
  - **CGPA:** 9.21/10  

---

**Professional Experience**

**Company:** Matlabinfotech (Jan 2023 - Oct 2024)  
**Role:** Junior Software Developer  
**Industry:** IT Services  

---

**Projects at Matlabinfotech**

1. **Kanmon (Fintech)**  
   - Implemented recurring payments using Orum.io.  
   - Developed "Pay Now" features for Term Loan, Invoice Financing, and LOC.  
   - Automated monthly borrower and platform statements using Puppeteer.  
   - Created and documented REST APIs.  
   - **Skills:** TypeScript, Snowflake, DBT, PostgreSQL, Prisma, Next.js, React.js, Tailwind, Nest.js  

2. **Virtual HR (HR Process Automation)**  
   - Built tools for automating leave and resume parsing using Slack-Bolt and n8n.  
   - **Skills:** Slack API, Mongoose  

---

**Key Projects**

1. **Remote Code Execution Engine**  
   - Designed a system to handle concurrent requests efficiently using Node.js child processes.  
   - Incorporated RabbitMQ for asynchronous task execution and Redis for temporary data storage.  
   - Secured the system using Docker and deployed it on AWS EC2.  
   - **Skills:** Node.js, Express, RabbitMQ, Redis, Docker, AWS EC2  
   - **GitHub:** [Remote Code Execution Engine](https://github.com/aayushpagare21-compcoder/remote-code-execution)  

2. **AspirantsAI**  
   - Developed a Generative AI-powered platform for UPSC Mains aspirants.  
   - Features tools like AffairsQuest (links current affairs to PYQs) and SmartCheck (AI-driven answer evaluation).  
   - **Skills:** Next.js, Prisma, PostgreSQL, LangChain.js, AWS Textract, ShadCN UI  
   - **Live URL:** [AspirantsAI](https://www.aspirantsai.com)  
   - **GitHub:** [AspirantsAI](https://github.com/aayushpagare21-compcoder/aspirants)  

3. **EmbedMe**  
   - A portfolio integration platform.  
   - **GitHub:** [EmbedMe](https://github.com/aayushpagare21-compcoder/embedme)  

---

**Skills**

- **Frontend:** React.js, Next.js, Tailwind, MaterialUI  
- **Backend:** Nest.js, Node.js, Express  
- **Database:** PostgreSQL, Snowflake, Prisma, DBT  
- **Tools:** Docker, RabbitMQ, Redis, AWS Textract, Slack API  
- **Languages:** TypeScript, JavaScript  
- **Testing:** Jest, React Testing Library  

---

**Hobbies and Interests**

- **Music:** Plays the piano to express emotions beyond words.  
- **History Enthusiast:** Explores historical sites and events to foster empathy and gain perspective.  
- **Movies:** Enjoys impactful films like Schindler's List, Interstellar, and Source Code.  
- **TV Shows:** Sci-fi and fiction, including The Vampire Diaries.  

---

**Contact Information**

- **Phone:** (+91) 9537584862  
- **Email:** aayushpagare21@gmail.com  
- **LinkedIn:** [Aayush Pagare](https://www.linkedin.com/in/aayush-pagare-5817a81aa/)  
- **GitHub:** [Aayush Pagare](https://github.com/aayushpagare21-compcoder)  
- **Medium:** [Aayush Pagare](https://medium.com/@aayushpagare21)  
`;

const Example = () => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{mdxContent}</ReactMarkdown>
  );
};

export default Example;
