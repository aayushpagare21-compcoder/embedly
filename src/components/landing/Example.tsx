const Example = () => {
  return (
    <div>
      <div className="text-blue-400 mt-2"> 1. Basic information. </div>
      <ul className="list-disc list-inside p-4">
        <li> Name: Aayush Upendra Pagare. </li>
        <li> Gender: Male </li>
        <li> Pronouns: He, Him </li>
        <li> From: Vadodara, Gujarat India. </li>
        <li> occupation: Self employed, freelancer </li>
        <li> software developer, technical writer.</li>
      </ul>
      <div>
        <div> Professional Introduction. </div>
        {`I'm a full-stack developer by day and a technical writer by night.
I worked as a Software Developer at Matlabinfotech for 1 year and 9 months, where I gained experience in technologies like Nest.js, React.js, PostgreSQL, Prisma, Snowflake, DBT, and Jest. I also contributed to an exciting project, developing a Slack bot to automate workflows within the company.
During weekends, my fascination with Docker inspired me to build a remote code execution project, exploring containerization and secure execution environments.
Wanting to build an app end-to-end and explore Generative AI technologies, I created AspirantsAI. Using the Next.js framework, I handled everything from frontend and backend development to database management and deployment.
I write technical blogs to share insights, document learnings, and contribute to the developer community. Check my medium profile.
I am enthusiastic about remote work and collaborative opportunities worldwide, eager to contribute to impactful projects irrespective of geographical boundaries.`}
      </div>
      <div className="text-blue-400 mt-2"> 2. Academic Qualifications</div>
      <ul className="list-disc list-inside p-4">
        <li>
          Educational Qualifications: B.E. Computer Science and Engineering
          (2023).
        </li>
        <li>College: Babaria Institute of Technology.</li>
        <li>University: Gujarat Technological University. </li>
        <li>CGPA: 9.21 / 10.00 </li>
      </ul>
      <div className="text-blue-400 mt-2"> 3. Professional experience. </div>
      <ul className="list-disc list-inside p-4">
        <li>Industry: Service based IT company</li>
        <li>Duration: (Jan 2023 to Oct 2024) </li>
        <li>Role: Junior software developer. </li>
        <li>Company: Matlabinfotech (https://www.matlabinfotech.com) </li>
      </ul>
      <div className="text-blue-400 mt-2"> 4. Projects I have worked on </div>

      <div>
        <div>
          <span className="text-pink-400"> Kanmon: </span>
          Kanmon is a fintech application based on the concept of embedded
          landing. I worked as a Full Stack Developer at Kanmon, where I was
          responsible for implementing user stories, fixing bugs, writing unit
          test cases, and conducting end-to-end testing prior to releases. My
          role also involved ensuring the delivery of high-quality,
          production-ready features.
          <ul className="list-disc list-inside p-4">
            <li>
              Utilized Orum.io to implement recurring payments for all Kanmon
              Products.
            </li>
            <li>
              Implemented complete Pay Now feature for products like Term Loan,
              Invoice Financing and LOC.{" "}
            </li>
            <li>
              Implemented monthly borrower statements and platform statements
              generation with puppeteer.{" "}
            </li>
            <li>Developed and documented REST APIs for platforms.</li>
          </ul>
          Skills: Typescript, Snowflake, DBT, PostgresSQL, Prisma, Census,
          Next.js, React.js, Taiwind, MaterialUI, Nest.js, Jest, React testing
          library, customer.io, Orum, Plaid.
        </div>
        <div className="mt-4">
          <span className="text-pink-400">
            {" "}
            Virutal HR: HR Processes Automation Tool using N8N and Slack bolt{" "}
          </span>
          <ul className="list-disc list-inside p-4">
            <li>Utilized tools like Slack-Bolt and N8N.</li>
            <li>Implement a leave automation system.</li>
            <li>Implement a resume parsing system.</li>
          </ul>
          Skills: n8n, slack-bolt, slack api, mongoose.
        </div>
      </div>

      <div className="text-blue-400 mt-4">5. Personal Projects:</div>
      <span className="text-pink-400"> AspirantsAI : </span>
      <div>
        {`AspirantsAI is an all-in-one platform that leverages artificial
        intelligence to enhance the preparation process for UPSC Mains
        aspirants. It features AffairsQuest, an intelligent tool that connects
        current affairs to relevant PYQs, and SmartCheck, which provides
        detailed feedback on handwritten answers. Designed to streamline
        studies, AspirantsAI empowers aspirants with efficient search
        capabilities, insightful answer reviews, and tools for comprehensive
        preparation. Whether you're aiming to master current affairs, improve
        answer-writing skills, or access tailored resources, AspirantsAI is your
        companion for UPSC success.`}
      </div>
      <ul className="list-disc list-inside p-4">
        <li>Github: https://github.com/aayushpagare21-compcoder/aspirants</li>
        <li>
          Medium:
          https://medium.com/operations-research-bit/smartcheck-ai-based-upsc-mains-answer-evaluator-b126bec4b21e
        </li>
      </ul>
      <span className="text-pink-400 mt-2"> Remote code execution : </span>
      <div>
        Developed a real-time code execution engine in Node.js, optimizing for
        handling multiple concurrent requests effectively. Implemented Node.js
        child processes for managing CPU-bound tasks, enhancing system
        performance and responsiveness Integrated RabbitMQ for message queuing,
        establishing an asynchronous architecture where the server quickly
        responds to client requests while background tasks execute
        independently. Secured the system with Docker for isolated environments
        and Redis for fast data storage, ensuring robustness against malicious
        attacks and efficient data management. Skills: Node, Express, Rabbit MQ,
        Redis, Docker, AWS EC2 (basic)
        <ul className="list-disc list-inside p-4">
          <li>
            {" "}
            GitHub:
            https://github.com/aayushpagare21-compcoder/remote-code-execution
          </li>
          <li>
            Implement a leave automation system.Medium:
            https://medium.com/operations-research-bit/remote-code-execution-engine-432c86b78ab1t
            a resume parsing system.
          </li>
        </ul>
        <div className="text-blue-400 mt-4">6. Services:</div>
        <ul className="list-disc list-inside p-4">
          <li>An Nextjs app deployed on Vercel. </li>
          <li>
            Deploy the Next.js application to Vercel and ensure it is bug free.
            Verify production build and performance. Ensure proper environment
            configurations for deployment.
          </li>
          <li>An Nextjs app deployed on Vercel. </li>
          <li>
            Deploy the Next.js application to Vercel and ensure it is bug free.
            Verify production build and performance. Ensure proper environment
            configurations for deployment.
          </li>
          <li>
            AI integrations, agents, chatbots and semantic search Implement AI
            integrations (e.g., Google GeminiAI, LangChain, GPT-based models,
            etc.) into the app for various purposes, such as semantic search and
            chatbots. Set up AI agents capable of handling user queries and
            providing relevant answers. Configure and integrate semantic search
            for improved question-answer retrieval or similar use cases.
            Optimize AI agents to improve their performance and relevance.
          </li>
          <li>
            custom domain setup Register and configure a custom domain for the
            application. Ensure that DNS settings are correctly configured to
            point to Vercel. Verify that the domain is secure with an SSL
            certificate.
          </li>
          <li>
            GitHub repo with code Create a public or private GitHub repository
            containing the source code of the Next.js app, AI integrations, and
            related configurations. Set up proper version control and branching
            strategy. Ensure the repository is well-maintained with regular
            commits and proper structure.
          </li>
          <li>
            technical documentation. Provide clear documentation on how the
            application is set up, deployed, and used. Include instructions for
            setting up the development environment, configuring AI integrations,
            and deploying to Vercel. Document any APIs, configurations, and
            tools used in the project (e.g., setup of AI agents, semantic
            search, etc.). Include setup steps for custom domain configuration
            and any security settings required.
          </li>
        </ul>
        <div className="text-blue-400 mt-4">7. Hobbies:</div>
        <div>
          {`I am a pianist, and playing the piano is one of my greatest passions. It allows me to express emotions in a way that words often cannot. Beyond music, I have a deep love for exploring history. Delving into the past not only enriches my understanding of the world but also teaches me invaluable lessons. History reminds me that the world has come a long way and has become a better place over time. It fosters empathy within me, as understanding the struggles and triumphs of those who came before helps me connect with diverse perspectives.
I also enjoy watching good movies that leave a lasting impact. One movie that I’ve always loved and remember fondly is Schindler's List. The story of Oskar Schindler's courage and humanity during one of history’s darkest periods is both moving and inspiring.
When it comes to entertainment, my interests don’t stop at history; I also have a strong appreciation for fiction and sci-fi. Some of my favorites include The Vampire Diaries, which captivated me with its intricate storytelling and compelling characters, as well as thought-provoking films like Interstellar and Source Code. These works fuel my imagination and make me marvel at the endless possibilities of storytelling and technology.
Music, history, and cinema all play a significant role in shaping who I am. They inspire me, challenge my perspective, and keep me connected to both the past and the future.
`}
        </div>
      </div>

      <div className="text-blue-400 mt-4">8. Contact Us:</div>
      <ul>
        <li> phone: (+91) 9537584862 </li>
        <li> email: aayushpagare21@gmail.com</li>
        <li> Medium url: https://medium.com/@aayushpagare21 </li>
        <li>
          {" "}
          Linkden url: https://www.linkedin.com/in/aayush-pagare-5817a81aa/{" "}
        </li>
        <li> GitHub url: https://github.com/aayushpagare21-compcoder </li>
      </ul>
    </div>
  );
};

export default Example;
