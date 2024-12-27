import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const mdxContent = `
**Basic Information**  
Aayush Upendra Pagare is a male, and his pronouns are He/Him. He is from Vadodara, Gujarat, India, and works as a self-employed freelancer, specializing as a software developer and technical writer.

---

**Professional Introduction**  
Aayush is a full-stack developer by day and a technical writer by night. He worked as a Software Developer at Matlabinfotech for 1 year and 9 months, where he gained experience in technologies such as Nest.js, React.js, PostgreSQL, Prisma, Snowflake, DBT, and Jest. During his time at Matlabinfotech, Aayush contributed to a significant project by developing a Slack bot to automate workflows within the company.

Outside of his work hours, Aayush explored his interest in Docker, leading him to build a remote code execution project, where he delved into containerization and secure execution environments.  

Keen on building an app end-to-end and exploring Generative AI technologies, Aayush created **AspirantsAI**. This project involved using the Next.js framework, where he handled everything from frontend and backend development to database management and deployment.

In addition to his development work, Aayush writes technical blogs to share insights, document learnings, and contribute to the developer community. You can check out his Medium profile for more details.

Aayush is enthusiastic about remote work and collaborative opportunities worldwide, and he is eager to contribute to impactful projects regardless of geographical boundaries.

---

**Academic Qualifications**  
Aayush completed his primary and secondary education at **Saint Basil School**, achieving a 96 percentile in his 10th board exams and a 90 percentile in his 12th board exams. He then pursued a **Bachelor of Engineering in Computer Science and Engineering** from **Babaria Institute of Technology**, under **Gujarat Technological University**, graduating in 2023 with a CGPA of **9.21 / 10.00**.

---

**Professional Experience**  

**Company:** Matlabinfotech ([https://www.matlabinfotech.com](https://www.matlabinfotech.com))  
**Role:** Junior Software Developer  
**Duration:** January 2023 to October 2024  
**Industry:** Service-based IT company  

At Matlabinfotech, Aayush worked on multiple projects, the most notable being **Kanmon**, a fintech application based on embedded lending. As a full-stack developer at Kanmon, Aayush was responsible for implementing user stories, fixing bugs, writing unit test cases, and conducting end-to-end testing before releases. He ensured that high-quality, production-ready features were delivered.

During his time at Kanmon, Aayush:
- Utilized **Orum.io** to implement recurring payments for all Kanmon products.
- Implemented the **Pay Now** feature for products like Term Loans, Invoice Financing, and LOC.
- Developed and automated the generation of monthly borrower statements and platform statements using **Puppeteer**.
- Designed and documented REST APIs for various platforms.

In addition to his work at Kanmon, Aayush also contributed to a project called **Virtual HR**, which automated HR processes using **N8N** and **Slack Bolt**. He helped implement systems for leave automation and resume parsing.

---

**Skills:**  
- **Programming Languages:** TypeScript, JavaScript  
- **Databases & Tools:** Snowflake, DBT, PostgreSQL, Prisma, Census  
- **Frontend:** Next.js, React.js, Tailwind, Material UI  
- **Backend:** Nest.js, Express  
- **Testing & Development:** Jest, React Testing Library  
- **Other Tools:** Customer.io, Orum, Plaid, Slack API, Mongoose, N8N, RabbitMQ, Redis, Docker, AWS EC2  

---

**Personal Projects**  

1. **AspirantsAI**  
AspirantsAI is an all-in-one platform designed to enhance the preparation process for UPSC Mains aspirants. It includes **AffairsQuest**, an intelligent tool that links current affairs to relevant previous year questions (PYQs), and **SmartCheck**, an AI-powered tool that provides detailed feedback on handwritten answers. AspirantsAI helps students improve their current affairs knowledge, enhance their answer-writing skills, and access tailored resources for their UPSC preparation.  
Skills: Next.js, Vercel, NeonDB, ShadcnUI, Prisma, PostgreSQL, LangchainJS, AWS Textract, Google Search Console, AWS S3, SEO  
**Live URL:** [https://www.aspirantsai.com](https://www.aspirantsai.com)  
**GitHub:** [https://github.com/aayushpagare21-compcoder/aspirants](https://github.com/aayushpagare21-compcoder/aspirants)  
**Medium Blog:** [SmartCheck: AI-based UPSC Mains Answer Evaluator](https://medium.com/operations-research-bit/smartcheck-ai-based-upsc-mains-answer-evaluator-b126bec4b21e)

2. **Remote Code Execution Engine**  
Aayush developed a real-time code execution engine in **Node.js**, designed to handle multiple concurrent requests efficiently. He used **Node.js child processes** for managing CPU-bound tasks, **RabbitMQ** for message queuing, and **Docker** for secure execution environments. The system was further optimized using **Redis** for fast data storage, ensuring it was robust against malicious attacks.  
Skills: Node.js, Express, RabbitMQ, Redis, Docker, AWS EC2  
**GitHub:** [https://github.com/aayushpagare21-compcoder/remote-code-execution](https://github.com/aayushpagare21-compcoder/remote-code-execution)  
**Medium Blog:** [Remote Code Execution Engine](https://medium.com/operations-research-bit/remote-code-execution-engine-432c86b78ab1s)

3. **Embedme**  
Embedme is a platform that integrates seamlessly into any portfolio website, helping users represent themselves and showcase their unique professional identity.  
**GitHub:** [https://github.com/aayushpagare21-compcoder/embedme](https://github.com/aayushpagare21-compcoder/embedme)

---

**Services**  

Aayush offers a service where he can create a **Next.js app** integrated with AI for clients. The service includes:  
- Deployment of the app on **Vercel**, ensuring it is bug-free and optimized for performance.
- Integration of AI technologies, such as **Google GeminiAI**, **LangChain**, and GPT-based models, for various purposes like semantic search and chatbots.
- Custom domain setup, including registration and configuration for SSL certificates.
- Providing a **GitHub repository** for source code, including AI integrations and configurations.
- Comprehensive **technical documentation** on setup, deployment, and usage.

---

**Hobbies**  
Aayush has a deep passion for **playing the piano**, allowing him to express emotions in a unique way. He also enjoys exploring **history**, finding it an enriching way to connect with the world and empathize with diverse perspectives. Among his favorite movies is **Schindler's List**, a film that tells a moving story of humanity during a dark period in history.

In addition to history, Aayush enjoys **fiction and sci-fi**, with favorites including **The Vampire Diaries**, **Interstellar**, and **Source Code**. These works inspire his imagination and foster his appreciation for storytelling and technology.

---

**Contact Information**  
- **Phone:** (+91) 9537584862  
- **Email:** [aayushpagare21@gmail.com](mailto:aayushpagare21@gmail.com)  

**Social Media:**  
- **LinkedIn:** [Aayush Pagare](https://www.linkedin.com/in/aayush-pagare-5817a81aa/)  
- **GitHub:** [Aayush Pagare GitHub](https://github.com/aayushpagare21-compcoder)  
- **Medium:** [Aayush Pagare Medium](https://medium.com/@aayushpagare21)
`;

const Example = () => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{mdxContent}</ReactMarkdown>
  );
};

export default Example;
