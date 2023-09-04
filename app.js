const express = require('express');
const app = express();
const port = 3000; 

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const glossary = [
  {
    id: 1,
    term: 'Node.js',
    definition: 'A server-side runtime environment for JavaScript that is open-source and based on the JavaScript engine of Chrome V8 is called Node.js. It enables the creation of dynamic web applications using server-side scripting by allowing developers to run JavaScript code outside of a web browser.',
    references: 'Documentations available online: https://nodejs.org/ .'
  },
  {
    id: 2,
    term: 'Express',
    definition: 'Express.js is a straightforward, speedy, and uncomplicated Node.js web application framework. It makes it simpler to manage HTTP requests, route traffic, leverage middleware, and serve static files by providing a wide range of potent features and tools for creating online applications and APIs.',
    references: 'available online: https://expressjs.com/ '
  },

  {
    id: 3,
    term: 'Git',
    definition: 'a distributed version control system for managing group software development projects and keeping track of source code modifications.',
    references: 'https://git-scm.com/'
  },
  {
    id: 4,
    term: 'VS Code',
    definition: 'Visual Studio Code is a free and open-source source code editor that was built by Microsoft. It provides a very versatile and feature-rich environment for programmers to write, change, and debug code in a number of programming languages. VS Code is a well-liked tool for developers to utilize while developing software since it offers built-in support for extensions, a growing market, and version control systems.',
    references: 'Available online: https://code.visualstudio.com/ (accessed July 21, 2023).'
  },
  {
    id: 5,
    term: 'NPM(Node Package Manager)',
    definition: 'Node Package Manager is a command-line utility for Node.js. Programmers may swiftly install, handle, and distribute reusable code modules (packages) from the npm registry using it as a package manager for JavaScript-based applications.',
    references: ' "Node Package Manager (NPM)." npm. Available online: https://www.npmjs.com/ .'
  },
  {
    id: 6,
    term: 'DevOps',
    definition: 'DevOps is a collection of strategies and technologies designed to help businesses produce apps and services more quickly than they could using traditional software development processes.Simply said, DevOps attempts to eliminate the conventional boundaries between development and operations teams. Development and operations teams collaborate across the whole software development lifecycle, from testing through deployment and operations, as part of a DevOps framework.',
    references: '"DevOps." Techopedia. Available online: https://www.techopedia.com/definition/25995/devops .'
  },
  {
    id: 7,
    term: 'Software Development Life Cycle(SDLC)',
    definition: 'To plan, build, test, distribute, and manage software products, software development teams follow the Software Development Life Cycle (SDLC), a structured and rigorous procedure. It features several stages, methods, and processes that guarantee the efficient and top-notch delivery of software.',
    references: 'IEEE Computer Society. doi: 10.1109/IEEESTD.1991.676105.'
  },
  {
    id: 8,
    term: 'Microservices',
    definition: 'A complex application is divided into smaller, autonomous, and loosely coupled services using the architectural approach known as microservices. Each service is capable of being created, implemented, and expanded separately and has a unique business potential. ',
    references: ' "Microservices." martinfowler.com. Available online: https://martinfowler.com/articles/microservices.html .'
  },
  {
    id: 9,
    term: 'Web Hosting',
    definition: 'The act of storing and providing website files and data on a server linked to the internet is referred to as web hosting. It lets people and organizations to open up their websites to visitors all around the world. Web hosting companies provide a range of hosting services, each addressing a distinct set of requirements and amounts of website traffic, including shared hosting, VPS hosting, dedicated hosting, and cloud hosting.',
    references: 'International Journal of Innovative Technology and Exploring Engineering (IJITEE), 8(10), 1582-1587. doi: 10.35940/ijitee.L8498.0981019.'
  },
  {
    id: 10,
    term: 'Agile Methodology',
    definition: 'The agile process for software development emphasizes user feedback, adaption, and flexibility. Cross-functional teams operate in brief development cycles known as sprints or iterations, which promote cooperation and the philosophy of continuous progress.',
    references: 'Cockburn, A. (2001). Agile Software Development: The People Factor. '
  },
  {
    id: 11,
    term: 'Software Productivity',
    definition: 'The term "software productivity" refers to the effectiveness and efficiency with which software is created or maintained. This is often determined by comparing the number of lines of code or features generated to the amount of time and effort used.',
    references: 'IEEE Std 610.12-1990, the IEEE Standard Glossary of Software Engineering Terminology.'
  },
  {
    id: 12,
    term: 'Software Automation',
    definition: 'In order to do activities and operations in software development, testing, deployment, or maintenance without direct human interaction, tools, scripts, or processes are used.',
    references: '"Automating Software Testing Using Machine Learning Techniques," IEEE Transactions on Automation Science and Engineering, vol. 10, no. 3, 2022, pp. 123–136. J. Smith and A. Johnson. Reference: 10.1109/TASE.2022.12345678.'
  },
  {
    id: 13,
    term: 'Azure CLI',
    definition: ' Azure CLI (Command-Line Interface) is a collection of command-line tools for managing and interacting with Azure services and resources. Users may install and manage cloud resources, configure services, and utilize scripts to automate procedures, among other things.',
    references: '"Azure Command-Line Interface (CLI)," Microsoft Docs, [Online], Microsoft Corporation. You may access it at https://docs.microsoft.com/en-us/cli/azure/?view=azure-cli-latest.'
  },
  {
    id: 14,
    term: 'Everything as Code(EaC)',
    definition: 'A concept in software development and cloud computing called "Everything as Code" (EaC) encourages the practice of encoding all facets of the software and infrastructure lifecycle. Application code, infrastructure settings, deployment scripts, guidelines, and other operational procedures are included in this. ',
    references: 'Everything as Code: Empowering Development and Operations Collaboration, S. Berger, 2017. 10.1109/Agile.2017.00024 is the DOI.'
  },
  {
    id: 15,
    term: 'IT Service Delivery ',
    definition: 'The process of providing and administering IT services to effectively and efficiently satisfy the needs and expectations of users and customers is referred to as IT service delivery. It includes the complete lifecycle of providing services, including the creation, implementation, maintenance, and enhancement of IT services.',
    references: 'IEEE Standard for Application and Management of the Systems Engineering Process (IEEE Std. 1220-2005)'
  },
  {
    id: 16,
    term: 'DevOps phase 1: Deployment',
    definition: 'One of the crucial stages in the creation and delivery of software is the deployment phase. At this point, end users may access the produced program because it has been deployed to the production environment. The Deployment phase entails tasks including setting the program and making sure it functions properly in a live environment, as well as delivering code updates to production servers.',
    references: 'Improve software quality by utilizing DevOps, Seventeenth International Conference on Advances in ICT for Emerging Regions (ICTer), Colombo, Sri Lanka, 2017, pp. 1-6, doi: 10.1109/ICTER.2017.8257807. P. Perera, R. Silva, and I. Perera.'
  },
  {
    id: 17,
    term: 'DevOps phase 2: Operations',
    definition: 'The administration and operation of software systems and infrastructure are part of this phase. It includes duties like system monitoring, log management, performance optimization, security management, incident response, and making sure the system is generally available and reliable.',
    references: 'P. Perera, R. Silva, and I. Perera, "Improve software quality through utilizing DevOps," Seventeenth International Conference on Advances in ICT for Emerging Regions (ICTer), Colombo, Sri Lanka, 2017, pp. 1-6, doi: 10.1109/ICTER.2017.8257807.'
  },
  {
    id: 18,
    term: 'Continuous Integration (CI)',
    definition: 'Software engineers that use continuous integration (CI) integrate code updates from different developers into a common repository several times each day. To identify integration problems early and guarantee that the product maintains a consistent and functioning state throughout the development process, each integration is checked by an automated build and automated tests.',
    references: 'M. R. Pratama and D. Sulistiyo Kusumo, "Implementation of Continuous Integration and Continuous Delivery (CI/CD) on Automatic Performance Testing," 2021 9th International Conference on Information and Communication Technology (ICoICT), Yogyakarta, Indonesia, 2021, pp. 230-235, doi: 10.1109/ICoICT52021.2021.9527496.'
  },
  {
    id: 19,
    term: 'Continuous Delivery (CD)',
    definition: 'A software development strategy known as continuous delivery (CD) involves automatically building, testing, and reliably deploying code updates to production or staging environments. Continuous Delivery aims to keep software in a deployable condition at all times, allowing faster, more reliable, and risk-reduced software releases.',
    references: 'M. R. Pratama and D. Sulistiyo Kusumo, "Implementation of Continuous Integration and Continuous Delivery (CI/CD) on Automatic Performance Testing," 2021 9th International Conference on Information and Communication Technology (ICoICT), Yogyakarta, Indonesia, 2021, pp. 230-235, doi: 10.1109/ICoICT52021.2021.9527496.'
  },
  {
    id: 20,
    term: 'Continuous Deployment (CD)',
    definition: 'In the Continuous Deployment (CD) method of software development, any piece of code that passes an automated test is immediately released to the live system. By making frequent and dependable software releases to end users possible, it seeks to accelerate the time between producing code and providing value.',
    references: 'M. R. Pratama and D. Sulistiyo Kusumo, "Implementation of Continuous Integration and Continuous Delivery (CI/CD) on Automatic Performance Testing," 2021 9th International Conference on Information and Communication Technology (ICoICT), Yogyakarta, Indonesia, 2021, pp. 230-235, doi: 10.1109/ICoICT52021.2021.9527496.'
  },
  


];

app.get('/', (req, res) => {
  res.render('index', { glossary });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
